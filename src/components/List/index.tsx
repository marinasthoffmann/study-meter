import style from './List.module.scss';
import Item from "./Item";
import ITask from '../../types/taks';

function List({ tasks }: {tasks: ITask[]}) {

    return (
        <aside className={style.tasksList}>
            <h2>Today Learning Tasks</h2>
            <ul>
                {tasks.map((item, index) => (
                    <Item 
                        key={index}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;