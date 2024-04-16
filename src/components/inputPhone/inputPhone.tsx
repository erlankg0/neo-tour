import {useState} from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import styles from './inputPhone.module.css';

const InputPhone = () => {
    const [phone, setPhone] = useState('');


    return (
        <div>
            <PhoneInput
                containerClass={styles.dropdown}
                country={'KG'}
                value={phone}
                onChange={phone => setPhone(phone)}
                inputClass={styles.input}
                inputStyle={{borderRadius: '3rem'}}
                dropdownClass={styles.dropdown}
            />
        </div>
    );
};

export default InputPhone;
