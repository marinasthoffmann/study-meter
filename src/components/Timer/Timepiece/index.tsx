import style from './Timepiece.module.scss';

export default function Timepiece() {
    return (
        <>
            <span className={style.timepieceNumber}>0</span>
            <span className={style.timepieceNumber}>0</span>
            <span className={style.timepieceSplit}>:</span>
            <span className={style.timepieceNumber}>0</span>
            <span className={style.timepieceNumber}>0</span>
        </>
    )
}