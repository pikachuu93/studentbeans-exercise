import React from 'react'
import styles from './styles'

import LikeButton from '../../../like_button'
import OwnerLink from '../../../owner_link'
import TextWithTags from '../text_with_tags'

const Comment = (props) => {
  const { owner, text, likeable } = props
  return (
    <li style={styles.comment}>
      <div style={styles.textColumn}>
        <OwnerLink owner={owner} />
        {' '}
        <TextWithTags text={text} />
      </div>
      {likeable && (
        <div style={styles.likeColumn}>
          <LikeButton size={16} liked={false} />
        </div>
      )}
    </li>
  )
}

export default Comment
