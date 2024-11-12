import Image from 'next/image'
import React, { FunctionComponent } from 'react'

import girl from '../../image/girl.png'

export const LoginForm: FunctionComponent = () => {
    return (

        <>
            <div>
                <form>

                </form>
            </div>
            <Image src={girl} alt={'девочка с книжкой'} />
        </>

    )
}
