import classnames from 'classnames'
import React from 'react'

import {useStock} from '../../../stocks/react-hooks.js'
import {edgeTileClass, stockColorClass} from '../../functions.js'
import styles from './Tile.module.css'
import MoveDirection from './internal/MoveDirection.js'
import PriceChange from './internal/PriceChange.js'

export default function StockOption (props) {
  const {isMeetingEntry} = props
  const {moveDirection, priceIndexChange, stockType, tileIndex} = props.tile
  const stock = useStock(stockType)

  const className = classnames(
    edgeTileClass(tileIndex),
    stockColorClass(stock.color),
    styles.Tile,
    styles.StockOption,
  )

  return <div className={className}>
    {isMeetingEntry && <div className={styles.StockOptionEntry}>Stockholders Enter</div>}

    <div className={styles.StockOptionDividend}>${stock.dividend} DIV</div>
    <div className={styles.StockOptionName}>{stock.name}</div>
    {isMeetingEntry && <div className={styles.StockOptionLimit}>Purchase Limit One Share</div>}

    <MoveDirection direction={moveDirection} />
    <PriceChange amount={priceIndexChange} />
  </div>
}
