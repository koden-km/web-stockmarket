import classnames from 'classnames'
import React from 'react'

import {ALPHA_1, ALPHA_2, ALPHA_3, ALPHA_4, OMEGA_1, OMEGA_2, OMEGA_3, OMEGA_4} from '../../../../stocks/constants.js'
import styles from '../StockTicker.module.css'
import Gap from './Gap.js'
import StockPrice from './StockPrice.js'

export default function Entry (props) {
  const {isCurrent, priceIndex} = props

  return <tr className={classnames(styles.Entry, {[styles.IsCurrent]: isCurrent})}>
    <td><StockPrice priceIndex={priceIndex} stockIndex={ALPHA_1} /></td>
    <td><StockPrice priceIndex={priceIndex} stockIndex={ALPHA_2} /></td>
    <td><StockPrice priceIndex={priceIndex} stockIndex={ALPHA_3} /></td>
    <td><StockPrice priceIndex={priceIndex} stockIndex={ALPHA_4} /></td>

    <td><Gap /></td>

    <td><StockPrice priceIndex={priceIndex} stockIndex={OMEGA_4} /></td>
    <td><StockPrice priceIndex={priceIndex} stockIndex={OMEGA_3} /></td>
    <td><StockPrice priceIndex={priceIndex} stockIndex={OMEGA_2} /></td>
    <td><StockPrice priceIndex={priceIndex} stockIndex={OMEGA_1} /></td>
  </tr>
}
