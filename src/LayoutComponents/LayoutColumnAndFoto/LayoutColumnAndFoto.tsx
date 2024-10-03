import Image, { StaticImageData } from 'next/image'
import React, { FunctionComponent } from 'react'

export type Props = {
    ColumnItem: React.ReactNode,
    src: string | StaticImageData,
    alt: string,
}

export const LayoutColumnAndFoto: FunctionComponent<Props> = ({
    ColumnItem,
    src,
    alt,
}) => {
    return (
        <div className='flex justify-between'>
            <>
                <Image src={src} alt={alt} />
            </>
            <>
                {ColumnItem}
            </>
        </div>
    )
}

