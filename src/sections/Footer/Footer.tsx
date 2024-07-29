import Logo from '@/components/logo/Logo'
import React from 'react'

const Footer = () => {
    return (
        <div className='flex justify-between items-center'>
            <div>
                <div className="flex items-center mb-4">
                    <Logo />
                    <a className='text-4xl' href="#">Byway</a>
                </div>
                <p className='w-[418px]'>Empowering learners through accessible and engaging online education.
                    Byway is an online learning platform dedicated to providing high-quality, flexible, and affordable educational experiences. </p>
            </div>
            <div className='[&_p]:mb-2'>
                <h2 className='mb-2 text-2xl font-semibold'>Get Help</h2>
                <p>Contact Us</p>
                <p>Latest Articles</p>
                <p>FAQ</p>
            </div>
            <div>
                <h2 className='mb-2 text-2xl font-semibold'>Programs</h2>
                <p>Art & Design</p>
                <p>Business</p>
                <p>IT & Software</p>
                <p>Languages</p>
                <p>Programming</p>
            </div>
            <div className='[&_p]:mb-2 w-[316px]'>
                <h2 className='mb-2 text-2xl font-semibold'>Contact Us</h2>
                <p>Address: Saint-Petersburg, Kronverkskaya st., building 7</p>
                <a href="tel:88005553535">Tel: 8(800) 555-35-35</a>
                <a href="mailto:bywayedu@webkul.in">Mail: bywayedu@webkul.in</a>
            </div>
        </div>
    )
}

export default Footer