import React from 'react'
import styles from './styles'
import { getCommentsFromEdges, getCaptionFromEdge } from './helpers'

import Comment from './children/comment'

const CommentBlock = (props) => {
  const { data } = props
  const { owner } = data

  const caption = getCaptionFromEdge(data.edge_media_to_caption)
  const comments = getCommentsFromEdges(data.edge_media_to_comment)

  return (
    <div style={styles.container}>
      <ol style={styles.comment_list}>
        <Comment owner={owner} text={caption} />
        {comments.map(c => (
          <Comment key={c.id} owner={c.owner} text={c.text} likeable />
        ))}
      </ol>
    </div>
  )
}

export default CommentBlock
