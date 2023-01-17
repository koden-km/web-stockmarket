import classnames from 'classnames'
import React from 'react'

import {useStock} from '../../../stocks/react-hooks.js'
import {edgeTileClass, stockColorClass} from '../../functions.js'
import styles from './Tile.module.css'
import MoveDirection from './internal/MoveDirection.js'
import PriceChange from './internal/PriceChange.js'

export default function SellAllStock (props) {
  const {moveDirection, priceIndexChange, stockType, tileIndex} = props.tile
  const stock = useStock(stockType)

  const className = classnames(
    edgeTileClass(tileIndex),
    stockColorClass(stock.color),
    styles.Tile,
    styles.SellAllStock,
  )

  return <div className={className}>
    <div className={styles.SellStockTitle}>Sell All</div>
    <div className={styles.SellStockName}>{stock.name}</div>
    <div className={styles.SellStockInfo}>At {stock.basePrice} per share</div>

    <MoveDirection direction={moveDirection} />
    <PriceChange amount={priceIndexChange} />
  </div>
}
