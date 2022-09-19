import React from 'react'

import styles from './styles'
import { getTimeAgoStringFromDate } from './helpers'
import LikeButton from '../like_button'

const MetaBlock = props => {
  const { data } = props

  const likeCount = data.edge_media_preview_like.count
  const takenAt = new Date(data.taken_at_timestamp * 1000)
  const timeAgo = getTimeAgoStringFromDate(takenAt)

  return (
    <div style={styles.container}>
      <div style={styles.dataColumn}>
        <span style={styles.likeCount}>{likeCount} likes</span>
        <span style={styles.timeAgo}>{timeAgo}</span>
      </div>
      <div style={styles.likeColumn}>
        <LikeButton size={32} />
      </div>
    </div>
  )
}

export default MetaBlock
