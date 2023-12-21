# Solidproject.org

Official website of the Solid Project

## Important note about 2023-redesign

If you want to make improvements to this website, please (also) add them in [the 2023-redesign branch](https://github.com/solid/solidproject.org/tree/2023-redesign?tab=readme-ov-file#how-to-contribute )
which we hope to merge soon.

## Local Environment Setup (before 2023-redesign)

This website is built using [Jekyll](https://jekyllrb.com/), a static
site generator.

If you have [Docker Compose](https://docs.docker.com/compose/) installed, view `docker-compose up` to start a local server to view the website.

Alternatively, you can install and run the required tooling manually as follows:
1. [Install](https://jekyllrb.com/docs/installation/) Ruby and Jekyll
1. `$ git clone https://github.com/solid/solidproject.org.git`
1. `$ cd solidproject.org` 
1. `$ bundle install`
1. `$ bundle exec jekyll serve --livereload`

To afford a good cross-platform developer experience, 
this repository employs the following tooling versions: 
`ruby >=3.2` with `bundler >=2.3.4`.
