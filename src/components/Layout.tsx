import React, { PropsWithChildren } from 'react'
import Navbar from './Navbar'
import Body from './Body'

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Navbar />
            <Body />
            {children}
        </>
    )
}
export default Layout
