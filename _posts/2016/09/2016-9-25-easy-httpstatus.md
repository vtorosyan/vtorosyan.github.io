---
layout: post
title: Choosing an HTTP Status made easy.
---

One of the important design decisions while building a RESTful API is to decide which HTTP Status to return. In theory, this should be easy, because there is a clear [specification](https://tools.ietf.org/html/rfc7231#section-6){:target="_blank"} which describes each and every HTTP Status, so all is needed is to go through the protocol and find a status appropriate for the specific resource. 

Unfortunately it's not that straightforward. Although the HTTP protocol is clear, but sometimes API resource itself is not clear, as a result you are ending up with some common HTTP Status (“_Let’s return 200, everything was fine, we persisted an entity_”), which is wrong in most of the cases. I think in such cases the problem is indeed the resource itself and not that this or that HTTP Status is not clear. If you can't decide what status to return it means you are going in the wrong direction. 

There are a lot of discussions till now, where folks talk about which status you should return in which case. People arguing each other and give answers differing to each other. To be honest this surprises me, as again, there is a clear specification of those things - there shouldn’t be two answers. The question is though, if you want to follow these protocols or not, but if you have decided that you want to follow, you shouldn't seek for an answer anywhere else except the specs of the protocol itself. 

I'm not religious about the REST topic, I believe that what matters is how good it serves to it's purpose. So if the academical point of view of the REST serves my and my clients needs I'd be happy to follow it, if not I'd be happy to seek for another solution.

Luckily, the academical definition of HTTP/REST serves now the purpose of building good, high quality RESTful APIs. 

The problem is that there are over 50 statuses, you can't simply remember all of them. Of course it's easy to remember *200 OK* or *400 Bad Request*, but when it comes to choosing between *401 Unauthorized* and *403 Forbidden* things are getting a bit more complicated.

While reviewing the API I am working on, I remembered about [this](http://racksburg.com/choosing-an-http-status-code/){:target="_blank"} article which appeared in HN a year or two ago and received quite a positive feedback. Although I don't completely agree with some points there, but I really like the idea, so I thought to simplify it more and 'convert' the visualization into the small program. 

**The goal was to provide a simple interface where a user can answer to the simple questions by *Yes* or *No* and at the end have a suggestion about what HTTP Status can/should be used.**

The app was straight forward and the hardest part was to write the [json](https://gist.github.com/vtorosyan/49765f9e1b0a4833ace46a7f04b92f89){:target="_blank"}, which is used to render questions and answers. The second part was to decide which language/framework to use. Being a tourist in the reactive programming I decided to try out [Ractive.js](https://gist.github.com/vtorosyan/49765f9e1b0a4833ace46a7f04b92f89){:target="_blank"}; I really liked the idea of reactive templating and the simplicity it provides. So here is the [result](https://github.com/vtorosyan/easy-http-status){:target="_blank"}. 

I hosted the program temporary in my [blog](http://vtorosyan.github.io/easy-http-status/){:target="_blank"}  and trying to figure out if it helps people or not. Meanwhile I continue working on it to improve a bit UI and context. Hopefully **Easy HttpStatus** will get it's domain soon.

Check out the source code [here](https://github.com/vtorosyan/easy-http-status){:target="_blank"}.