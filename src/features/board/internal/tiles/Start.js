import classnames from 'classnames'
import React from 'react'

import {DIRECTION_LEFT, DIRECTION_RIGHT} from '../../../gameplay/constants.js'
import {edgeTileClass} from '../../functions.js'
import styles from './Tile.module.css'
import MoveDirection from './internal/MoveDirection.js'

export default function Start (props) {
  const {tileIndex} = props.tile

  const className = classnames(
    edgeTileClass(tileIndex),
    styles.Tile,
    styles.Start,
  )

  return <div className={className}>
    <div className={styles.StartTitle}>Start</div>
    <div className={styles.StartInfo}>Pay $100 Fee</div>

    <div className={styles.StartDirection}>
      <MoveDirection direction={DIRECTION_LEFT} />
      <MoveDirection direction={DIRECTION_RIGHT} />
    </div>

    <div className={styles.StartDirection}>
      <div>ODD</div>
      <div>EVEN</div>
    </div>
  </div>
}
