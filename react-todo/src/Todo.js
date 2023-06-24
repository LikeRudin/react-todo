import React from "react";


const Todo = () => {
    const [todoList, setTodoList] = React.useState([]);

    const handleSubmit = (event) => {
        console.log(event);
        event.preventDefault();
        if (event.target[0].value !== undefined & event.target[0].value !== "")
        {
            setTodoList( list=> [...list, event.target[0].value])
        }
    };
    

    return(
        <div>
            <ul id="todoList">
            {todoList.length > 0 && todoList.map((item, index) => (<li key={index}>{item}</li> ))}

            </ul>
            <form onSubmit={handleSubmit}>
                <input placeholder="what is your todo today?"/>
                <button type="submit">submit</button>
            </form>
        </div>
    );
    }

export default Todo;