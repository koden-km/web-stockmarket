import classnames from 'classnames'
import React from 'react'

import {useStock} from '../../../../stocks/react-hooks.js'
import {stockColorClass} from '../../../functions.js'
import styles from '../StockTicker.module.css'

export default function StockPrice (props) {
  const {priceIndex, stockIndex} = props
  const stock = useStock(stockIndex)

  return <td className={classnames(styles.Price, stockColorClass(stock.color))}>
    {stock.prices[priceIndex]}
  </td>
}
