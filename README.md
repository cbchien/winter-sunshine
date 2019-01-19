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

[![Sunshine Skill Web](https://cbchien.github.io/cover/sunshine-web.JPG "Sunshine Skill Web")](https://cbchien.github.io/cover/sunshine-web.JPG "Sunshine Skill Web")

[![Sunshine Skill Mobile](https://cbchien.github.io/cover/sunshine-mobile.JPG "Sunshine Skill Mobile")](https://cbchien.github.io/cover/sunshine-mobile.JPG "Sunshine Skill Mobile")

## How-To
1. `npm install`
2. Start json-server first with `npm run api` 
3. `npm run start:dev` to run app on local environment
4. `npm run start:prod` to run on production

## Live Demo [Sunshine Skill](https://ambitious-lavender.glitch.me/)
**Please have JSON server up with `npm run api` to see data interaction**. The page will not have any skill cards and will not be interactive otherwise.

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
                |-common    (site-wide components)
                |-...reuseable componets
            |-containers    (pages and interactive modules)
                |-common    (site-wide container)
                |-...site pages
                |-...widgets
            |-redux         (store, reducers, constants)
    |-server
        |-routes            
|-environemt setup
```

## Notes
### Time spent on exercise
Time log: 
- 1.0 hr: study instruction and refresh on mentioned technology and also for updates
- 1.0 hr: initial configuration (file structure, eslint, gitignore, package.json)
- 1.0 hr: basic React folder structure
- 2.0 hr: create Input, Select, Button, SkillCard component
- 2.0 hr: complete SkillSelect container to match UI requirement
- 1.0 hr: update LandingPage and styling
- 1.0 hr: integrate JSON-server and isomorphic-fetch 
- 2.5 hr: set up Redux and extract API URL
- 1.0 hr: RWD and minor css modification
- 2.0 hr: JEST
- 1.0 hr: test application and fix issues
- 1.0 hr: attempt to integrate robust Enzyme
- 0.5 hr: create detailed README.md
- 1.5 hr: trying to be better...

### Possible steps if time permits
1. Create more Enzyme tests for react components
2. Add UPDATE skill card functionality
3. Add confirmation box for DELETE
4. Create a simple backend with db connection instead of json-server
5. Revisit existing folder structure
6. Fine tune RWD

