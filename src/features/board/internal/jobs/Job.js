import classnames from 'classnames'
import React from 'react'

import {useJob} from '../../../jobs/react-hooks.js'
import {jobTileClass} from '../../functions.js'
import styles from './Job.module.css'

export default function Job (props) {
  const {jobIndex} = props.tile
  const {dice1, dice2, icon, salary, title} = useJob(jobIndex)

  const className = classnames(
    jobTileClass(jobIndex),
    styles.Job,
    styles[`Job${jobIndex}`],
  )

  return <div className={className}>
    <div className={styles.Icon}>{icon}</div>
    <div className={styles.Title}>{title}</div>
    <div className={styles.Rolls}>{dice1} or {dice2} pays</div>
    <div className={styles.Salary}>${salary} salary</div>
  </div>
}
