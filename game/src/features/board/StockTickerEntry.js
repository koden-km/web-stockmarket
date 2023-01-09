import React from 'react'

import styles from './StockTicker.module.css'
import {ALPHA_1, ALPHA_2, ALPHA_3, ALPHA_4, OMEGA_1, OMEGA_2, OMEGA_3, OMEGA_4} from '../stocks/constants.js'
import {useStocks} from '../stocks/react-hooks.js'

export default function StockTickerEntry (props) {
  const {isCurrent, priceIndex} = props
  // const stocks = useSelector((state) => state.stocks.stocks)
  const stocks = useStocks()

  // NOTE(KM): hmm this is horrible... so many lookups. I need to re-structure the prices state, or remap it.
  // It would be better to have a list of prices and index only once to get the company price...

  // TODO(KM): get prices for index... highlight active row (classnames() boolean...)
  // return <tr className={classnames(styles.StockTickerRow, [styles.StockTickerRowCurrent]: isCurrent)}>
  return <tr className={isCurrent ? `${styles.Entry} ${styles.IsCurrent}` : styles.Entry}>
    <td>{stocks[ALPHA_1].prices[priceIndex]}</td>
    <td>{stocks[ALPHA_2].prices[priceIndex]}</td>
    <td>{stocks[ALPHA_3].prices[priceIndex]}</td>
    <td>{stocks[ALPHA_4].prices[priceIndex]}</td>
    <td>{stocks[OMEGA_4].prices[priceIndex]}</td>
    <td>{stocks[OMEGA_3].prices[priceIndex]}</td>
    <td>{stocks[OMEGA_2].prices[priceIndex]}</td>
    <td>{stocks[OMEGA_1].prices[priceIndex]}</td>
  </tr>
}
