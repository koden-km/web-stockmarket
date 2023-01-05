import React from 'react'

import {DIRECTION_LEFT, DIRECTION_RIGHT} from '../gameplay/constants.js'
import styles from './Board.module.css'

export default function MoveDirection (props) {
  const {direction} = props

  // TODO(KM): use icons from font-awesome or something, unicode?
  return <span className={styles.MoveDirection}>
    {/* {direction === DIRECTION_LEFT && '<----'} */}
    {/* {direction === DIRECTION_RIGHT && '---->'} */}

    {direction === DIRECTION_LEFT && '←'}
    {direction === DIRECTION_RIGHT && '→'}
  </span>
}
