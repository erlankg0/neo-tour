import styles from './input.module.css'
import React from "react";

interface IInput {
    value: string,
    onChange: () => void;
}

const InputRemark: React.FC<IInput> = ({value, onChange}) => {
    console.log(value)
    return (
        <input type={'text'} className={styles.input} placeholder={'Write your wishes to trip...'} value={value}
               onChange={onChange}/>
    )
}

export default InputRemark