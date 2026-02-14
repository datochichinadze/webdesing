import styles from './Button.module.css';
import { interfaseProps } from './interfase/interfase-props';

const Button = (props: interfaseProps) => {
    return (
        <div>
            <button className={styles.buttonStyle}>{props.title}</button>
        </div>
    )
}

export default Button