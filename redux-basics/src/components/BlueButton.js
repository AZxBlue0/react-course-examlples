import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { blueClicked } from '../actions';

const BlueButton = () => {
    const numOfClicks = useSelector(store => store.clicks.blue);

    const dispatch = useDispatch(blueClicked);
    return (
        <div>
            <p className={styles.blueText}> {numOfClicks} </p>
            <button onClick = {() => dispatch(blueClicked)}className={styles.blueButton}> blue </button>
        </div>
    )
}

export { BlueButton };