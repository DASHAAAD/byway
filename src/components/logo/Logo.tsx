import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import logo from '../../image/logo.svg'

const Logo:FunctionComponent = () => {
  return (
    <div>
      <Image
        src={logo}
        alt="logo"
      />
    </div>
  )
}

export default Logo