import Button from "../Button";
import Timepiece from "./Timepiece";
import style from './Timer.module.scss';

export default function Timer() {
    return(
        <div className={style.timer}>
            <p className={style.title}>Choose a task and start the timer!</p>        
            <div className={style.timepieceWrapper}>
                <Timepiece />
            </div>
            <Button>
                Start
            </Button>
        </div>
    )
}