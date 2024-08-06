import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import logo from '../../image/logo.svg'

const Logo:FunctionComponent = () => {
  return (
    <a href="#">
      <Image
        src={logo}
        alt="logo"
      />
    </a>
  )
}

export default Logo