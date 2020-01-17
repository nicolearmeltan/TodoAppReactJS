import React, { useState } from "react";
import clsx from "clsx";
import AddToList from "./AddToList";
import SummaryList from "./SummaryList";
import useStyles from "../styles/styles";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const ToDoList = () => {
  const styles = useStyles();
  const [checked, setChecked] = useState([]);
  const [todos, setTodos] = useState([]);
  const [newText, setNewText] = useState("");
  const [editText, setEditText] = useState("");
  const [snackBar, setSnackBar] = useState({open: false, message: "", severity: "error"});
  const handleToggle = (value, index) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    console.log(value, index);
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const addToDo = () => {
      if(newText.trim() !== "" && !checkDuplicateTodo(newText)){
        setTodos(oldTodos => [...todos, { text: newText, editMode: false }]);
        setNewText("");
        setSnackBar({open: true,message:operationMessages("add", newText), severity: "success"});
      } else {
        setSnackBar({open: true,message:operationMessages("addfail", newText), severity: "error"});
      }
  };

  const checkDuplicateTodo = (todo) => {
    let duplicate = false;  
    for (let index = 0; index < todos.length; index++) {
          if(todos[index].text === todo) {
            duplicate =true;
          }
      }
    return duplicate;
  }

  const removeTodo = () => {
      console.log(checked);
    setTodos(todos.filter(item => !checked.includes(item.text)));
    setSnackBar({open: true,message:operationMessages("delete", checked.toString()), severity: "success"});
    setChecked([]);
};

  const editToggle = (todo, todoIndex) => {
      console.log(todo, todoIndex)
    setTodos(
      todos.map((item, index) => {
        if (index === todoIndex) {
          return { ...item, text: todo.text, editMode: !todo.editMode };
        } else {
          return { ...item, editMode: false };
        }
      })
    );
    if(todo && todo.text){
        setEditText(todo.text);
    }
  };

  const editToDo = (todo, todoIndex) => {
    setTodos(
        todos.map((item, index) => {
          if (index === todoIndex) {
            return { ...item, text: editText, editMode: false};
          } else {
            return {...item};
          }
        })
      );
    setSnackBar({open: true,message:operationMessages("edit", editText), severity: "info"});
  };

  const closeSnackBar = () => {
      setSnackBar(false);
  }

  const operationMessages = (operation, text) => {
      switch(operation) {
          case "add": 
              return `Successfully added ${text} to list.`;
          case "edit":
              return `Successfully edited to ${text}.`;
          case "delete":
              return `Succesffully deleted ${text}`;
          case "addfail":
              return 'Please check the input and avoid duplicates';
          default:
              return 'Process Failed';
      }
  }

  const SnackBarAlert = (props) => {
      return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  return (
    <div className={clsx(styles.flex, styles.magint10)}>
      <AddToList
        clickHandler={[addToDo, removeTodo, editToggle]}
        newText={newText}
        setNewText={setNewText}
        todosCount={todos.length}
        checked={checked}
      />
      {todos.length > 0 ? (
        <SummaryList
          checked={checked}
          toggleCheck={handleToggle}
          todos={todos}
          editMode={todos.map(item => item.editMode)}
          setEditMode={editToggle}
          editText={editText}
          setEditText={(event) =>setEditText(event.target.value)}
          editSubmit={editToDo}
        />
      ) : (
        <div className={clsx(styles.flex, styles.width100)}>
          <p> No Items yet try Adding to the List :)</p>
        </div>
      )}
      <Snackbar
        anchorOrigin={{vertical: 'top', horizontal: 'center'}}
        open={snackBar.open}
        onClose={closeSnackBar}
        autoHideDuration={3000}
      >
          <SnackBarAlert onClose={closeSnackBar} severity={snackBar.severity}>
              {snackBar.message}
              </SnackBarAlert>
        </Snackbar>
    </div>
  );
};

export default ToDoList;
