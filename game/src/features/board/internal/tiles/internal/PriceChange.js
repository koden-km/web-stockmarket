import React from 'react'

import styles from './../../..//Board.module.css'

export default function PriceChange (props) {
  const {amount} = props
  const description = amount < 0 ? `UP ${Math.abs(amount)}` : `DOWN ${Math.abs(amount)}`

  return <span className={styles.PriceIndexChange}>{description}</span>
}
