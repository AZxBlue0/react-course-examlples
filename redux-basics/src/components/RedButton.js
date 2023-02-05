import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { redClicked } from '../actions';

const RedButton = () => {
    const numOfClicks = useSelector(store => store.clicks.red);

    const dispatch = useDispatch(redClicked);
    return (
        <div>
            <p className={styles.redText}> {numOfClicks} </p>
            <button onClick={() => dispatch(redClicked)} className={styles.redButton}> Red </button>
        </div>
    );
}

export { RedButton };