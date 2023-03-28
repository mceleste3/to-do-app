import { useState } from "react";
import Todo from "./Todo.jsx";
import "./TodoList.css";

function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [copiaList, setCopiaList] = useState([]);

  const [text, setText] = useState("");
  const [search, setSearch] = useState("");


  const onSubmit = (event) => {
    //Añadir una nueva tarea
    event.preventDefault();
    if (text) {
      //evitar agregar elementos vacíos a la lista
      setTodoList([
        ...todoList,
        { description: text, checked: false, state: "Incompleto", edit: false },
      ]); //copia la lista y añade el nuevo elemento
      setCopiaList([...todoList]);
      setText(""); //no acumular el valor del input, lo "reinicia" para evitar que tengamos que borrar el texto una vez este agregado
    }
  };

  const onChangeText = (event) => {
    //actualizar el valor del input
    setText(event.target.value);
  };

  const onChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const onSubmitSearch = (event) => {
    event.preventDefault();
    const searchList = [];
    todoList.forEach((todo) => {
      if (todo.description.includes(search)) {
        searchList.push(todo);
        console.log(typeof todo, todo);
      } //shift+al+ a ccomentar
    });
    if (searchList.length !== 0) {
      //si encuentra alguna coincidencia hace que aparezca la lista
      setTodoList(searchList);
      
    }
    setSearch("");
  };

  const onEditText = (index, value) => {
    setTodoList(
      todoList.map((todo, i) => {
        if (i === index) {
          return {
            description: value,
            checked: todo.checked,
            state: todo.state,
            edit: false,
          };
        } else {
          return todo;
        }
      })
    );
  };

  const onTodoClicked = (index, checked) => {
    //Actualiza el valor de la array, cuyo atributo cambia con el check
    setTodoList(
      todoList.map((todo, i) => {
        if (i === index) {
          return {
            description: todo.description,
            checked: checked,
            edit: todo.edit,
            state: checked ? "Completo" : "Incompleto",
          };
        } else {
          return todo;
        }
      })
    );
  };
  const removeCheckedItems = () => {
    setTodoList(todoList.filter((todo) => !todo.checked));
  };

  const listClick = () => {
    console.log(` Lista copiada: ${copiaList}`); //no copia bien
    if(copiaList.length !== 0){

      setTodoList(...copiaList);
    }
    
  };

  const onEdit = (index) => {
    setTodoList(
      todoList.map((todo, i) => {
        if (i === index) {
          return {
            description: todo.description,
            checked: todo.checked,
            state: todo.state,
            edit: true,
          };
        } else {
          return todo;
        }
      })
    );
    setCopiaList([...todoList]);
  };

  const onClickIncomplete = (index) => {
    setTodoList(
      todoList.map((todo, i) => {
        if (i === index) {
          return {
            description: todo.description,
            checked: false,
            state: "Incompleto",
            edit: todo.edit,
          };
        } else {
          return todo;
        }
      })
    );
    setCopiaList([...todoList]);
  };

  const onClickProgress = (index) => {
    setTodoList(
      todoList.map((todo, i) => {
        if (i === index) {
          return {
            description: todo.description,
            checked: false,
            state: "Progreso",
            edit: todo.edit,
          };
        } else {
          return todo;
        }
      })
    );
    setCopiaList([...todoList]);
  };
  const onClickComplete = (index) => {
    setTodoList(
      todoList.map((todo, i) => {
        if (i === index) {
          return {
            description: todo.description,
            checked: true,
            state: "Completo",
            edit: todo.edit,
          };
        } else {
          return todo;
        }
      })
    );
    setCopiaList([...todoList]);
  };

  return (
    <div className="todo-list-container">
      <form onSubmit={onSubmit}>
        <input
          value={text}
          placeholder="Type a new task"
          onChange={onChangeText}
        />
        <button>Save</button>
      </form>
      <form onSubmit={onSubmitSearch}>
        <input
          value={search}
          placeholder="Search a task"
          onChange={onChangeSearch}
        />
        <button>Search</button>
      </form>

      <div className="todo-list">
        {todoList.map((todo, index) => (
          //iteración de cada item de TodoList al cual se le aplica la función <Todo>
          <Todo
            key={todo.index}
            state={todo.state}
            description={todo.description}
            checked={todo.checked}
            edit={todo.edit}
            onChange={(checked) => onTodoClicked(index, checked)}
            onSubmitEdit={(value) => {
              onEditText(index, value);
            }}
            onEditTrue={() => {
              onEdit(index);
            }}
            onIncomplete={() => {
              onClickIncomplete(index);
            }}
            onProgress={() => {
              onClickProgress(index);
            }}
            onComplete={() => {
              onClickComplete(index);
            }}
          />
        ))}
      </div>
      <button className="buttons-options" onClick={removeCheckedItems}>
        Delete
      </button>
      <button className="buttons-options" onClick={listClick}>List</button>
      {/* Funcion no habilitada todavía */}
    </div>
  );
}
export default TodoList;
