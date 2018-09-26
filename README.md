# Project Overview
Its a web-based application that reads RSS feeds from several URL's as mentioned in the JSapps.js file. Main idea for my repo is to test the RSS Feed application using the Jasmine testing tool. RSS feed app uses the Google Feed Reader API to grab RSS feeds for the URLs's as defined in my app.js file and allows you to read and get updated on various feeds on one page.
Actual design/code of the RSS Feed application was clone from the udacity git repo(https://github.com/udacity/frontend-nanodegree-feedreader) but I have updated the jasmine.js file in my repo to test the app automagically using Jasmine which is a boom for developers to code and test any web application. Main idea for me to provide you with this repo is to test the web app using JASMINE and not to actually show how RSS Feed works.

# Steps to test the HTML and Javascript with Jasmine Testing Tool
I have included all the  files which are required to run the RSS feed app as well as updated Jasmine.js file which includes the new test which I would like to perform with Jasmine on my app.
All the files can be cloned or found in my git repo
Pls refer to repo here -
https://github.com/work-nitin/feed-reader-udacity .

Step 1 : Clone the git repo from https://github.com/work-nitin/feed-reader-udacity ; you will find that feedreader.js file has actually the Jasmine test cases which I would like to perform with my application.

Step 2: Open the index.HTML and once jasmine is installed(Instructions below) you should see the Jasmine test window at the bottom of your HTML once DOM is loaded fully.
Various tests for the RSS feeds are written in feedreader.js file which will be used to test the RSS Feeds Functionality for the various RSS feeds as well as how the MENU should
hide or display as part of our project.

Step 3: Click on individual Jasmine tests from the Jasmine test window at the bottom of the application webpage and you will see tests are being ran and passed. Green dot next to Jasmine means that test is passed where as red cross mark shows it failed along with the reason and line number of the code from where the test failed.

In case , you change or get error from app eg: URL's missing etc., Jasmine test window will throw an error (red cross mark ) for our test cases.

#Documentation and started guides:
For a quick start guide of Jasmine, see the beginning of http://jasmine.github.io/edge/introduction.html

#Installation
 For the Jasmine NPM module:
 https://github.com/jasmine/jasmine-npm

 For the Jasmine Ruby Gem:
 https://github.com/jasmine/jasmine-gem

 For the Jasmine Python Egg:
 https://github.com/jasmine/jasmine-py

 For the Jasmine headless browser gulp plugin:
 https://github.com/jasmine/gulp-jasmine-browser

 To install Jasmine standalone on your local box (where {#.#.#} below is substituted by the release number downloaded):

Download the standalone distribution for your desired release from the releases page
Create a Jasmine directory in your project - mkdir my-project/jasmine
Move the dist to your project directory - mv jasmine/dist/jasmine-standalone-{#.#.#}.zip my-project/jasmine
Change directory - cd my-project/jasmine
Unzip the dist - unzip jasmine-standalone-{#.#.#}.zip
Add the following to your HTML file:

<link rel="shortcut icon" type="image/png" href="jasmine/lib/jasmine-{#.#.#}/jasmine_favicon.png">
<link rel="stylesheet" type="text/css" href="jasmine/lib/jasmine-{#.#.#}/jasmine.css">

<script type="text/javascript" src="jasmine/lib/jasmine-{#.#.#}/jasmine.js"></script>
<script type="text/javascript" src="jasmine/lib/jasmine-{#.#.#}/jasmine-html.js"></script>
<script type="text/javascript" src="jasmine/lib/jasmine-{#.#.#}/boot.js"></script>

## Why this Project?
Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!

## What will I learn?

You will learn how to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.

# Maintainers
Gregg Van Hove, Pivotal Labs
Maintainers Emeritus
Davis W. Frank, Pivotal Labs
Rajan Agaskar, Pivotal Labs
Greg Cobb, Pivotal Labs
Chris Amavisca, Pivotal Labs
Christian Williams, Cloud Foundry
Sheel Choksi
Copyright (c) 2008-2018 Pivotal Labs. This software is licensed under the MIT License.
