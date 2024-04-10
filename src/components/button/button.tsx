import styles from './button.module.css'
import React from "react";

interface IButton {
    text: string,
    onClick: () => void,
}

const ButtonComponent: React.FC<IButton> = ({text, onClick}) => {
    return (
        <div className={'container'}>
            <button onClick={onClick} className={styles.button}>{text}</button>
        </div>
    )
}

export default ButtonComponent;