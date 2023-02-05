import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { greenClicked } from '../actions';

const GreenButton = () => {
    const numOfClicks = useSelector(store => store.clicks.green);

    const dispatch = useDispatch(greenClicked);
    return (
        <div>
            <p className={styles.greenText}> {numOfClicks} </p>
            <button onClick = {() => dispatch(greenClicked)} className={styles.greenButton}> green </button>
        </div>
    )
}

export { GreenButton };