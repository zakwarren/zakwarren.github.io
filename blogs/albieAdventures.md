## The Idea

I went to visit Albie and gave me an interesting idea.
As he ran around playing with another dog, it struck me
that his running and jumping over objects was very
similar to the mechanics of a platformer game. This
became the kernel that would ultimately lead to the
Albie Adventures game!

![Albie Adventures Game](images/projects/albieadventures.png "Albie Adventures Game")

## Creation

I'd made a few games with the Unity engine, so it was
an easy choice when deciding on the technologies I
wanted to use for this project. While I could get a
lot of assets to get the right theme for the background,
it was a daunting prospect to create all my own artwork
for Albie, the pickups, and enemies.

However, I'd taken a couple of photos and videos of
Albie, which is pretty much required by law when
there's a cute dog. This led to me creating all the
sprites I needed from photos.

I was pleased with the result. It gave a unique
looking game, with bright cartoons for all the
backgrounds and real characters that stood out.

![Albie by water](images/projects/albieadventures_water.jpg "Albie by water")

## Deployment

I had a pretty good game on the desktop, or exported to
WebGL format, which worked with both keyboard and
games controllers. However, I thought that the style of
game and cartoon style leant itself well to mobile. I'd
never made a game for mobile before, so I took this as
my challenge and opportunity to learn something new.

My first course of action was to create a new UI that
would be displayed during the levels. This contained
large buttons for running, climbing, jumping, and barking.
I then had to adjust the player movement code to allow
the buttons to call the relevant functions. I also wanted
to retain the option to use keyboards and controllers with
a clear screen. So I added an option to switch between the
two modes, which came in handy when doing my initial play
tests. I was happy with this work as it resulted in a fun
game.

My next big challenge was to deploy it. I set up a Google
Play developer account and set up an initial release,
which was easy enough. However, it really didn't like my
uploaded APK files. After several days of configuring
and reconfiguring Unity and the versions of JDK, SDK and
NDK on my machine, I finally had an AAB package it could
accept. I then had a great test of patience as I had to
wait nearly eight days before the status in my Play Console
switched from "Publication Pending" to "Published". After
an evening of celebration, I sent out the closed alpha links
to my testers. They were good and found a few odd bugs,
mostly based on the different screen sizes of their different
devices. A few fixes and uploads (which only took a few
hours each to get approval, thankfully!), and I was ready
to release to production. My first Android app is out there
in the big wide world now. Enjoy!

If you'd like to find out about his real life adventures,
you can check out [Albie's Instagram](https://www.instagram.com/albie_adventures/)
