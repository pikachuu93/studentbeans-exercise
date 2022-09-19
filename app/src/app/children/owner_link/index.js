import React from 'react'
import styles from './styles'

const OwnerLink = ({ owner }) => {
  return <a href={`/${owner.username}`} style={styles}>{owner.username}</a>
}

export default OwnerLink
