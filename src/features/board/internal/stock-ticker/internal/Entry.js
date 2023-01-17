import classnames from 'classnames'
import React from 'react'

import {ALPHA_1, ALPHA_2, ALPHA_3, ALPHA_4, OMEGA_1, OMEGA_2, OMEGA_3, OMEGA_4} from '../../../../stocks/constants.js'
import styles from '../StockTicker.module.css'
import StockPrice from './StockPrice.js'

export default function Entry (props) {
  const {isCurrent, priceIndex} = props

  return <tr className={classnames(styles.Entry, {[styles.IsCurrent]: isCurrent})}>
    <StockPrice priceIndex={priceIndex} stockIndex={ALPHA_1} />
    <StockPrice priceIndex={priceIndex} stockIndex={ALPHA_2} />
    <StockPrice priceIndex={priceIndex} stockIndex={ALPHA_3} />
    <StockPrice priceIndex={priceIndex} stockIndex={ALPHA_4} />

    <StockPrice priceIndex={priceIndex} stockIndex={OMEGA_4} />
    <StockPrice priceIndex={priceIndex} stockIndex={OMEGA_3} />
    <StockPrice priceIndex={priceIndex} stockIndex={OMEGA_2} />
    <StockPrice priceIndex={priceIndex} stockIndex={OMEGA_1} />
  </tr>
}
