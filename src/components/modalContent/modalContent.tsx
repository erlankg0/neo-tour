import styles from './modal.module.css'
import InputPhone from "../inputPhone/inputPhone.tsx";
import InputRemark from "../input/input.tsx";
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import Counter from "../counter/counter.tsx";
import {Button} from "antd";
import React, {useState} from "react";
import {booking} from "../../API/api.ts";

interface IModal {
    confirmLoading: boolean,
    handleOK: () => void,
    setOpenDoneModal: (open: boolean) => void,
    setGood: (isGood: boolean) => void,
    phoneNumber: string,
    comment: string,
    id: string,
    handlePhoneNumber: (phone: string) => void,
    handleCommentOrder: (comment: string) => void,

}

const ModalContent: React.FC<IModal> = ({
                                            confirmLoading,
                                            handleOK,
                                            setOpenDoneModal,
                                            setGood,
                                            phoneNumber,
                                            comment,
                                            id,
                                            handleCommentOrder,
                                            handlePhoneNumber,
                                        }) => {
    const [count, setCount] = useState(1);

    return (
        <Formik
            initialValues={{
                phone: phoneNumber,
                comment: comment,
                count: count,
            }}
            validationSchema={Yup.object().shape({
                phone: Yup.string().required('Обязательное поле!'),
                comment: Yup.string().max(100, 'Максимум 100 символов'),
                count: Yup.number().min(1, 'Минимальное бронирование 1 PAX').max(5, 'Максимальное размещение 5 PAX')
            })}
            onSubmit={() => {
                setOpenDoneModal(true);
                setGood(false);
            }}
        >
            {() => (
                <Form className={styles.content}>
                    <h3 className={styles.paragraph}>
                        To submit an application for a tour reservation,
                        you need to fill in your information and select
                        the number of people for the reservation
                    </h3>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="phone">Phone</label>
                        <Field type="input" as={InputPhone} phoneNumber={phoneNumber} setPhoneNumber={handlePhoneNumber}
                               name="phone"/>
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="comment">Commentaries to trip</label>
                        <Field type="input" as={InputRemark} handleCommentOrder={handleCommentOrder} value={comment}
                               name="comment"/>
                    </div>
                    <div className={styles.field}>
                        <Counter count={count} setCount={setCount}/>
                    </div>
                    <Button key="submit" type="primary" loading={confirmLoading} onClick={() => {
                        handleOK();
                        booking(id, phoneNumber, count, comment).then(res => {
                            if (res.data == 'Your trip has been booked!') {
                                setGood(true);
                            }
                        }).catch(() => setGood(false));
                    }} className={styles.buttonModal} htmlType="submit">
                        Book
                    </Button>
                </Form>
            )}
        </Formik>
    );
};


export default ModalContent;
