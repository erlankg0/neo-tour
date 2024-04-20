import styles from './input.module.css'
import React, {ChangeEvent} from "react";

interface IInput {
    value: string,
    handleCommentOrder: (coment: string) => void;
}

const InputRemark: React.FC<IInput> = ({value, handleCommentOrder}) => {

    return (
        <input type={'text'} className={styles.input} placeholder={'Write your wishes to trip...'} value={value}
               onChange={(event: ChangeEvent<HTMLInputElement>) => handleCommentOrder(event.target.value)}/>
    )
}

export default InputRemark