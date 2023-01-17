import React from 'react'

import {DIRECTION_LEFT, DIRECTION_RIGHT} from '../../../gameplay/constants.js'
import styles from '../..//Board.module.css'
import MoveDirection from './internal/MoveDirection.js'

export default function Start () {
  return <div className={styles.Start}>
    <span className={styles.StartTitle}>START</span>
    <span className={styles.StartInfo}>Pay $100 Fee</span>

    <div className={styles.StartDirection}>
      <MoveDirection direction={DIRECTION_LEFT} />
      <MoveDirection direction={DIRECTION_RIGHT} />
    </div>

    <div className={styles.StartDirection}>
      <span>ODD</span>
      <span>EVEN</span>
    </div>
  </div>
}
