# Setup
You'll need nodejs and ruby:
     
```sh
gem install bundler                # http://gembundler.com/
bundle install                     # Dev dependencies in Gemfile
npm install                        # Dev dependencies in package.json
./node_modules/.bin/bower install  # App dependencies
```
  

# Compile
Watch for changes, compile Javascript and SCSS
  
```sh
grunt watch
```

Compile all

```sh
grunt all
```
