import React from 'react'
import Image from './children/image'
import UserBlock from './children/user_block'
import CommentBlock from './children/comment_block'
import MetaBlock from './children/meta_block'
import Divider from './children/divider'
import styles from './styles'

const App = (props) => {
  const { data } = props
  return (
    <main style={styles.main}>
      <div style={styles.image}>
        <Image data={data} />
      </div>
      <div style={styles.text}>
        <UserBlock data={data} />
        <Divider />
        <CommentBlock data={data} />
        <MetaBlock data={data} />
      </div>
    </main>
  )
}

export default App
