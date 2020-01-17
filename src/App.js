import React from 'react';
import './App.css';
import MenuBar from './components/Menu'
import ToDoList from './components/ToDoList';


function App() {
  return (
    <div>
      <MenuBar />
      <ToDoList/>
    </div>
  );
}

export default App;
