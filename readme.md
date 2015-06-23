#About this Site

This is a Jekyll website, built with Bootstrap 3 framework.

##Authors

* David Egan
* Rory Egan

##Requirements & Setup
The site requires Bower, Ruby, Jekyll, and the Grunt Cli to be installed locally, and uses Bootstrap 3 and JQuery. Once the repo has been cloned, run the command:

Setup:

* Clone this repo
* run ```npm install```
* run ```bower install```
* run ```mv HINTGruntfile.js Gruntfile.js```, and amend deploy credentials

Serve the site on localhost port 9000 by running the command:

```
grunt
```

Once deploy credentials have been added to Gruntfile.js, the ```grunt deploy``` task will deploy the site.

**NOTE: Make sure Gruntfile.js stays gitignored - don't share sensitive information!**

The Gruntfile runs Livereload alongside the other standard tasks.

##Render Markdown in a Jekyll Include

This site uses the [Markdown](http://daringfireball.net/projects/markdown/) syntax.

This site uses the markdown.rb plugin in order to render markdown in a Jekyll include.

This method creates a tag called "markdown" that can be used instead of the "include" tag.

See ```_plugins/markdown.rb```. This allows use of the "markdown" tag instead of the "include" tag to bring through includes with markdown rendered. For example:

~~~
{% markdown box-1.markdown %}
~~~

Instead of:

~~~
{% include box-1.markdown %}
~~~

##Navigation
...is data-driven. See ```_data/nav.yml```.

##Resources
Interesting article on [dynamic navigation in Jekyll](http://www.tournemille.com/blog/How-to-create-data-driven-navigation-in-Jekyll/)
