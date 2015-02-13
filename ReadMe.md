# ES6 Playground

This project is a template for ES6-projects. It provides a gulp build file, for running tests with jasmine and bundle your app for the browser.

## 	Prerequisite

* [Node.js](nodejs.org)
* [npm](https://www.npmjs.com/)
* [gulp](http://gulpjs.com/) `npm install gulp -g`
* [jasmine](http://jasmine.github.io/) `npm install jasmine -g`

## Setup

* clone this repository `git clone git@github.com:andreaseberhoefer/es6playground.git`
* go into the directory `cd es6playground`
* run `npm install`
* run `gulp test`
* Write your own es6 Scripts under src

## Gulp Tasks

### gulp test

Runs all *.spec.js files in the spec directory with jasmine.

### gulp build

Bundles all scripts from the src directory to dist/app.js. You must have a main-file called src/main.js

### gulp clean

Deletes the target and dist directory.
