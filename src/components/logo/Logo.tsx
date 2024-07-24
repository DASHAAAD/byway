import React from 'react'
import Image from 'next/image'
import logo from '../../image/logo.svg'

const Logo = () => {
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