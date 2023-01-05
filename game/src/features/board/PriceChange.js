import React from 'react'

import styles from './Board.module.css'

export default function PriceChange (props) {
  const {amount} = props
  // const description = amount < 0 ? `Down ${Math.abs(amount)}` : `Up ${amount}` // Original game Up/Down
  const description = amount < 0 ? `Left ${Math.abs(amount)}` : `Right ${amount}` // Use Left/Right instead?

  return <span className={styles.PriceIndexChange}>{description}</span>
}
