import styles from './modal.module.css'
import InputPhone from "../inputPhone/inputPhone.tsx";
import InputRemark from "../input/input.tsx";
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import Counter from "../counter/counter.tsx";
import {Button} from "antd";
import React from "react";

interface IModal {
    confirmLoading: boolean,
    handleOK: () => void,
    setOpenDoneModal: (open: boolean) => void,
    setGood: (isGood: boolean) => void,
    phoneNumber: string,
    comment: string,
    handlePhoneNumber: (phone: string) => void,
    handleCommentOrder: (comment: string) => void

}

const ModalContent: React.FC<IModal> = ({
                                            confirmLoading,
                                            handleOK,
                                            setOpenDoneModal,
                                            setGood,
                                            phoneNumber,
                                            comment,
                                            handleCommentOrder,
                                            handlePhoneNumber
                                        }) => {

    return (
        <Formik
            initialValues={{
                phone: phoneNumber,
                comment: comment,
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
            {() => (
                <Form className={styles.content}>
                    <h3 className={styles.paragraph}>
                        To submit an application for a tour reservation,
                        you need to fill in your information and select
                        the number of people for the reservation
                    </h3>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor={'phone'}>Phone</label>
                        <Field type={'input'} as={InputPhone} phoneNumber={phoneNumber}
                               setPhoneNumber={handlePhoneNumber} name={'phone'}/>
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor={'phone'}>Commentaries to trip</label>
                        <Field type={'input'} as={InputRemark} handleCommentOrder={handleCommentOrder} value={comment}
                               name={'comment'}/>
                    </div>
                    <div className={styles.field}>
                        <Counter/>
                    </div>
                    <Button htmlType={'submit'} key="submit" type="primary" loading={confirmLoading} onClick={handleOK}
                            style={{
                                width: '100%',
                                height: '4.4rem',
                                backgroundColor: '#6A62B7',
                                borderRadius: '2rem',
                                color: 'white'
                            }} onSubmit={() => {
                        setOpenDoneModal(true)
                        setGood(false);
                    }} className={styles.buttonModal}>
                        Book
                    </Button>
                </Form>
            )}
        </Formik>
    )
}

export default ModalContent;
