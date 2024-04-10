import {useState} from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import styles from './inputPhone.module.css'

const InputPhone = () => {
    const [phone, setPhone] = useState('');

    return (
        <div>
            <PhoneInput
                country={'kg'}
                value={phone}
                onChange={phone => setPhone(phone)}
                inputClass={styles.input}
                containerClass={styles.content}
                placeholder="Enter phone number"
            />
        </div>
    );
};

export default InputPhone;
