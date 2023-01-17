import React from 'react'

import styles from '../../Board.module.css'
import MoveDirection from './internal/MoveDirection.js'
import PriceChange from './internal/PriceChange.js'

export default function BrokerFee (props) {
  const {moveDirection, priceIndexChange} = props

  return <div className={styles.BrokerFee}>
    <span className={styles.BrokerFeeTitle}>PAY</span>
    <span className={styles.BrokerFeeInfo}>BROKER FEE</span>
    <span className={styles.BrokerFeePrice}>$10 PER SHARE</span>

    <MoveDirection direction={moveDirection} />
    <PriceChange amount={priceIndexChange} />
  </div>
}
