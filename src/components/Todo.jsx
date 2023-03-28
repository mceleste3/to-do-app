import { useState } from "react";
import "./Todo.css";

function Todo(props){
    // ModeEdit como atributo de todo const [modeEdit, setModeEdit] = useState(false);
    const [text, setText] = useState("");

    const onChangeEditText = (event) =>{
        setText(event.target.value)
    }

    const onSubmitEdit = (event) =>{
        event.preventDefault();
        props.onSubmitEdit(text);
        setText("");
        //cambiar el texto 
        //cambiar a false la propiedad edit
    }

    //si se pulsa el boton cambia el estado

    const onCheckboxChange = (event) => {
        console.log(`valor de ${props.onChange}`)
        //Esta función llama al TodoList
        if(props.onChange){  //solo actua si check tiene valor sino no
            props.onChange(event.target.checked)
        }
    };

    const onIncomplete = () =>{
        console.log(`valor de ${props.onIncomplete}`)
        if(props.onIncomplete){
            props.onIncomplete();
        }
    }
    const onEditTrue = () => {
        if(props.onEditTrue){
            props.onEditTrue();
        }
    }
    const onProgress = () =>{
        if(props.onIncomplete){
            props.onProgress();
        }

    }
    const onComplete = () =>{
        if(props.onIncomplete){
            props.onComplete();
        }

    }

    return( 
        <div className="todo" id={props.state}>
            {props.edit ? 
                (<div className="todo-edit-true">
                    <form onSubmit={onSubmitEdit}>
                        <input value={text} placeholder={props.description} onChange={onChangeEditText}/><button>Save</button>
                    </form>
                </div>) : 
                (<div className="todo-edit-false">
                    <input type="checkbox" checked = {props.checked} onChange={onCheckboxChange}/>
                    <span className={props.checked ? "completo" : ""}> {props.description}</span>
                    <div className="edit" onClick={onEditTrue}>&#128397;</div>
                </div>)
            }
            <div className="buttons">
                <button className="button-incomplete" onClick={onIncomplete}>Incomplete</button>
                <button className="button-inprogress" onClick={onProgress}>In progress</button>
                <button className="button-complete" onClick={onComplete}>Complete</button>
            </div>
        </div>
            
    );
}

export default Todo;