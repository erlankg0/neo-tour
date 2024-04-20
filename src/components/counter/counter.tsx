import {useState} from "react";
import styles from "./counter.module.css";
import personIcon from './../../assets/icon/person.svg';

const Counter = () => {
    const [count, setCount] = useState(1);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    return (
        <div className={styles.content}>
            <div className={styles.form}>
                <button onClick={handleDecrement} className={styles.button}>-</button>
                <p className={styles.count}>{count}</p>
                <button onClick={handleIncrement} className={styles.button}>+</button>
            </div>
            <div className={styles.text}>
                <img src={personIcon} alt={'person Icon'}/>
                <p>{count}</p>
                <p>Person</p>
            </div>
        </div>
    )
}

export default Counter;
