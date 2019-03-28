# globaljoy

## Description
  Global Joy is a web app built on Vue, with Javascript and Express.js as a back-end, and MongoDB as chosen database.  
  This app focuses on people who are looking for professional help in starting a healthier lifestyle.


## Running the project
### Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

## Known Bugs

 - There is a communication problem between the JS back end and Vue, it manifests when trying to log in or create a new account. This can be seen as the "network error" that is throws. One of the causes of it is that the back end does not identify the paths, which can be accessed normally.
