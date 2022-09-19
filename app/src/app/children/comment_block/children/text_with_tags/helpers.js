export function parseTagsFromText (text) {
  const tagsPattern = /[#@]([a-zA-Z0-9._]+)/g
  const matches = [...text.matchAll(tagsPattern)]
  const textParts = text.split(tagsPattern)

  const parts = [textParts.shift()]
  while (matches.length) {
    const tag = matches.shift()
    parts.push({ text: tag[0], slug: tag[1] })
    textParts.shift()
    parts.push(textParts.shift())
  }

  return parts
}
