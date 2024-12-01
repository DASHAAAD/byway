import { MenuEditProfile } from '@/components/NavigationMenu/Nav.stories'
import { NavWrapper } from '@/components/NavigationMenu/NavWrapper'
import React from 'react'

export const Playground = () => {
  return (
    <div>
      <NavWrapper {...MenuEditProfile.args}/>
    </div>
  )
}
