import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";
import ITask from "../../types/taks";
import Button from "../Button";
import Timepiece from "./Timepiece";
import style from './Timer.module.scss';

interface Props {
    selected: ITask | undefined
}

export default function Timer({ selected } : Props) {
    
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if (selected?.time){
            setTime(timeToSeconds(selected.time));
        }        
    }, [selected]);

    function countdown(count: number = 0) {
        setTimeout(() => {
            if(count > 0) {
                setTime(count - 1);
                return countdown(count - 1);
            }
        }, 1000)
    }

    return(
        <div className={style.timer}>
            <p className={style.title}>Choose a task and start the timer!</p>        
            <div className={style.timepieceWrapper}>
                <Timepiece time={time}/>
            </div>
            <Button onClick={() => countdown(time)}>
                Start
            </Button>
        </div>
    )
}