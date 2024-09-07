import React from 'react'
import Image from 'next/image'
import img from './column-image.png'

const ImageItem = () => {
    return (
        <>
            <Image src={img} alt={'девочка'}></Image>
        </>
    )
}

export default ImageItem