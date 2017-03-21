# Getting started
- clone this repository
- run ```npm install``` to install dependencies.
- run ```npm run build``` to build the application
- run ```npm start``` to run the server
- fire up a browser @ localhost:9011 

### Other helpful npm scripts
- run ```npm run build:production``` to build application with minified scripts + css
- run ```npm run watch``` to watch the `/client` folder for changes

# Application Technologies 

### Hapi.js
* **Link**: https://hapijs.com/
* **Used for**: Server
* **Reason**: Chosen over other node.js frameworks for it's enterprise readiness.
 - [Great logging support (ops, process, memory, etc)](https://github.com/hapijs/good)
 - [Straight forward and powerful authentication/authorization](https://hapijs.com/tutorials/auth)
 - [Extremely powerful/flexible validation](https://github.com/hapijs/joi) (yes, i understand you can use this outside of hapi - but Joi being built into hapi [is so helpful](https://hapijs.com/tutorials/validation).)
 - [Easy composition of many server components](https://github.com/hapijs/glue)
 - [Configuration free swagger documentation](https://github.com/hapijs/lout)

### Vue.js
* **Link**: https://vuejs.org/
* **Used for**: Client
* **Reason**: Chosen over modern front-end libraries for it's simplicity.
 - [Similarity to angular 1](https://vuejs.org/v2/guide/comparison.html#Angular-1)
 - [Support for server side rendering](https://vuejs.org/v2/guide/ssr.html)
 - [Single file components](https://vuejs.org/v2/guide/single-file-components.html)
 - [Straight forward routing](https://router.vuejs.org/en/)


# Dev tools
### Webpack
* **Link**: https://webpack.github.io/
* **Used for**: Bundling front end application
* **Reason**: While I'm not wild about heavy javascript tools, webpack does make it fairly straightforward to monitor for changes, manage/bundle dependencies, and minify/transpile source code.
 
### Babel
* **Link**: http://babeljs.io/
* **Used for**: Transpiling es6 code to es5
* **Reason**: I'd actually love to get rid of this dependency. 
However, because node.js allows me to write arrow functions ([not yet supported in all browsers](http://caniuse.com/#feat=arrow-functions)) and es6 classes ([not yet supported in all browsers](http://caniuse.com/#feat=es6-class)), it makes sense that I can do it on the front end as well. Therefore, I use babel to transpile a little bit of fancy javascript down to ES5.


# Coming soon
- [x] Example with vue-router
- [ ] Watching server side files & restarting when server-side changes
- [ ] Tests