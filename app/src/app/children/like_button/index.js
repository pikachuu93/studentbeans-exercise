import React, { useState, useCallback } from 'react'
import LikedIcon from './children/liked_icon'
import UnlikedIcon from './children/unliked_icon'

const LikeButton = (props) => {
  const { size } = props

  const [liked, setLiked] = useState(props.liked)

  const toggleLikedClick = useCallback(() => {
    setLiked(!liked)
  }, [liked])

  const toggleLikedKeyboard = useCallback((event) => {
    if (event.key !== 'Enter' && event.key !== ' ') {
      return
    }

    setLiked(!liked)

    event.preventDefault()
    return false
  }, [liked])

  return (
    <span
      onClick={toggleLikedClick}
      onKeyDown={toggleLikedKeyboard}
      role='button'
      aria-pressed={liked ? 'true' : 'false'}
      aria-label={liked ? 'Like' : 'Unlike'}
      tabindex='0'
    >
      {liked ? <LikedIcon size={size} /> : <UnlikedIcon size={size} />}
    </span>
  )
}

export default LikeButton
