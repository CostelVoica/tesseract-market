import React, { PropsWithChildren } from 'react'
import Navbar from './Navbar'
import CircuitComponent from './CircuitComponent'
import styles from '../styles/layout.module.css'

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Navbar />
            <div className={styles.body}>{children}</div>
        </>
    )
}
export default Layout
