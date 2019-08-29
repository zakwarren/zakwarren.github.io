## The idea

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

* collect a big dataset of existing movie synopses and use
Markov chains
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
