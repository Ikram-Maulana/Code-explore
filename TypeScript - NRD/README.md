## Installation
How to init and install typescript:
- create folder
- yarn init
- install nodemon and typescript in development
- add scripts in package.json for tsc, ts and nodemon
- `./node_modules/.bin/tsc --init` for add tsconfig.json
- in tsconfig.json uncomment allowJs and outDir -> outDir to ./build

- make src folder
- edit tsconfig.json add `"include":["./src"]`
- make file ts in src
- `yarn ts` and `yarn dev`