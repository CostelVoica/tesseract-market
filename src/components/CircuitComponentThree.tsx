import styles from '../styles/circuitThree.module.css'
import Image from 'next/image'

const MyComponent: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.graphicsContainer}>
                <Image
                    src={'/CircuitThree.svg'}
                    width={300}
                    height={300}
                    alt="Circuit Three"
                />
            </div>
        </div>
    )
}

export default MyComponent
