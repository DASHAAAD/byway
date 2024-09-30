import React, { FunctionComponent } from 'react'

import { LayoutFlex } from './LayoutFlex'

const LeftElement = () => {
    return (
        <div>
            <h1>left</h1>
            <p>text</p>
        </div>
    )
}

export const LayoutFlexPage: FunctionComponent = () => {
    return (
        <div>
            <LayoutFlex
                left={LeftElement}
                right={undefined}>

            </LayoutFlex>
        </div>
    )
}
