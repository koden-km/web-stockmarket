import classnames from 'classnames'
import React from 'react'

export default function Anchor (props) {
  const {
    className = 'App-link',
    href,
    label,
    rel = 'noopener noreferrer',
    target = '_blank',
  } = props

  return <a className={classnames({[className]: className})} href={href} target={target} rel={rel}>
    {label}
  </a>
}
