import React from 'react'

import {useStock} from '../../../stocks/react-hooks.js'
import styles from '../../Board.module.css'
import MoveDirection from './internal/MoveDirection.js'
import PriceChange from './internal/PriceChange.js'

export default function SellAllStock (props) {
  const {moveDirection, priceIndexChange, stockType} = props
  const stock = useStock(stockType)

  return <div className={styles.SellAllStock}>
    <span className={styles.SellStockTitle}>Sell All</span>
    <span className={styles.SellStockName}>{stock.name}</span>
    <span className={styles.SellStockInfo}>At {stock.basePrice} per share</span>

    <MoveDirection direction={moveDirection} />
    <PriceChange amount={priceIndexChange} />
  </div>
}
