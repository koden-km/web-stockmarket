import React from 'react'

import styles from './Board.module.css'
import MoveDirection from './MoveDirection.js'
import PriceChange from './PriceChange.js'

export default function BuyStock (props) {
  const {isMeetingEntry, moveDirection, priceIndexChange, stock} = props

  return <div className={styles.BuyStock}>
    {isMeetingEntry && <span className={styles.BuyStockEntry}>Stockholders Enter</span>}

    <span className={styles.BuyStockDiv}>${stock.dividend} DIV</span>
    <span className={styles.BuyStockName}>{stock.name}</span>
    {isMeetingEntry && <span className={styles.BuyStockLimit}>Purchase Limit One Share</span>}

    <MoveDirection direction={moveDirection} />
    <PriceChange amount={priceIndexChange} />
  </div>
}
