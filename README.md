# towa-image-slider

towa-image-slider is a responsive slider with custom navigation arrows, build with React/Typescript and Swiper.js React Components.

### To install the project, use:
```bash
npm ci
```

### To run the project on a local devserver:
#### you need to set this in your webpack.config.js
```bash
mode: "development"
```
#### and run:
```bash
npm start
```

### To run tests use:
```bash
npm test
```

### Run this to bundle ts and scss files to minified js and css for production
```bash
npm run build
```

## FYI: This project was configured like this:

1. created a node project with npm
2. installed babel dependencies to convert modern JS/JSX into backward-compatible versions for older browsers
3. installed sass and sass-loader
4. installed webpack dependencies to bundle React into a single JavaScript File
5. installed html webpack plugin to simplify creation of HTML files to serve the webpack bundles
6. installed react dependencies
7. installed typescript dependencies
8. installed swiper js library
9. installed jest for testing 
10. installed post css for vendor prefixing
11. added css-minimizer-webpack-plugin to minify css
