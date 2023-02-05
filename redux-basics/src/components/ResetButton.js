import styles from './styles.module.css'
import { useDispatch } from 'react-redux';
import { resetClicked } from '../actions';

const ResetButton = () => {
    const dispatch = useDispatch(resetClicked);
    return (
        <div>
            <button onClick = {() => dispatch(resetClicked)} className={styles.resetButton}> Reset </button>
        </div>
    )
}

export { ResetButton };