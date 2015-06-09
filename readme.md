#About this Site

This is a Jekyll website, with Bootstrap 3 framework.

The content is brought through in a modular fashion, with the content being written as includes in markdown format.

The Gruntfile runs Livereload alongside the other standard tasks. All the images are responsive.

Authors:

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

##Render Markdown in a Jekyll Include

This site uses the [Markdown](http://daringfireball.net/projects/markdown/) syntax.

This site uses the markdown.rb plugin in order to render markdown in a Jekyll include.

This method creates a tag called "markdown" that can be used instead of the "include" tag.

Create a file called "markdown.rb" in your sites _plugins directory. In the file include this code:

~~~ruby
=begin

  Jekyll tag to include Markdown text from _includes directory preprocessing with Liquid.

  Usage:

    {% markdown <filename> %}

  Dependency:

    - kramdown

=end

module Jekyll

  class MarkdownTag < Liquid::Tag

    def initialize(tag_name, text, tokens)

      super

      @text = text.strip

    end

    require "kramdown"

    def render(context)

      tmpl = File.read File.join Dir.pwd, "_includes", @text

      site = context.registers[:site]

      tmpl = (Liquid::Template.parse tmpl).render site.site_payload

      html = Kramdown::Document.new(tmpl).to_html

    end

  end

end

Liquid::Template.register_tag('markdown', Jekyll::MarkdownTag)
~~~

You can now use the "markdown" tag instead of the "include" tag to bring through includes with markdown rendered. For example:

{% markdown box-1.markdown %}

Instead of:

{% include box-1.markdown %}

##Resources
Interesting article on [dynamic navigation in Jekyll](http://www.tournemille.com/blog/How-to-create-data-driven-navigation-in-Jekyll/)
