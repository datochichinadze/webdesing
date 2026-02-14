import { ReactNode } from "react";

interface Props {
    children: ReactNode
}

export function ErrorMessage(props: Props) {
    return <span style={{color: 'red'}}>{props.children}</span>
}