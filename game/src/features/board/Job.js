import React from 'react'

import {useJob} from '../jobs/react-hooks.js'
import styles from './Job.module.css'

export default function Job (props) {
  const {jobIndex} = props
  const {dice1, dice2, icon, salary, title} = useJob(jobIndex)

  return <div className={styles.Job}>
    <div className={styles.Icon}>{icon}</div>
    <div className={styles.Title}>{title}</div>
    <div className={styles.Rolls}>{dice1} or {dice2} pays</div>
    <div className={styles.Salary}>${salary} salary</div>
  </div>
}
