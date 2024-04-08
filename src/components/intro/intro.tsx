import styles from './intro.module.css'
import imageIntro from './../../assets/image/Illustration.svg';
import {ArrowRightOutlined} from "@ant-design/icons";

const Intro = () => {
    return (
        <header className={styles.header}>
            <div className={'container'}>
                <div className={styles.header__body}>
                    <div className={styles.content}>
                        <div className={styles.text}>
                            <h1 className={styles.title}>Winter Vacation Trips</h1>
                            <p className={styles.paragraph}>Enjoy your winter vacations with warmth
                                and amazing sightseeing on the mountains.
                                Enjoy the best experience with us!
                            </p>
                        </div>
                        <img className={styles.image} src={imageIntro} alt={'into Person image'}/>
                    </div>
                    <div className={styles.button}>Let’s Go!<ArrowRightOutlined /></div>
                </div>
            </div>
        </header>
    )
}

export default Intro