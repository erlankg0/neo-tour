import styles from './modal.module.css'
import InputPhone from "../inputPhone/inputPhone.tsx";
import InputRemark from "../input/input.tsx";
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import Counter from "../counter/counter.tsx";

const ModalContent = () => {

    return (
        <Formik
            initialValues={{
                phone: '',
                comment: '',
                count: 0,
            }}
            validationSchema={Yup.object().shape({
                phone: Yup.string().required('Обязательное поле!'),
                comment: Yup.string().max(100, 'Максимум 100 симоволов'),
                count: Yup.number().min(1, 'Минимальное бронирование 1 PAX').max(5, 'Максимльное размещение 5 PAX')
            })}
            onSubmit={(values, {resetForm}) => {
                console.log(values.phone);
                console.log(values.comment);
                console.log(values.count, 'PAX');
                resetForm();
            }}>
            {({values}) => (
                <Form className={styles.content}>
                    <h3 className={styles.paragraph}>
                        To submit an application for a tour reservation,
                        you need to fill in your information and select
                        the number of people for the reservation
                    </h3>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor={'phone'}>Phone number</label>
                        <Field type={'input'} as={InputPhone} name={'phone'}/>
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor={'phone'}>Commentaries to trip</label>
                        <Field type={'input'} as={InputRemark} value={values.comment} name={'comment'}/>
                    </div>
                    <div className={styles.field}>
                        <Counter/>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default ModalContent;
