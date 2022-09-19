import React, { useMemo } from 'react'
import { parseTagsFromText } from './helpers'

const Tag = props => {
  const { text, slug } = props
  return <a href={`/${slug}`}>{text}</a>
}

const TextWithTags = (props) => {
  const { text } = props

  const parts = useMemo(() => parseTagsFromText(text), [text])

  return parts.map((part, index) => {
    if (typeof part === 'string') {
      return part
    } else {
      return <Tag key={index} text={part.text} slug={part.slug} />
    }
  })
}

export default TextWithTags
