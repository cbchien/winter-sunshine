# Winter-Sunshine
This is a simple React App that ultilze the following libraries
- React as UI framework
- Redux and redux-thunk for storing common state
- SCSS for styling
- Webpack for bundling
- isomorphic-fetch for promises
- font-awesome icon library
- Jest and Enzyme for testing
- Eslint for code linting
- Babel for compiler
- JSON-server for quick api

## How-To
1. `npm install`
2. Start json-server first with `npm run api` 
3. `npm run start:dev` to run app on local environment
4. `npm run start:prod` to run on production

## Scripts
```
    "test"                  # run JEST and Enzyme tests,
    "lint"                  # run eslint,
    "clean:dist"            # remove dist folder,
    "clean:node_modules"    # remove node_modules folder,
    "start:dev"             # start React app in local env "webpack-dev-server     # webpack server for local developemt,
    "prestart:prod"         # pre build for production,
    "start:prod"            # start React app in production,
    "api"                   # start json-server
```

## JSON-Server Api
```
`/skills`
To access and modify resources, you can use any HTTP method 
GET POST PUT PATCH DELETE OPTIONS
```
## Foler Structure
```
|-config                    (webpack config,...)
|-src                       (main application)
    |-client
        |-app
            |-action        (api actions)
            |-components    (presentational components)
            |-containers    (pages and interactive modules)
            |-redux         (store, reducers, constants)
    |-server
        |-routes            
|-environemt setup
```
