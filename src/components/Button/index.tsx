import React from "react";
import style from './Button.module.scss';

class Button extends React.Component <any, {
    type?: "button" | "submit" | "reset" | undefined
    onClick?: () => void
}>{
    render() {
        const { type = "button", onClick } = this.props;

        return (
            <button type={type} onClick={onClick} className={style.button}>
                {this.props.children}
            </button>
        )
            
    }
}

export default Button;