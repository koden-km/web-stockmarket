import React from 'react'
import {useSelector} from 'react-redux'

import {MAX_PRICE_ROWS} from '../stocks/constants.js'
import styles from './Board.module.css'
import StockTickerEntry from './StockTickerEntry.js'

export default function StockTicker () {
  const currentPriceIndex = useSelector((state) => state.gameplay.currentPriceIndex)

  const rows = []
  for (let i = 0; i < MAX_PRICE_ROWS; ++i) {
    const key = i
    rows.push(<StockTickerEntry key={key} priceIndex={i} isCurrent={i === currentPriceIndex} />)
  }

  return <table className={styles.StockTicker}>
    {rows}
  </table>
}
