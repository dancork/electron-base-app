'use strict'

import React, { Component } from 'react'
import { ToolbarButton } from '../components'

export class Toolbar extends Component {
  render() {
    return (
      <div className="component-toolbar">
        <ToolbarButton>
          A
        </ToolbarButton>
      </div>
    )
  }
}
