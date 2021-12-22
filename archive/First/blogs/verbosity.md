## The Idea

I'd been developing some specific web scraping tools at work
and it had me thinking about creating a more generic tool. A
lot of my normal work is around data analysis, so I thought
it'd be interesting to combine the two. The idea for a web
app that delivers a simple dashboard that presents some stats
about the website that it scrapes.

I also had a long-standing item in my list of project ideas
that I was keen to explore further. I'd previously worked on
a project using Markov Chains to develop Twitter bots and I
was keen to automatically generate a longer blog post using
these techniques. If the web scraper took all the words from
a website then it would be a great source of data for a simple
Markov Chain model.

![Verbosity home page](images/projects/verbosity.jpg "Verbosity home page")

## Creation

I began by exploring a few JavaScript tools in the browser.
However I kept getting stuck with Cross-Origin Resource
Sharing (CORS) errors, so quickly gave up that path of enquiry.
I settled on using a Node.js server to keep the stack as simple,
uniform and light-weight as possible.

The first piece in this project was the web scraping functionality.
I set about creating an object that would take in a URL, connect
and scrape all the pages on that website, then return the words
it finds. To handle the results, I next developed the word analyzer
object. Both of these can be used independently from the rest of
the app with their own APIs. This means I can reuse these for
any future projects with ease.

The command line tools are good, but only have a limited audience.
So next I built up the web front end to provide a nicer interface
and this made it feel like I was making progress. It has a simple
home page, just a brief set of instructions, a text box to enter
a URL, and a submit button.

The home page takes in the URL, passes it to the web scraper tool,
which passes it's results to the word analyzer tool, which passes
it's results to the analysis web page for display. This process
can take some time, particularly with bigger sites, so I added
a nice little loading animation to the home page when clicking
the submit button.

![Verbosity analysis](images/projects/verbosity_analysis.jpg "Verbosity analysis")

While the simple text display was  minimal, I wanted something easier
to understand at a glance. So I dusted off my D3 skils and build a
bar chart to display the top words used. This seemed of limited use
for sites with a lot of words, so I altered it to be more generic. It
could be passed any number of words and scale the chart accordingly.
I decided to add a toggle so the user could decide whether to see thier
top ten words or their top one hundred words.

Lastly, I wanted to explore using Markov Chains to generate a new blog
for the site in the writing style of the site. To keep page reloads to
a minimum, I added this functionality to the analysis page. It didn't
add any noticeable amount of time to the original page load, so seemed
a good move. On the click of a button, some JavaScript hides the
analytical dashboard and diplays the blog and vice versa. It would be
interesting to see if anyone uses this computer generated blog on their
original website!
