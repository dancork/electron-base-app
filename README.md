# Electron Base Application

A framework for creating desktop applications using [electron](https://github.com/atom/electron), [webpack](https://github.com/webpack/webpack) and [react](https://github.com/facebook/react)

## Installation

``
git clone https://github.com/dancork/electron-base-app.git
cd electron-base-app
npm install
```


## Usage

Compile and launch the application
```
npm run start
```
## Package (TODO)
Using [electron-packager](https://github.com/maxogden/electron-packager) to build Windows, Linux and Mac executables.
```
npm run package
```

## Development

The front-end JavaScript files are stored in `src` and compiled in to `app`

Compile the assets
```
npm run build
```

Launch the electron app
```
npm run launch
```
