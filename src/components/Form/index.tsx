import React from "react";
import Button from "../Button";
import './style.scss';

class Form extends React.Component {
    render() {
        return (
            <form className="newTask">
                <div className="inputContainer">
                    <label htmlFor="task">
                        Add a new learning task
                    </label>
                    <input 
                        type="text"
                        name="task"
                        id="task"
                        placeholder="What would you like to learn?"
                        required
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="time">
                        Time
                    </label>
                    <input 
                        type="time"
                        step="1"
                        name="time"
                        id="time"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <Button />
            </form>
        );        
    };
}

export default Form;