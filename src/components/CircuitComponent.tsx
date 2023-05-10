import styles from '../styles/circuit.module.css'
import Image from 'next/image'

interface MyComponentProps {
    src: string
    width: number
    height: number
    alt: string
    mirrorBool: boolean
}

const MyComponent: React.FC<MyComponentProps> = ({
    src,
    width,
    height,
    alt,
    mirrorBool,
}) => {
    if (!mirrorBool) {
        return (
            <div>
                <Image src={src} width={width} height={height} alt={alt} />
            </div>
        )
    } else {
        return (
            <div className={styles.mirror}>
                <Image src={src} width={width} height={height} alt={alt} />
            </div>
        )
    }
}

export default MyComponent
