import { useState } from "react";
import "./Login.css";
import {Link} from "react-router-dom";

function Login (){
    const users = [{name: "user1", password:"123456"}];
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const onChangeName = (event) => {
        if(event.target.value){ //evita enviar valores vacios
            setName(event.target.value);
        }   
    }

    const onChangePassword = (event) => {
        if(event.target.value){
            setPassword(event.target.value);
        }
    }

    const onSubmitLogin = (event) => {
        event.preventDefault();
        console.log(name, password);
        if(name !== "" && password !== ""){
            users.forEach(user => {
                if(user.name === name && user.password === password){
                    //redirige a la app
                    alert("Usuario correcto")
                }
                else{
                    //redirige a la app con los botones disabled 
                    alert("No estas regristrado")
                }
            });
        }
        else{
            alert("Introduce un nombre y constraseña valido")
        }
        setName("");
        setPassword("");
    }

    return(
        <div className="todo-login">
            <h1 className="welcome">Welcome to To Do list App</h1>
            <form onSubmit={onSubmitLogin}>
                <input value= {name} onChange = {onChangeName} placeholder="User name"/>
            </form>
            <form onSubmit={onSubmitLogin}>
                <input value = {password} onChange = {onChangePassword} placeholder="Password" />
            </form>
            <button onClick={onSubmitLogin}>Log
            <Link to = "/TodoList">in</Link>
            </button>
            

        </div>
    );

}

export default Login;
