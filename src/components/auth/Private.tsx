import React from 'react'
import Login from './Login'
import {ProfileProp} from './Profile'

type PrivateProps = { 
    isLoggedIn: boolean
    component: React.ComponentType<ProfileProp>
}

const Private = ({isLoggedIn, component: Component}: PrivateProps) => {
    if (isLoggedIn) {
        return <Component name='Nedu'/>
    }
  return (
    <div><Login/></div>
  )
}

export default Private