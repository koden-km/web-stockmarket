import classnames from 'classnames'
import React from 'react'

import {edgeTileClass} from '../../functions.js'
import styles from './Tile.module.css'
import MoveDirection from './internal/MoveDirection.js'
import PriceChange from './internal/PriceChange.js'

export default function BrokerFee (props) {
  const {moveDirection, priceIndexChange, tileIndex} = props.tile

  const className = classnames(
    edgeTileClass(tileIndex),
    styles.Tile,
    styles.BrokerFee,
  )

  return <div className={className}>
    <div className={styles.BrokerFeeTitle}>Pay</div>
    <div className={styles.BrokerFeeInfo}>Broker Fee</div>
    <div className={styles.BrokerFeePrice}>$10 per share</div>

    <MoveDirection direction={moveDirection} />
    <PriceChange amount={priceIndexChange} />
  </div>
}
