import BgImage from './../../assets/image/bgImage.jpg';
import styles from './detail.module.css';
import {useNavigate} from "react-router-dom";
import {ArrowLeftOutlined, CloseOutlined} from "@ant-design/icons";
import {Typography} from "antd";
import pin from './../../assets/icon/pin.svg';
import {IReview} from "../../components/review/review.tsx";
import Reviews from "../Reviews/reviews.tsx";
import ButtonUI from "../../components/button/button.tsx";
import {Modal} from "antd";
import {useState} from "react";
import ModalContent from "../../components/modalContent/modalContent.tsx";
import {Button} from "antd";

const Detail = () => {
    const navigate = useNavigate();

    const handlePrevPage = () => {
        navigate(-1);
    }
    const users: IReview[] = [{username: 'Erlan', img: '', comment: 'Рандомный комент азазазза'}]

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const handleShowModal = () => {
        setOpen(true);
    }
    const handleOK = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false)
        }, 2000)
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
                title={<p>Info</p>}
                visible={open}
                onOk={handleOK}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                centered
                footer={[
                    <Button key="submit" type="primary" loading={confirmLoading} onClick={handleOK} disabled={true}
                            style={{width: '100%', height: '4.4rem', backgroundColor: '#6A62B7', borderRadius: '2rem', color:'white'}} className={styles.buttonModal}>
                        OK
                    </Button>,
                ]}
                closeIcon={<CloseOutlined/>} // Add the close button icon
            >
                <ModalContent/>
            </Modal>


            <ButtonUI text={'Book now'} onClick={handleShowModal}/>

            {/*Modal*/}

        </div>
    )
}

export default Detail;
