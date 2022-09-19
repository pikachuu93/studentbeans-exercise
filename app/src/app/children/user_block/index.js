import React from 'react'
import styles from './styles'

import OwnerLink from '../owner_link'

const UserBlock = (props) => {
  const { data } = props
  const { owner, location } = data
  return (
    <div style={styles.row}>
      <div style={styles.image_container}>
        <img
          src={owner.profile_pic_url}
          style={styles.profile_pic}
          alt={owner.full_name || owner.username}
          title={owner.full_name || owner.username}
        />
      </div>
      <div style={styles.column}>
        <div>
          <OwnerLink owner={owner} />
        </div>
        <div style={styles.location_text}>
          {location.name}
        </div>
      </div>
    </div>
  )
}

export default UserBlock
