import BgImage from './../../assets/image/bgImage.jpg';
import styles from './detail.module.css';
import {useNavigate} from "react-router-dom";
import {ArrowLeftOutlined, CloseOutlined} from "@ant-design/icons";
import {Button, Modal, Typography} from "antd";
import pin from './../../assets/icon/pin.svg';
import {IReview} from "../../components/review/review.tsx";
import Reviews from "../Reviews/reviews.tsx";
import ButtonUI from "../../components/button/button.tsx";
import {useState} from "react";
import ModalContent from "../../components/modalContent/modalContent.tsx";
import {useAddDispatch, useAppSelector} from "../../redux/hooks.ts";
import {setPhoneNumber, setCommentOrder} from "../../redux/reducer/modal.ts";

const Detail = () => {
    const navigate = useNavigate();

    const handlePrevPage = () => {
        navigate(-1);
    }
    const users: IReview[] = [{username: 'Erlan', img: '', comment: 'Рандомный комент азазазза'}, {
        username: 'Erlan',
        img: '',
        comment: 'Рандомный комент азазазза'
    }]

    const [open, setOpen] = useState<boolean>(false);
    const [openDoneModal, setOpenDoneModal] = useState<boolean>(false);
    const [confirmLoading, setConfirmLoading] = useState<boolean>(false);
    const [isGood, setGood] = useState<boolean>(false);

    const dispatch = useAddDispatch();

    const handleAddPhone = (phone: string) => {
        dispatch(setPhoneNumber(phone));
    }

    const hadleAddComentOrder = (comment: string) => {
        dispatch(setCommentOrder(comment));
    }

    const phoneNumber = useAppSelector(state => state.modal.phoneNumber);
    const comment = useAppSelector(state => state.modal.commentOrder);

    const handleShowModal = () => {
        setOpen(true);
    }
    const handleOK = () => {
        setConfirmLoading(true);
        setOpen(false);
        setConfirmLoading(false)
        setOpenDoneModal(true);
    }

    const handeDoneClose = () => {
        setOpenDoneModal(false);
    }
    const handleDoneCancel = () => {
        setOpenDoneModal(false);
    }
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    }

    return (
        <div className={styles.content}>
            <header className={styles.intro} style={{backgroundImage: `url(${BgImage})`}}>
                <div className="container">
                    <button className={styles.prev} onClick={handlePrevPage}>
                        <ArrowLeftOutlined style={{color: 'white', fontFamily: 'Satoshi', fontSize: '1.8rem'}}/>
                        Back
                    </button>
                </div>
            </header>
            <section>
                <div className={'container'}>
                    <div className={styles.content}>
                        <div className={styles.text}>
                            <Typography.Title>Mount Fuji</Typography.Title>
                            <div className={styles.paragraph}>
                                <img src={pin} alt={'pin location'}/>
                                <p>Honshu, Japan</p>
                            </div>
                        </div>

                        <div className={styles.text}>
                            <Typography.Title>Description</Typography.Title>
                            <div className={styles.paragraph}>
                                <Typography.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim eget
                                    amet viverra
                                    eget fames rhoncus. Eget enim venenatis enim porta egestas malesuada et. Consequat
                                    mauris lacus euismod montes.</Typography.Text>
                            </div>
                        </div>

                        <div className={styles.text}>
                            <Typography.Title>Reviews</Typography.Title>
                            <Reviews reviews={users}/>
                        </div>
                    </div>
                </div>
            </section>
            {/*Modal*/}
            <Modal
                title={<p>{phoneNumber}</p>}
                visible={open}
                onOk={handleOK}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                centered
                closeIcon={<CloseOutlined/>} // Add the close button icon
                footer={[null]}
            >
                <ModalContent
                    setGood={setGood}
                    setOpenDoneModal={setOpenDoneModal}
                    confirmLoading={confirmLoading}
                    handleOK={handleOK}
                    phoneNumber={phoneNumber}
                    comment={comment}
                    handleCommentOrder={hadleAddComentOrder}
                    handlePhoneNumber={handleAddPhone}
                />
            </Modal>

            {/* Modal Done*/}

            <Modal
                onCancel={handleDoneCancel}
                visible={openDoneModal}
                centered
                footer={[<Button key="submit" type="primary" onClick={handeDoneClose}
                                 style={{
                                     width: '100%',
                                     height: '4.4rem',
                                     backgroundColor: '#6A62B7',
                                     borderRadius: '2rem',
                                     color: 'white'
                                 }} onSubmit={() => setOpenDoneModal(true)} className={styles.buttonModal}>
                    OK
                </Button>]}
            >
                {
                    isGood ? <h2 className={styles.title}>Your trip has been booked!</h2> :
                        <h2 className={styles.title}>The tour can’t be booked</h2>
                }
            </Modal>
            {/* end Modal Done*/}

            <ButtonUI text={'Book now'} onClick={handleShowModal}/>

            {/*Modal*/}

        </div>
    )
}

export default Detail;
