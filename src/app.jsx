'use strict'

import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div className="component-app">
        <div className="component-toolbar"></div>
        <div className="component-workspace">
          <div className="component-sidebar">
            <div className="component-file-list"></div>
            <div className="component-resizer"></div>
          </div>
          <div className="component-editor"></div>
        </div>
      </div>
    )
  }
}
