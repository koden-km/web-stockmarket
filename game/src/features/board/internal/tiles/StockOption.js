import React from 'react'

import {useStock} from '../../../stocks/react-hooks.js'
import styles from '../../Board.module.css'
import {stockColorClass} from '../../functions.js'
import MoveDirection from './internal/MoveDirection.js'
import PriceChange from './internal/PriceChange.js'

export default function StockOption (props) {
  const {isMeetingEntry, moveDirection, priceIndexChange, stockType} = props
  const stock = useStock(stockType)

  return <div className={`${styles.StockOption} ${stockColorClass(stock.color)}`}>
    {isMeetingEntry && <span className={styles.StockOptionEntry}>Stockholders Enter</span>}

    <span className={styles.StockOptionDividend}>${stock.dividend} DIV</span>
    <span className={styles.StockOptionName}>{stock.name}</span>
    {isMeetingEntry && <span className={styles.StockOptionLimit}>Purchase Limit One Share</span>}

    <MoveDirection direction={moveDirection} />
    <PriceChange amount={priceIndexChange} />
  </div>
}
