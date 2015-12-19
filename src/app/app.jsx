'use strict'

import React, { Component } from 'react'
import { FileList, Toolbar } from './components/components'

export default class App extends React.Component {
  render() {
    return (
      <div className="component-app">
        <Toolbar />
        <div className="component-workspace">
          <div className="component-sidebar">
            <FileList />
            <div className="component-resizer"></div>
          </div>
          <div className="component-editor"></div>
        </div>
      </div>
    )
  }
}
