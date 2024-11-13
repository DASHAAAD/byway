import Image from 'next/image'
import React, { FunctionComponent } from 'react'

import girl from '../../image/girl.png'
import { Title } from '@/components/Title/Title'

export const LoginForm: FunctionComponent = () => {
    return (

        <>
            <div>
<Title text='Log in to your account    ' />
                <form>
                    <input type="text" placeholder='JJJ'/>
                    <input type="text" />
                </form>
            </div>
            <Image src={girl} alt={'девочка с книжкой'} />
        </>

    )
}
