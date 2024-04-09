import styles from './button.module.css'
interface IButton {
    text: string
}

const ButtonComponent: React.FC<IButton> = ({text}) => {
    return (
        <div className={'container'}>
            <button className={styles.button}>{text}</button>
        </div>
    )
}

export default ButtonComponent;