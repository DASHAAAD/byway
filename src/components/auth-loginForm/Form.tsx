import React, { FunctionComponent } from 'react'
import ButtonBlack from '../ButtonBlack/buttonBlack'


const Form: FunctionComponent = () => {
  return (
    <div>
      <h2>Log in to your account</h2>
      <form action="">
        <h3>Email</h3>
        <input type="text" placeholder='Email ID' />
        <h3>Password</h3>
        <input type="text" placeholder='Enter Password' />
        <ButtonBlack text='Sign in'/>
      </form>
    </div>
  )
}

export default Form
