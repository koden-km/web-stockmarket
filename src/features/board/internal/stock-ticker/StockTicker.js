import React from 'react'

import {useCurrentPriceIndex} from '../../../gameplay/react-hooks.js'
import {MAX_PRICE_ENTRIES} from '../../../stocks/constants.js'
import styles from './StockTicker.module.css'
import Entry from './internal/Entry.js'
import Heading from './internal/Heading.js'

export default function StockTicker () {
  const currentPriceIndex = useCurrentPriceIndex()

  const rows = []
  for (let i = 0; i < MAX_PRICE_ENTRIES; ++i) {
    const key = i
    rows.push(<Entry key={key} priceIndex={i} isCurrent={i === currentPriceIndex} />)
  }

  return <table className={styles.StockTicker}>
    <thead><Heading /></thead>
    <tbody>{rows}</tbody>
    <tfoot><Heading /></tfoot>
  </table>
}
