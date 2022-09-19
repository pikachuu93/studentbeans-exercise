export function getCommentsFromEdges (data) {
  return data.edges.map(edge => edge.node)
}

export function getCaptionFromEdge (data) {
  return data.edges[0].node.text
}
