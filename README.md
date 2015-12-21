# Electron Base Application

[![Build Status](https://travis-ci.org/dancork/electron-base-app.svg)](https://travis-ci.org/dancork/electron-base-app)

A framework for creating desktop applications using [Electron](https://github.com/atom/electron) and [React](https://github.com/facebook/react)

## Installation

```
git clone https://github.com/dancork/electron-base-app.git
cd electron-base-app
npm i
```


## Usage

Compile and launch the application
```
npm start
```
## Package (TODO)
Using [electron-packager](https://github.com/maxogden/electron-packager) to build Windows, Linux and Mac executables.
```
npm run package
```

## Development

The client-side JavaScript files are stored in `src` and compiled in to `app/bundle.js`

Compile the assets
```
npm run build
```

Launch the app using electron
```
npm run launch
```

### Dev Server - with hot load
To start Webpack's development server run:
```
npm run dev-server
```
Then in a browser navigate to [http://localhost:8080/](http://localhost:8080/)
