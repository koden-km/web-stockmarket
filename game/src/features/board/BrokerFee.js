import React from 'react'

import styles from './Board.module.css'
import MoveDirection from './MoveDirection.js'
import PriceChange from './PriceChange.js'

export default function BrokerFee (props) {
  const {moveDirection, priceIndexChange} = props

  return <div className={styles.BrokerFee}>
    <span className={styles.BrokerFeeTitle}>PAY</span>
    <span className={styles.BrokerFeeInfo}>Broker Fee</span>
    <span className={styles.SellPriceInfo}>$10 per share</span>

    <MoveDirection direction={moveDirection} />
    <PriceChange amount={priceIndexChange} />
  </div>
}
