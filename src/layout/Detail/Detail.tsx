import BgImage from './../../assets/image/bgImage.jpg';
import styles from './detail.module.css';
import {useNavigate} from "react-router-dom";
import {ArrowLeftOutlined} from "@ant-design/icons";
import {Typography} from "antd";
import pin from './../../assets/icon/pin.svg';
import {IReview} from "../../components/review/review.tsx";
import Reviews from "../Reviews/reviews.tsx";
import Button from "../../components/button/button.tsx";

const Detail = () => {
    const navigate = useNavigate();

    const handlePrevPage = () => {
        navigate(-1);
    }
    const users: IReview[] = [{username: 'Erlan', img: '', comment: 'Рандомный комент азазазза'}]

    return (
        <header className={styles.content}>
            <div className={styles.intro} style={{backgroundImage: `url(${BgImage})`}}>
                <div className="container">
                    <button className={styles.prev} onClick={handlePrevPage}>
                        <ArrowLeftOutlined style={{color: 'white', fontFamily: 'Satoshi', fontSize: '1.8rem'}}/>
                        Back
                    </button>
                </div>
            </div>
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
            <Button text={'Book now'}/>
        </header>
    )
}

export default Detail;
