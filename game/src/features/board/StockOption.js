import React from 'react'

import {useStock} from '../stocks/react-hooks.js'
import styles from './Board.module.css'
import MoveDirection from './MoveDirection.js'
import PriceChange from './PriceChange.js'

export default function StockOption (props) {
  const {isMeetingEntry, moveDirection, priceIndexChange, stockType} = props
  const stock = useStock(stockType)

  return <div className={styles.StockOption}>
    {isMeetingEntry && <span className={styles.StockOptionEntry}>Stockholders Enter</span>}

    <span className={styles.StockOptionDiv}>${stock.dividend} DIV</span>
    <span className={styles.StockOptionName}>{stock.name}</span>
    {isMeetingEntry && <span className={styles.StockOptionLimit}>Purchase Limit One Share</span>}

    <MoveDirection direction={moveDirection} />
    <PriceChange amount={priceIndexChange} />
  </div>
}
