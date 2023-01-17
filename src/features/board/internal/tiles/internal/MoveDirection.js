import React from 'react'

import {DIRECTION_LEFT, DIRECTION_RIGHT} from '../../../../gameplay/constants.js'
import styles from '../Tile.module.css'

const LEFT_SYMBOL = '←'
const RIGHT_SYMBOL = '→'

export default function MoveDirection (props) {
  const {direction} = props

  return <div className={styles.MoveDirection}>
    {direction === DIRECTION_LEFT && LEFT_SYMBOL}
    {direction === DIRECTION_RIGHT && RIGHT_SYMBOL}
  </div>
}
