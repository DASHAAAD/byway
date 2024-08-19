import React, { FunctionComponent } from 'react'
import ButtonBlack from '../ButtonBlack/buttonBlack'
import Header from '@/sections/Header/Header'
import Footer from '@/sections/Footer/Footer'


const Form: FunctionComponent = () => {
  return (
    <>
      <Header />
      <div>
        <h2>Log in to your account</h2>
        <form action="">
          <h3>Email</h3>
          <input type="text" placeholder='Email ID' />
          <h3>Password</h3>
          <input type="text" placeholder='Enter Password' />
          <ButtonBlack text='Sign in' />
        </form>
      </div>
      <Footer />
    </>
  )
}

export default Form
