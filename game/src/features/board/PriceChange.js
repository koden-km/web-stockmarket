import React from 'react'

import styles from './Board.module.css'

export default function PriceChange (props) {
  const {amount} = props
  const description = amount < 0 ? `Up ${Math.abs(amount)}` : `Down ${amount}` // Original game Up/Down
  // const description = amount < 0 ? `Left ${Math.abs(amount)}` : `Right ${amount}` // Use Left/Right instead?
  // const description = amount < 0 ? `Alpha ${Math.abs(amount)}` : `Omega ${amount}` // Use Alpha/Omega instead?

  return <span className={styles.PriceIndexChange}>{description}</span>
}
