import React from "react";
import style from './Button.module.scss';

interface Props {
    type?: "button" | "submit" | "reset" | undefined
    onClick?: () => void,
    children?: React.ReactNode
}

function Button({ onClick, type, children }: Props) {
    return (
        <button type={type} onClick={onClick} className={style.button}>
            {children}
        </button>
    )
}

export default Button;