import styles from '../styles/circuitTwo.module.css'
import Image from 'next/image'

const MyComponent: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.graphicsContainer}>
                <Image
                    src={'/CircuitTwo.svg'}
                    width={346}
                    height={133}
                    alt="Circuit Two"
                />
            </div>
        </div>
    )
}

export default MyComponent
