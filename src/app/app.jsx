import React, { Component } from 'react'
import { FileList, Toolbar } from './components/components'

class App extends Component {
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

export default App
