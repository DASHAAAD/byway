import React, { FunctionComponent } from 'react'
import Title from './Title'
import Text from './Text'

type Props = {
    title: string,
    text: string,
    classNameTitle: string,
    classNameText: string,
    classNameWrapper: string
}

const Item: FunctionComponent<Props> = ({
    title,
    text,
    classNameTitle,
    classNameText,
    classNameWrapper
}) => {
    return (
        <div>
            <div className={classNameWrapper}>
                <Title title={title} className={classNameTitle}></Title>
                <Text text={text} className={classNameText}></Text>
            </div>
        </div>
    )
}

export default Item