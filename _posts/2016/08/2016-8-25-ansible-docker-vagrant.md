---
layout: post
title: Ansible. Docker. Vagrant. Bringing together 
---

Giving the challenges of building and maintaining a complex software it’s really hard to manage the provisioning, orchestration, build and deployment of applications easily. Fortunately there are tools and engines coming for help. 

In the following article we’ll see how [Ansible](https://www.ansible.com/){:target="_blank"}, [Docker](https://www.docker.com/){:target="_blank"} and [Vagrant](https://www.vagrantup.com/){:target="_blank"} can be used to provision and install necessary software on environment where you can build and deploy an application. Having the setup it will be possible to run the application in any environment where the prerequisites are installed. 

Here is a quick overview about the tools we are going to use:

### Ansible

[Ansible](https://www.ansible.com/how-ansible-works){:target="_blank"} is an IT automation engine written in Python. With Ansible it is possible to automate provisioning, orchestration, configuration management and deployment of applications. 

[Ansible Playbooks](http://docs.ansible.com/ansible/playbooks.html){:target="_blank"} are written using YAML syntax, so that you have it in human-readable format and no complex knowledge is required to understand what it does. In practice, you can pass your Ansible Playbooks to a third person and in couple of minutes he/she will have an idea how you manage provisioning for your product.

### Docker

[Docker](https://www.docker.com/what-docker){:target="_blank"} is a nice toy to build and deploy any kind of application into lightweight Linux containers. It’s important to understand that Docker is not a VM. Unlike VM’s, Docker is based on [AUFS](https://en.wikipedia.org/wiki/Aufs){:target="_blank"}. It shares the same kernel and filesystem of the machine where it is hosted. It comes with a great CLI which makes interaction with Docker engine really easy and supports versioning of the images.

### Vagrant

[Vagrant](https://www.vagrantup.com/docs/why-vagrant/){:target="_blank"}{:target="_blank"} is a virtual machine manager. It is easy to configure, and by default comes with support of the providers such as Docker, VirtualBox and VMware. The great thing about Vagrant is that you can use all modern provisioning tools (e.g Chef, Puppet, Ansible) to install and configure software on the virtual machine.

## The goal

* Write a RESTfull API which exposes resource to say hello to the world.
* Package, build and deploy an application using Ansible.
* Write a [docker image](https://docs.docker.com/engine/tutorials/dockerimages/){:target="_blank"} to be used as provider for Vagrant.
* Run Vagrant VM, provision it with Ansible using Docker container as a provider.
* Expose the HelloWorld endpoint to the host from VM.

### Step 1 (pre-requisite): Install Vagrant 

Installing Vagrant is easy, check out the [download](https://www.vagrantup.com/downloads.html){:target="_blank"} page and follow the instructions. 

In addition we need to install a plugin that manages the `hosts` file in guest machine. 

```
vagrant plugin install vagrant-hostmanager
```

### Step 2: Building a Hello World resource

The API needs to be as simple as possible and for the sake of purpose we use [Spring Boot](http://projects.spring.io/spring-boot/){:target="_blank"}{:target="_blank"} and write the code in [Kotlin](https://kotlinlang.org/){:target="_blank"}. As our goal is to demonstrate the power of Ansible, Docker and Vagrant, we won’t go into the details of building the API; the source code is available [here](https://github.com/vtorosyan/ansible-docker-vagrant-example){:target="_blank"}.

The endpoint has the following specification

```
URL: /hello/:name
HTTP Method: GET
```

### Step 3: Writing Dockerfile

The Dockerfile is going to copy the project sources in order to build and deploy it. In addition we install OpenSSH and expose 8080 port so that it can be accessed by VM.

```yaml
# Version 1.0.0
FROM ubuntu:latest
MAINTAINER vtor

RUN echo 'root:root' | chpasswd

RUN DEBIAN_FRONTEND=noninteractive apt-get update
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y aptitude sudo openssh-server python2.7

ADD kotlin-hello-world /tmp/kotlin-hello-world
WORKDIR /tmp/kotlin-hello-world

RUN mkdir /var/run/sshd
RUN sed -i 's/PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config

EXPOSE 22 8080
CMD ["/usr/sbin/sshd", "-D"]
```
The [kotlin-hello-world](https://github.com/vtorosyan/ansible-docker-vagrant-example){:target="_blank"} project used in the docker file is our application source which we built in Step 1.


### Step 4: Writing Vagrantfile

The following things are included in the Vagrantfile

* Build a Docker image and use it as VM provider
* Forward the 8080 to the 7000 it available to the host
* Provision the machine with Ansible

```
ENV['VAGRANT_DEFAULT_PROVIDER'] = 'docker'
Vagrant.configure("2") do |config|

  config.ssh.username   = 'root'
  config.ssh.password   = 'root'

  config.hostmanager.enabled           = true
  config.hostmanager.manage_guest      = true

  config.vm.provider "docker" do |d|
    d.build_dir       = "."
    d.has_ssh         = true
    d.remains_running = true
  end

  config.vm.hostname = "ansible"
  config.vm.network "forwarded_port", guest: 8080, host: 7000, host_ip: "127.0.0.1", auto_correct: true
  config.vm.provision :hostmanager
  config.vm.provision :ansible do |ansible|
    ansible.playbook      = "ansible/run.yml"
    ansible.sudo          = true
  end

end
```

### Step 5: Creating Ansible Playbook

The Playbook consists of three roles

* Install and configure Maven
* Install and configure Java
* Build and deploy hello-world application

```yaml
---

- name: Setup environment to run the sample
  hosts: all
  remote_user: root
  become:      yes

  roles:

    - role: maven

    - role: java
      java:
        version: java8
        apt_repository: ppa:webupd8team/java

    - role: hello-world
```

Role to install java

```yaml
---

- name: Install Java repository
  apt: >
    name=software-properties-common
    state=latest
  tags: java

- name: Add Java Repository
  apt_repository: >
    repo='ppa:webupd8team/java'
  tags: java

- name: Accept java8 License
  debconf: >
    name='oracle-java8-installer'
    question='shared/accepted-oracle-license-v1-1'
    value='true'
    vtype='select'
  tags: java

- name: Install Oracle java8
  apt: >
    name={{ item }}
    state=latest
  with_items:
    - oracle-java8-installer
    - ca-certificates
    - oracle-java8-set-default
  tags: java  
```

Role to install Maven

```yaml
---

- name: Installing maven
  apt: >
    pkg={{ item }}
    state=latest
    update_cache=yes
    cache_valid_time=3600
  with_items:
    - maven
  tags: maven
```

Role to build and deploy hello-world application

```yaml
---

- name: Build the hello-world project
  command: >
    chdir=/tmp/kotlin-hello-world mvn clean package spring-boot:repackage
  tags: hello-world

- name: Add the executable jar into init.d
  file: src=/tmp/kotlin-hello-world/target/kotlin-hello-world-1.0-SNAPSHOT.jar
        dest=/etc/init.d/hello
        owner="root" group="root" mode=0755 state=link
  become: yes
  become_user: root
  tags: hello-world

- name: Run the hello-world
  become: yes
  become_user: root
  command: /etc/init.d/hello start
  tags: hello-world
  ignore_errors: yes
```

That’s it! Open the Terminal/Command Line  and go to the root directory of the project and run

```
vagrant up
```

It will take a couple of minutes before Vagrant boots and installs the software and deploys the app. Once Vagrant is up and running, open your favourite web browser and try the following URL:

```
http://127.0.0.1:7000/hello/<yourname>
```

As you can see it’s really easy to put Ansible, Docker and Vagrant together and use the power of each to have consistent, easily maintainable configuration management, provisioning, build and deployment of your projects. 

Check the [Github Repo](https://github.com/vtorosyan/ansible-docker-vagrant-example){:target="_blank"} for the full source code.
