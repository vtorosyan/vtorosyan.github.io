---
layout: post
title: Managing BigQuery UDFs by Terraform
---

[Terraform](https://www.terraform.io/) is a tool for building, changing and versioning infrastructure resources. Almost any infrastructure type can be managed as a resource in Terraform. [Terraform providers](https://www.terraform.io/docs/providers/index.html) are responsible for understanding API interactions with your infrastructure. There is an extensive list of available providers which covers most common infrastructure resources, and [Google Cloud Platform Provider](https://www.terraform.io/docs/providers/google/index.html) is one of them. There are cases however, when providers do not provide an API for managing specific resources of your infrastructure. [User-Defined Functions in BigQuery](https://cloud.google.com/bigquery/docs/reference/standard-sql/user-defined-functions) is one of the resources which is currently not supported by GCP provider (Versions <= 3.0) 

## Introducing to Terraform Provisioners

[Provisioners in Terraform](https://www.terraform.io/docs/provisioners/) can be used to model and execute specific actions on the _local machine_ or on a _remote machine_.

In most cases, you don't need to use provisioners. Moreover, **using provisioners should be a last resort**. An example of this could be the case described above (BigQuery UDF), when Terraform provider itself doesn't have built-in support for desired resource.

There are several available provisioners, local-exec is one of them, which allows us to overcome beformentioned problem.

### local-exec provisioner

The [local-exec](https://www.terraform.io/docs/provisioners/local-exec.html) provisioner executes a local command after a resource is created. It invokes **the process on the machine which runs Terraform, not on the resource**. 

Example usage (we will talk about `null_resource` next):

```
resource "null_resource" "my_resource" {
  provisioner "local-exec" {
    command = "echo 'Hello World'"
  }
}
```

The above resource will simply `echo` `Hello World` after the resource is created. It's important to note, that by default **local-exec provisioner will execute the command [only once](https://www.terraform.io/docs/provisioners/index.html#creation-time-provisioners), after the creation of the resource**. In addition, even though the resource will be fully created when the provisioner is run, there is no guarantee that it will be in an operable state (e.g. the command you execute might not be started on the machine).


## Introducing to Null Provider

The `null_resource` used in the above example is available from [null](https://www.terraform.io/docs/providers/null/index.html) provider. The intention of the `null` provider is to do nothing. This is very handy in scenarios where you want to implement the standard resource lifecycle, but take no further action.

`triggers` argument available in `null_resource` is used to detect changes in the resource and forces the null resource to be replaced by re-running the specified provisioner.

Example trigger:

```
locals {
  my_message = "Hello World"
}
resource "null_resource" "my_resource" {
  
  triggers = {
    message = local.my_message
  }
  provisioner "local-exec" {
    command = "echo ${local.my_message}"
  }
}

```

In the above scenario, every time we change the value of `my_message` local variable, null resource will re-run the command in the specified provisioner.

## Terraform resource for BigQuery UDF

Now that we learned about `local-exec` provisioner and `null_resource`, we can define a terraform resource which will manage UDF lifecycle in the same way as any other built-in resource available from the GCP provider! 

We noted above that `local-exec` is going to run specified command on the machine Terraform is running. We will leverage [bq command-line](https://cloud.google.com/bigquery/docs/bq-command-line-tool) for the sake of the purpose and run a simple query which will create our UDF.


```
locals {
  my_udf_definition = <<EOF
CREATE OR REPLACE FUNCTION timesTwo(x INT64)
RETURNS INT64
  LANGUAGE js AS """
  return x*2;
""";
EOF
}
resource "null_resource" "my_udf_resource" {
  triggers = {
    udf        = local.my_udf_definition
  }
  provisioner "local-exec" {
    interpreter = ["bq", "query", "--use_legacy_sql=false", "--project_id=my_project"]
    command     = local.my_udf_definition
  }
}
```

The above definition will run the command everytime the value of `my_udf_definition` is changed and we essentially have the same behaviour as with any other GCP resource.

## Take-aways

- Terraform provisioners are great to overcome limitations faced with built-in resources and providers.
- Although provisioners are handy, they should be used only as a last resort. Prefer built-in resources from existing providers instead.
- `null` provider is very helpful when it comes to implementing custom resources by maintaining the same resource lifecycle.
- With the help of Google Cloud SDK, we can essentially implement all missing resources by ourselves.