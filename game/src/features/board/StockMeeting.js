import React from 'react'

import styles from './Board.module.css'

export default function StockMeeting (props) {
  const {multiplier} = props

  return <div className={styles.StockMeeting}>
    {multiplier} for 1
  </div>
}
