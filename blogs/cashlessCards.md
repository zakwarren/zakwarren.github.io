## The Idea

I worked for a college for a while and, during that
time, their existing cashless card system broke due
to a wider migration of administrative systems. This
system was designed to manage the free meal allowance
for certain students.

At the same time, the college had been taken over by
another college who wanted to make all their systems
and processes the same. In this instance they opted to
use a paper-based system to bring the college in line
with the overtaking college.

However, the idea of building this system and improving
on the original had been firmly planted in my mind. This
was a good opportunity to flex my full-stack development
skills on something potentially useful in the wider world.

![Cashless Cards home page](images/projects/cashlesscards.jpg "Cashless Cards home page")

## Requirements

My template for the requirements was to just describe what
the original app did. It was an app installed on a couple
of tablets, which called a centrally hosted database. I
wasn't set on this model, but did want to match the original
functionality. I decided to build a web app, so the whole
software stack was hosted on a central server, then any
device on the network could access it.

The main features were for:

* customers to swipe their card to check their balance
* catering staff to authorize the deduction of money
* automatically addding money each day to accounts eligible for free meals
* finance staff to view the transaction logs and download as a spreadsheet
* admin staff to be able to add and remove customers from the system

To make the app more versatile, I also wanted features for:

* catering (and other authorized staff) to be able to add money to accounts
* admin staff to be able to create new vouchers and set the update timescale
* admin staff can add vouchers to accounts
* accounts to automatically update their values in the relevant timescale
* admin staff to be able to easily add, remove, and edit accounts
* admin staff to be able to easily add, remove, and edit permission groups

This seemed like a good minimum viable product and something
that people might want to use, whether in colleges, clinics,
offices, or other "closed system" environments.

## Creation

I decided to use the Django framework as it wasn't something I'd
used much before, while I had used python a lot. First thing to do
was set up the project:

```python
django-admin startproject cashlesscards
```

Then the obvious place to start was models.py as this crystalized
what I wanted the app to do and how I wanted it to behave. The
customer, cash, and transaction models were the most important three.

![Customer model](images/projects/cashlesscards_model.jpg "Customer model")

I also threw in a basic setup of the voucher and voucher link tables
so I had something to work with a bit later on. I ended up returning
to all the models to varying degrees to refine them as the app grew,
but it was a solid foundation to work from.

Next I worked on building the basic views, forms, and admin pages.
These were quick to make as Django provides a lot of pre-built
components that are easy to configure. Once these were set up, it
felt like I'd made a lot of progress in a short amount of time. It
was then easy to keep up momentum during the rest of development,
where the results weren't as quick and easy to come by.

![Add a voucher form](images/projects/cashlesscards_voucherform.jpg "Add a voucher form")

But soon enough it all came together. Now admin staff could add
vouchers to customers. Each voucher could have a different timescale,
for example weekly or monthly, for when it's applied.

## Stripe.js

As a bonus challenge to myself, and to improve the overall utility
of the system, I wanted to integrate stripe.js into the project.
The idea was to enable customers to add money to their own accounts
through verified credit or debit card payments.

After swiping their card and seeing their account details, a new
button appears that takes them to a new form. They can enter the
amount of money they want to add to their account, then select
the card payment button. This opens the stripe checkout modal that
accepts card details, which it sends to stripe's own servers for
processing. This meant I didn't have to worry about all the financial
compliance rules and regulations. Stripe sends back a token to say
payment was successful and Cashless Cards adds the amount to the
customer's account. They can then use this straight away.

## Deployment

Building the app was only half the story. I also wanted to figure
out how to make it easy to deploy for staff without much programming
or Django knowledge. After building a few Linux VMs and experimenting,
I opted to write a script that would automate the process and ask
clear questions when it needed user input. It took a few evenings
to write and fix the bugs, but soon I was happy with the result.
Now all the server administrator has to do is navigate to the
cashlesscards project directory and enter:

```bash
python3 installdependencies.py
python3 deploy.py
```

These install all the dependencies and walks the user through
the setup of the database and configuration of Cashless Cards.

This turned out to be a good little project to practice my
python and web development skills as well as learn more about
the Django framework. The end product is also something that
could genuinely be used. If I decide to continue developing
this system, I'd like to incorporate something like stripe.js
so it can accept external payments and people can add money
to their accounts themselves.
