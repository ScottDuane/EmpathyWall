## Empathy Wall

Empathy Wall was inspired by real-life walls of empathy that emerged across the Bay Area after the 2016 presidential campaign and election.  Many citizens, feeling disconnected from a large portion of their fellow humans and dismayed or targeted by the hateful rhetoric that persisted throughout the long campaign, decided to add a little kindness and understanding to the world.  Below are a few photos of empathy walls in San Francisco, Oakland, and Berkeley.  

[images ]

In this project, I've sought to recreate the same idea online.  The technological stack is pretty simple -- the backend is Rails with Postgresql and the frontend is handled with React.  I use a Flux (the original!) pattern to connect the two.  The ease of the stack makes it easy to add features to the relatively simple user interface.  

#### The Design

I asked myself a few design questions while designing this project.

1. Should empathy notes be anonymous?  Should users be able to log in and save their notes?  

This question came up from the beginning.  Incorporating this feature would be simple technologically -- Devise provides a nice way to tie OAuth into Rails, and there are plenty of examples out there of Devise hooking into React/Flux.  But I wasn't sold.  Anonymity provides a pathway for vulnerability.  It adds to the true kindness of writing something for the empathy wall; it's not for credit, because, in fact, no one will give you credit.  It's just a tiny gift you give your fellow humans.  I liked that.  

There was also something ephemeral about the physical empathy walls, made of post-its and subject to wind, rain, birds, and gravity.  They naturally deconstructed.  That's probably what this project will do, eventually: get lost into the ether of the internet, perhaps with an expired domain or a defunct hosting platform (although it's on AWS, so that'll take awhile).  Creating a site lacking in user accounts keeps true to that spirit.  

My main concern with anonymity is the natural tendency of the internet to become mean.  I'm worried about trolls.  I've brainstormed some technological ways to approach this, such as machine learning or, simpler, a list of slurs that can't appear.  I'm not sold on whether I *want* to do this just yet.  After all, slurs can be reclaimed.  Hurtful words come from hurt, most often.  Maybe this can be a place for those, too.  I'm not sure yet.  

2. 
