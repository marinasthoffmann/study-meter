import style from './Timepiece.module.scss';

interface Props {
    time: number | undefined
}

export default function Timepiece({ time = 0 }: Props) {
    
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [minutesTensDigit, minutesOnesDigit] = String(minutes).padStart(2, '0');
    const [secondsTensDigit, secondsOnesDigit] = String(seconds).padStart(2, '0');


    return (
        <>
            <span className={style.timepieceNumber}>{minutesTensDigit}</span>
            <span className={style.timepieceNumber}>{minutesOnesDigit}</span>
            <span className={style.timepieceSplit}>:</span>
            <span className={style.timepieceNumber}>{secondsTensDigit}</span>
            <span className={style.timepieceNumber}>{secondsOnesDigit}</span>
        </>
    )
}