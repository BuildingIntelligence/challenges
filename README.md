Building Intelligence Code Challenge
====================================

A collection of simple challenges to demonstrate developer skill and resourcefulness.
So far in the collection there is only one challenge: the Login Page.

To submit your code, please create a zip file containing your submission and email it
to dev-team@buildingintelligence.com.


# Login Page

The first challenge is to implement a simple login page.  In this challenge you will:

* use Bootstrap to construct a simple and attractive login page
* use JavaScript to interact with a RESTful backend

The use of Bootstrap is to simplify layout, positioning, and style.  Foundation may
be used as a substitute if you prefer.  Role your own CSS without use of either if
necessary (may significantly increase the time required).

Your code need only work in either Chrome or Firefox.

## Requirements

For this challenge, you will need:

* Ruby, version 1.9.3 or better. [RVM](http://rvm.io/) perhaps.
* A text editor.  Perhaps [Sublime](http://www.sublimetext.com/).
* Chrome or Firefox.
* The Internet (for installing gems and referencing documentation).


## Getting Started

Clone the project:

```
git clone https://github.com/BuildingIntelligence/challenges
```

In your local copy of the project, install the gems and run the server:

```
cd challenges/loginpage
bundle install
rackup -p3000
```

Open your web browser to http://localhost:3000/ and take a look at the starting template.


## Step 1: Markup

Time estimate: 20 minutes.

1. Add a basic grid to the page.  Position and style the elements similar to the example below.  Use appropriate tags and style for the content.
2. Add a login form to the page.  The form should include:
  1. Email field
  2. Password field
  3. "Remember me" checkbox
  4. Sign-in button
  5. "Forgot password" link
  6. The form should POST to /login
3. Add the background image to the page.  The image should be full-page and scale nicely when the window is resized.


Here is an example of how this could look when you are done:
![Example Finished Page](https://raw.githubusercontent.com/BuildingIntelligence/challenges/master/loginpage/public/img/goal.jpg)


Extra Credit:

* Find and use a font similar to that used for the heading in the example.  Note: the heading should render in uppercase even if the text is capitalized or lowercase (hint: use CSS).
* Using only CSS, add more contrast by darkening the background image and using a bright foreground color.



## Step 2: Javascript Validation

Time estimate: 20 minutes.

1. When the user clicks the "Sign-in" button, validate both the email and password fields are not blank.
  1. If either field is empty, alert that both fields are required.
2. The form should only submit when it passes validation.

Before you continue to Step 3, ensure that when submitting the login form with a valid email and password, the server replies with "success."


Extra credit:

* Instead of using the alert() function, leverage bootstrap to add pretty in-page alerts and validation states.
* Use a regular express to validate that the email looks like an email address.



## Step 3: RESTful Authentication

Time estimate: 30-40 minutes.

The back-end is a simple [Sinatra](http://www.sinatrarb.com/) app with only two routes.
The entire application is defined in the `login_page.rb` file.  

The server should respond with a 200 code if the login was successful, and a 400 if the email or password did not match. In the console, you can see what values were passed for `email` and `password`.

Presently, regardless of what fields or values are submit by the login form, the response is always successful (200).  The important part of this exercise is the front-end piece (Javascript, using Ajax, user experience).  Implementing the actual authentication is left as extra credit. 

1. Prevent the normal form behavior, and instead, use ajax to submit the form.
2. If the response is successful (status code 200 or "success"), alert the user that they are now signed in.
3. If the response is negative (status code 400 or "failure"), alert the user they must try again.

Extra credit:

* Instead of using the alert() function, leverage bootstrap to add pretty in-page alerts and validation states.
* In `login_page.rb` edit the login action to authenticate the email and password:
  * Authentication should be successful if the email and password match the values `admin@example.com` and `password123` respectively.


