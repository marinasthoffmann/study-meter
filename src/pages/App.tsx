import React, {useState} from 'react';
import Form from '../components/Form';
import List from '../components/List';
import style from './App.module.scss';
import Timer from '../components/Timer';
import ITask from '../types/taks';

function App() {

  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [selected, setSelected] = useState<ITask>();
  
  function selectTask(selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks(oldTasks => oldTasks.map(task =>({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })))
  }

  function finishTask() {
    if (selected) {
      setSelected(undefined);
      setTasks(oldTasks => oldTasks.map(task => {
        if (task.id === selected.id) {
          return {
            ...task,
            selected: false,
            done: true
          }
        }
        return task;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List 
        tasks={tasks}
        selectTask={selectTask}  
      />
      <Timer 
        selected={selected}
        finishTask={finishTask}
      />
    </div>
  );
}

export default App;
