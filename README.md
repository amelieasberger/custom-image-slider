# towa-image-slider

towa-image-slider is a responsive slider with custom navigation arrows, build with React/Typescript and Swiper.js React Components.


### To install the project, use:
```bash
npm ci
```

### To run the project locally, use:
```bash
npm start
```

### To run tests use:
```bash
npm test
```


## FYI: This project is initially set up like this:

#### created a node project with:
`npm init -y`

#### installed babel dependencies to convert modern JS/JSX into backward-compatible versions for older browsers
```bash
npm install --save-dev @babel/core babel-loader @babel/cli
npm install --save-dev @babel/preset-env
npm install --save-dev @babel/preset-react
npm install --save-dev @babel/preset-typescript
```

#### installed sass and sass-loader
```bash
npm install -g sass
npm i --save-dev sass-loader node-sass
```

#### installed webpack dependencies to bundle React into a single JavaScript File
`npm install --save-dev webpack webpack-cli webpack-dev-server`

#### installed html webpack plugin to simplify creation of HTML files to serve the webpack bundles
`npm install --save-dev html-webpack-plugin`

#### installed react dependencies
`npm install react react-dom`

#### installed typescript dependencies
`npm install --save typescript @types/node @types/react @types/react-dom @types/jest`

#### installed swiper
`npm install --save-dev swiper`

#### installed jest for testing 
```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/dom
npm install --save-dev jest jest-environment-jsdom
```