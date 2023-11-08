import React, { useState } from "react";
import "./App.css"

function App(){

    let [todoInput ,updateTodoInput] = useState()


    let [todoList, updateTodos] = useState(
        [
            {
                id:1,
                task :"Learn HTML"
            },
            {
                id:2,
                task:"Learn CSS"
            }
        ]
    )

    let nextId = 3;

    function createTodo(){
        if(todoInput === ""){
            alert("Add Some Task")
        }
        else{
           let  newTodos = [
                ...todoList,
                {
                    id :nextId++,
                    task: todoInput
                }
            ]
            updateTodos(newTodos);
            updateTodoInput("")
        }

    }

    function deleteTodo(id){
       let updatedTodo =  todoList.filter(
            (todo)=>{
                return todo.id !== id;
            }
        )
        updateTodos(updatedTodo)
    }

    return(
        <>
            <div className="container mt-5 w-50">
                <h3>Todo List Using React 😎 </h3>
                <div className="input-group">
                    <input type="text" className="form-control" onChange={(e)=>{
                            let task = e.target.value;
                            updateTodoInput(task)
                    }} value={todoInput} placeholder="Enter Some Task....?"/>
                    <button className="btn btn-primary" onClick={()=>{
                            createTodo()
                        }
                    }>Add Todo</button>
                </div>
                <ul className="list-group mt-4">
                    {
                        todoList.map(
                            (todo)=>{
                                return (
                                    <li className="list-group-item mb-2">
                                        <p>{todo.task}</p>
                                        <button className="btn" onClick={ ()=>{
                                            deleteTodo(todo.id)
                                        }}>❌</button>
                                    </li>
                                )
                            }
                        )
                    }
                </ul>
            </div>
        </>
    )
}

export default App