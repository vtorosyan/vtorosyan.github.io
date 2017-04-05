---
layout: post
title: Docker unwrapped
---

Docker comes with great documentation. Sometimes though, with different components and tools, it gets less easy to make sense out of everything. I’ve tried to put together the most important parts.

## Table of Contents

* [Docker](#docker)
* [Docker Engine](#docker-engine)
* [Docker Client](#docker-client)
* [Docker Image](#docker-image)
* [Docker Container](#docker-container)
* [Docker Registries and Docker Hub](#docker-registries-and-docker-hub)
* [Docker Machine](#docker-machine)
* [Docker Engine Swarm mode](#docker-engine-swarm-mode)
* [Docker Compose](#docker-compose)

## Docker

- Is a platform to **develop** and **run** applications.
- Applications are packaged and run in isolated environment called [**container**](#docker-container).
- As containers are isolated, it allows to run many containers simultaneously on the same host.

## Docker Engine

- Is a *client-server application*. Usually when people talk about Docker, they _refer to Docker Engine implicitly_. 
- Runs **exclusively on Linux**.
- Consists of the three major components - Docker Daemon, Docker CLI and Docker REST API.
- **Docker Daemon** is a process which runs on a host machine.
- **REST API** is an interface between daemon and client.
- **Docker CLI** (command line interface) is a client which uses REST API to talk to the daemon process. 

## Docker Client

- Communicates with [Docker Engine](#docker-engine).
- Uses either Docker CLI or Kitematic graphical interface to manage containers.

## Docker Image

- Is a read-only template with set of instructions for creating a [container](#docker-container).
- Application is **built and packaged** through images.
- Can be based on **one or more other** images.
- The instructions are described in a file called **Dockerfile**, with predefined syntax.
- Images can be **distributed** and **reused** via [Docker Registry or Docker Hub](#docker-registries-and-docker-hub)

## Docker Container

- Is a runnable instance of [Docker Image](#docker-image).
- Is an environment where we can **run our application**.
- Containers can be managed via [Docker Client](#docker-client), CLI or API directly.
- Each container is **isolated** and **secure**.

## Docker Registries and Docker Hub

- Docker Registry is a storage for images. 
- It can be **public or private**, be on the same machine as docker daemon or client, or in completely different server.
- Docker Hub is a registry of official [Docker Images](#docker-image).


## Docker Machine

- Is a tool which can be used to install [Docker Engine](#docker-engine) on virtual host (e.g. on Mac or Windows).
- Before Docker v1.12, the only way to run Docker Engine on Mac or Windows was to use docker machine (Now there are native apps, see Docker for Mac and Docker for Windows).
- Enables to **provision** multiple remote Docker hosts by automatically installing [Docker Engine](#docker-engine) on them. Those **Dockerized hosts** sometimes are referred as managed machines.

## Docker Engine Swarm mode

- A **swarm** is a cluster of [Docker Engines](#docker-engine) (nodes) where you deploy **services**.
- When you run Docker in swarm mode, you **orchestrate services**.
- Services are just **tasks** which are **executed** in nodes.
- Node is an **instance** of [Docker Engine](#docker-engine) participating in swarm.
- Swarm mode is useful for cluster management, load balancing, service discovery, scaling and more.

## Docker Compose

- Is a tool for running **multiple containers** in Docker application.
- ```docker-compose.yml``` file is used to configure application services.
- Supports **communication** between isolated containers.

What did I miss? :)

Update: There is also a [cheat sheet](https://github.com/vtorosyan/docker-unwrapped).

