---
layout: post
title: Hosting a private repo on S3 (Gradle tricks)
---

We want to keep our private artifacts _private_, making sure that only people with appropriate rights have an access to them. [AWS S3](http://docs.aws.amazon.com/AmazonS3/latest/dev/Welcome.html){:target="_blank"} is a good candidate to consume and deploy such artifacts.

S3 comes with built-in authentication and authorization, usually provides 99.99% availability and redundancy and requires really small amount of maintainance. Unless you don't have some huge size of artifacts to be stored, the [cost](https://aws.amazon.com/s3/pricing/){:target="_blank"} is really small. 

Starting from version [2.4](https://docs.gradle.org/2.4/release-notes){:target="_blank"}, Gradle supports consuming and publishing of dependencies from and to AWS S3. 

### Setting up S3 bucket

AWS team is doing great job on writing documentation, so I'll skip S3 setup part - just take into account the following prerequisites

* [Setup IAM user](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html#id_users_create_console){:target="_blank"}
* [Prepare S3 bucket](http://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html){:target="_blank"}
* [Attach a policy with read/write access (from/to S3 bucket) to IAM user](http://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html){:target="_blank"}

### Consume and publish dependencies with Gradle

In order to [declare a S3 backed Maven repository](https://docs.gradle.org/current/userguide/dependency_management.html#sec:dependency_configurations){:target="_blank"}, the only thing we need is IAM user credentials (secret and access)

```
// build.gradle

repositories {
    maven {
        url "s3://myRepo/myLibraryDir"
        credentials(AwsCredentials) {
            accessKey "someKey"
            secretKey "someSecret"
        }
    }
}
```

To publish, we simply need to apply [maven-publish](https://docs.gradle.org/current/userguide/publishing_maven.html){:target="_blank"} plugin and use it as follows

```
// build.gradle
apply plugin: 'maven-publish'

publishing {
    repositories {
        maven {
            url "s3://myRepo/myLibraryDir"
            credentials(AwsCredentials) {
                accessKey "someKey"
            	secretKey "someSecret"
            }
        }
    }
}
```

### Reading credentials from AWS config files

The _problem_ with above setup is that you have to hardcode credentials in `build.gradle` file. AWS SDKs are using provider chain to look for [AWS credentials in number of places](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html){:target="_blank"}, including system or user environement variables and local AWS configuration files. It is very convenient, as you setup once and forget about maintaining credentials elsewhere. 

Unfortunatly Gradle doesn't support this and it will throw en error if `accessKey` and `secretKey` are not provided. A better alternative would be to try to load credentials from default configuration files.

Fortunately, with couple of lines of code we can use AWS SDK itself to fetch credentials. The only downside is that we have to add a dependency to AWS SDK in our project (it's not downside if you already use it ;) )

```
// build.gradle
import com.amazonaws.auth.*
import com.amazonaws.auth.profile.*

buildscript {    
    repositories {
        mavenCentral()
    }
    dependencies {
        classpath 'com.amazonaws:aws-java-sdk-core:1.11.5'        
    }
}

def fetchAwsCredentials = {
    try {
        return new ProfileCredentialsProvider().credentials
    } catch (Exception e) {
        logger.debug('Unable to retrieve AWS credentials from profile, publishing to S3 will not be available.', e)
            return null
    }
}
AWSCredentials awsCredentials = fetchAwsCredentials()

publishing {
    repositories {
        maven {
            url "s3://myCompanyBucket/myDir"
            credentials(AwsCredentials) {
                accessKey = awsCredentials.AWSAccessKeyId
                secretKey = awsCredentials.AWSSecretKey
            }
        }
    }
}
```
When accessing access and secrey keys, AWSCredentials class tries to fetch them from the following places in according precendence

* Environment variables
* The AWS credentials file (located at `~/.aws/credentials`)
* The AWS CLI configuration file (located at `~/.aws/config`)
* Instance profile credentials (used on EC2 instances)

This becomes especially convenient when you provision your servers and your local environement in a centralized way - setup once and use it everywhere.

I hope soon we'll see built-in support from Gradle, meanwhile the code above is solid solution for the problem.

P.S. I personally think that S3 is ideal candidate for hosting a private repo, however I'd advice to consider alternatives too (e.g. Github, Nexus, Dropbox, Jfrog, own public server, etc), which may work better in some cases.
