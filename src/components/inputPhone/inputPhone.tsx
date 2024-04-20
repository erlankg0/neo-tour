import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import styles from './inputPhone.module.css';

interface IPhoneNumber {
    phoneNumber: string,
    setPhoneNumber: (phone: string)=> void,
}

const InputPhone: React.FC<IPhoneNumber> = ({phoneNumber, setPhoneNumber}) => {
    return (
        <div>
            <PhoneInput
                containerClass={styles.dropdown}
                country={'KG'}
                value={phoneNumber}
                onChange={phone => setPhoneNumber(phone)}
                inputClass={styles.input}
                inputStyle={{borderRadius: '3rem'}}
                dropdownClass={styles.dropdown}
            />
        </div>
    );
};

export default InputPhone;
