import classnames from 'classnames'
import React from 'react'

import {useStock} from '../../../../stocks/react-hooks.js'
import {stockColorClass} from '../../../functions.js'
import styles from '../StockTicker.module.css'

export default function StockType (props) {
  const {stockIndex} = props
  const stock = useStock(stockIndex)

  return <div className={classnames(styles.StockType, stockColorClass(stock.color))}>
    {stock.name}
  </div>
}
