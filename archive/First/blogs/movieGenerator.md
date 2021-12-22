## The Idea

Automation is a a big part of my work, so I naturally took
an interest in bots. I'd never used Twitter before, but had
read that it was stomping ground for bots of all persuasions.
I spent a lot of time reading and mulling over these concepts,
so the time was ripe to create a Twitter bot of my own.

The Adam Sandler Movie Generator was born from a series of
interesting conversations with my friend at work during our
lunch break. We were thinking up new movie ideas and kept
falling back into movie pitches for Adam Sandler movies.
Despite their formulaic composition, we came up with some
hilarious synopses.

When my friend went on holiday for a week, I was left with
quiet lunch breaks. Not one to waste time, I began writing the
amazing Adam Sandler Movie Generator!

![Adam Sandler movie synopsis](images/projects/moviegenerator.jpg "Movie synopsis for Adam Sandler")

## Creation

After some research, I found that there were several options
available to me to generate new ideas:

* collect a big dataset of existing movie synopses and use Markov chains
* collect an even bigger dataset and use machine learning
* create a template or formula that swaps in different data

Initially I did some brief experimentation with basic Markov chains.
These generated a mixture of word salads and underwhelming synopses,
so I opted for the template method. It fit the original game much
better and I could get away with a much smaller, but broader,
dataset. Otherwise I'd need to collect and sanitize existing
synopses and that didn't sound like much for this. Plus I wasn't
convinced Adam Sandler's back catalogue was big enough, prolific
as he is.

My first step was to formalize the template we'd used when chatting
about movies at lunch, then I could figure out what data I needed.
I found several word lists from lexicological websites and job lists
from government statistics. I also wrote my own utility lists for
pronouns and example tweets. For ease of storage and use, I ensured
these were all set up as well formatted JSON, which meant I needed
to import the JSON package to my python code.

![Example tweets JSON](images/projects/moviegenerator_samplejson.jpg "Example tweets in JSON format")

With the groundwork out of the way, I could focus on the actual code.
For a fairly simple bot like this, I opted to keep the code structure
simple as well. My two main components were the:

* generation of movie synopses using the collected data
* interaction with the Twitter API to send and receive tweets

## Movie Generator

The first section of the movie generator script was a set of functions
that import the JSON data. It selects a random option from each dataset
and processes the data, before returning it to the control function.

The next functions take the data, does some alterations based on content
to make the framework read better, then calculate whether the generated
synopsis is within the 280 character limit set by Twitter. If the synopsis
exceeds this length, then new random options are selected from the datasets
and it tries again.

![Calculating the length of the synopsis](images/projects/moviegenerator_length.jpg "Calculating the length of the synopsis")

The final function assembles all the data with the framework and returns
a legible movie synopsis.

## Movie Tweeter

This stage involved a learning a lot of new things. I created a Twitter
account and used this to create a new Twitter application, which gave
me my own set of consumer keys and access tokens to the Twitter API.
After reading some of the API documentation, I then set about learning
about the Tweepy library. This is a python package that makes working
with the Twitter API a lot easier than starting from scratch.

I created a function to set up access to the API using my authorization
keys. The next function calls the movie generator script, which returns
a new, random movie synopsis. I then use Tweepy to post the tweet.

I also wanted to be able to respond to tweets to the account, so built
a responder function. This searches for any tweets using the [@AdamMovieGen](https://twitter.com/AdamMovieGen)
handle. If it finds any, it checks that the tweet is in the right format
and parses it to extract the required data. It then passes this data to
the movie generator script, which adds in any extra random data and creates
a new synopses. If the tweet isn't in the right format, it responds with
a template, asking the user to try again.

The responder is called first, followed by the create random tweet function.
This process is run in a loop with a random amount of time between each
tweet to avoid spamming tweets. No one wants millions of movie synopses
per second!
