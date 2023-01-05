import React from 'react'

import styles from './Job.module.css'

export default function Job (props) {
  const {dice1, dice2, icon, title, salary} = props

  return <div className={styles.Job}>
    <div className={styles.Icon}>{icon}</div>
    <div className={styles.Title}>{title}</div>
    <div className={styles.Rolls}>{dice1} or {dice2} pays</div>
    <div className={styles.Salary}>${salary} salary</div>
  </div>
}
