import React from 'react'

import styles from '../Tile.module.css'

export default function PriceChange (props) {
  const {amount} = props
  const description = amount < 0 ? `Up ${Math.abs(amount)}` : `Down ${Math.abs(amount)}`

  return <div className={styles.PriceIndexChange}>{description}</div>
}
