import React from 'react'

import {ALPHA_1, ALPHA_2, ALPHA_3, ALPHA_4, OMEGA_1, OMEGA_2, OMEGA_3, OMEGA_4} from '../../../../stocks/constants.js'
import styles from '../StockTicker.module.css'
import Gap from './Gap.js'
import StockType from './StockType.js'

export default function Heading () {
  return <tr className={styles.Heading}>
    <StockType stockIndex={ALPHA_1} />
    <StockType stockIndex={ALPHA_2} />
    <StockType stockIndex={ALPHA_3} />
    <StockType stockIndex={ALPHA_4} />

    <Gap />

    <StockType stockIndex={OMEGA_4} />
    <StockType stockIndex={OMEGA_3} />
    <StockType stockIndex={OMEGA_2} />
    <StockType stockIndex={OMEGA_1} />
  </tr>
}
