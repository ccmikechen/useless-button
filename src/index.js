import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default class UselessButton extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props

    return (
      <button className={styles.button}
              onClick={() => alert("You are useless!")}>
        { text }
      </button>
    )
  }
}
