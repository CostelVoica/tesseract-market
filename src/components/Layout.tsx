import React, { PropsWithChildren } from 'react'
import Navbar from './Navbar'
import CircuitComponentOne from './CircuitComponentOne'
import CircuitComponentThree from './CircuitComponentThree'
import CircuitComponentTwo from './CircuitComponentTwo'
import styles from '../styles/layout.module.css'

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Navbar />
            <div className={styles.layout}>
                <div>
                    <CircuitComponentOne />
                    <CircuitComponentTwo />
                    <CircuitComponentThree />
                </div>
                {children}
            </div>
        </>
    )
}
export default Layout
