import './App.css';
import Login from './components/Login';
import TodoList from './components/TodoList';
import {BrowserRouter, Routes, Route} from "react-router-dom";

//Todo, Login
function App() {
  return (
/*  <div className="App">
      <h1>To Do List &#128220; </h1>
      <TodoList/>
  </div> */
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/TodoList' element={<TodoList/>}/>
    </Routes>
    </BrowserRouter> 
    
  );
}

export default App;
