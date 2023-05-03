import styles from '../styles/body.module.css'
import CircuitComponentOne from './CircuitComponentOne'
import CircuitComponentTwo from './CircuitComponentTwo'
import CircuitComponentThree from './CircuitComponentThree'

function Body() {
    return (
        <div className={styles.body}>
            <div>
                <CircuitComponentOne />
                <CircuitComponentTwo />
                <CircuitComponentThree />
            </div>
        </div>
    )
}

export default Body
