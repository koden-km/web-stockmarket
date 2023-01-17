import classnames from 'classnames'
import React from 'react'

import {meetingTileClass} from '../../functions.js'
import styles from './Tile.module.css'

export default function StockMeeting (props) {
  const {stockMultiplier, stockType, tileIndex} = props.tile

  const className = classnames(
    meetingTileClass(tileIndex, stockType),
    styles.Tile,
    styles.StockMeeting,
  )

  return <div className={className}>
    {stockMultiplier} for 1
  </div>
}
