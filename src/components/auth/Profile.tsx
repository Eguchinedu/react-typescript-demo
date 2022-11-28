import React from 'react'

export type ProfileProp = {
    name: string
}

const Profile = ({name} : ProfileProp) => {
  return (
    <div>Private Profile component. Name is {name}</div>
  )
}

export default Profile