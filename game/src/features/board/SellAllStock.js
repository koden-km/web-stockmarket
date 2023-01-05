import React from 'react'

import styles from './Board.module.css'
import MoveDirection from './MoveDirection.js'
import PriceChange from './PriceChange.js'

export default function SellAllStock (props) {
  const {moveDirection, priceIndexChange, stock} = props

  return <div className={styles.SellStock}>
    <span className={styles.SellStockTitle}>Sell All</span>
    <span className={styles.SellStockName}>{stock.name}</span>
    <span className={styles.SellStockInfo}>At {stock.basePrice} per share</span>

    <MoveDirection direction={moveDirection} />
    <PriceChange amount={priceIndexChange} />
  </div>
}
