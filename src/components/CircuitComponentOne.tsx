import styles from '../styles/circuitOne.module.css'
import Image from 'next/image'

const MyComponent: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.graphicsContainer}>
                <Image
                    src={'/CircuitOne.svg'}
                    width={160}
                    height={133}
                    alt="Circuit One"
                />
            </div>
        </div>
    )
}

export default MyComponent
