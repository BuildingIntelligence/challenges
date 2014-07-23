Building Intelligence Code Challenge
====================================

A collection of simple challenges to demonstrate developer skill and resourcefulness.


# Login Page

The first challenge is to implement a simple login page.  In this challenge you will:

* use Bootstrap to construct a simple and attractive login page
* use JavaScript to interact with a RESTful backend

## Getting Started

In your local copy of the project, install the gems and run the server:

```
bundle install
rackup -p3000
```

## Step 1: Markup

Time estimate: 7 minutes.

1. Add a basic grid to the page.
2. Add a login form to the page.  The form should include:
  1. Email field
  2. Password field
  3. "Remember me" checkbox
  4. Sign-in button
  5. "Forgot password" link
3. Add a background image to the page.

Here is an example of how this could look when you are done:
![Example Finished Page](https://raw.githubusercontent.com/BuildingIntelligence/challenges/master/loginpage/public/img/goal.jpg)

## Step 2: Javascript Validation

Time estimate: 7 minutes.

1. When the user clicks the "Sign-in" button, check to see if the email and password are 'admin@example.com' and 'password123' respectively.  If they both match, alert 'Success,' otherwise alert 'Authentication Failure!'


## Step 3: RESTful Authentication

Time estimate: 7 minutes.

1. When the user clicks the "Sign-in" button, use Ajax to submit the form.  Alert the same messages as above based on the response from the web service.
2. Edit the login action to validate the email and password.  The service should:
  1. Respond with a 200 code if the login was successful.
  2. Respond with a 400 if the email or password did not match.
