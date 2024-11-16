import { createSlice, nanoid } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ReactNode } from 'react'


export interface TypeProps {
    id?: string
    nameUser?: string
    text?: string
    map?: ReactNode;
    // image?: HTMLImageElement
}


export const userSlice = createSlice({
    name: 'user',
    initialState: [] as TypeProps[],
    reducers: {
        newArr: {
            reducer: (state, action: PayloadAction<TypeProps>) => {
                state.push(action.payload)
            },
            prepare: (text: string) => {
                const id = nanoid()
                return { payload: { id, text } }
            },
        }
    }
})


