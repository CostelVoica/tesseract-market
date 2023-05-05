import React, { PropsWithChildren } from 'react'
import Navbar from './Navbar'
import CircuitComponent from './CircuitComponent'
import styles from '../styles/layout.module.css'

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Navbar />
            <div className={styles.layout}>
                <div>
                    <CircuitComponent
                        src={'/CircuitOne.svg'}
                        width={160}
                        height={133}
                        alt="Circuit One"
                        mirrorBool={false}
                    />
                    <CircuitComponent
                        src={'/CircuitTwo.svg'}
                        width={346}
                        height={133}
                        alt="Circuit Two"
                        mirrorBool={false}
                    />
                    <CircuitComponent
                        src={'/CircuitThree.svg'}
                        width={300}
                        height={300}
                        alt="Circuit Three"
                        mirrorBool={false}
                    />
                </div>
                {children}
                <div>
                    <CircuitComponent
                        src={'/CircuitOne.svg'}
                        width={160}
                        height={133}
                        alt="Circuit One"
                        mirrorBool={true}
                    />
                    <CircuitComponent
                        src={'/CircuitTwo.svg'}
                        width={346}
                        height={133}
                        alt="Circuit Two"
                        mirrorBool={true}
                    />
                    <CircuitComponent
                        src={'/CircuitThree.svg'}
                        width={300}
                        height={300}
                        alt="Circuit Three"
                        mirrorBool={true}
                    />
                </div>
            </div>
        </>
    )
}
export default Layout
