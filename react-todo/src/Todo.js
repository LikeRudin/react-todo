import React from "react";
import styles from "./Todo.module.css";

const Todo = () => {
    const [todoList, setTodoList] = React.useState([]);

    const handleSubmit = (event) => {
        console.log(event);
        event.preventDefault();
        if (event.target[0].value !== undefined & event.target[0].value !== "")
        {
            setTodoList( list=> [...list, event.target[0].value])
        }
        event.target[0].value="";
    };
    

    return(
        <div className={styles.Todo}>
            <ul id="todoList">
            {todoList.length > 0 && todoList.map((item, index) => (<li key={index}>{item}</li> ))}

            </ul>
            <form onSubmit={handleSubmit}>
                <input placeholder="what is your todo today?"/>
            </form>
        </div>
    );
    }

export default Todo;