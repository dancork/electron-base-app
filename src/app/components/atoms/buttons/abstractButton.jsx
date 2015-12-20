'use strict'

import React, { Component, PropTypes } from 'react'

const types = ['button', 'reset', 'submit']

export class AbstractButton extends Component {

  static propTypes = {
    disabled: PropTypes.bool,
    href: PropTypes.string,
    target: PropTypes.string,
    type: PropTypes.oneOf(types)
  }

  static defaultProps = {
    disabled: false,
    type: 'button'
  }

  render() {
    if (this.props.href || this.props.target) {
      return this.renderAnchor()
    }
    return this.renderButton()
  }

  renderAnchor() {
    const props = {
      href: this.props.href || '#',
      target: this.props.target,
      role: 'button'
    }
    return (
      <a {...props}>
        {this.props.children}
      </a>
    )
  }

  renderButton() {
    const props = {
      type: this.props.type,
      disabled: this.props.disabled
    }
    return (
      <button {...props}>
        {this.props.children}
      </button>
    )
  }

}
