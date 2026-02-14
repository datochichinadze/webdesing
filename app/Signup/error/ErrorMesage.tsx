import { ReactNode } from "react";
import styles from './Error.module.css';

interface Props {
    children: ReactNode
}

export function ErrorMessage(props: Props) {
    return <span className={styles.errorStyleMessage}>{props.children}</span>
}