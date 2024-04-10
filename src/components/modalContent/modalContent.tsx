import styles from './modal.module.css'
import InputPhone from "../inputPhone/inputPhone.tsx";
import InputRemark from "../input/input.tsx";
import {useState} from "react";

const ModalContent = () => {

    const [comment, setComment] = useState('');
    const handleOnChange = () => {
        setComment((value)=> value + comment);
    }
    return (
        <div className={styles.content}>
            <h3 className={styles.paragraph}>
                To submit an application for a tour reservation,
                you need to fill in your information and select
                the number of people for the reservation
            </h3>
            <InputPhone/>
            <InputRemark value={comment} onChange={handleOnChange}/>
        </div>
    )
}

export default ModalContent;