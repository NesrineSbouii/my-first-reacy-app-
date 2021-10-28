import { useState, useEffect } from "react";
import Header from "./component/header"
import Footer from "./component/Footer"
import Clock from "./component/Clock";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";
import { item1, item2, item3 } from "./fixtures/item_fixtures";

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    setTodoList([item1, item2, item3]);
  }, []);

  const handleAddItem = (newItem) => {
    setTodoList([...todoList, newItem]);
  };

  const handleDrop = (reorderedList) => {
    setTodoList(reorderedList);
  };

  const handleDelete = (id) => {
    const newList = [...todoList];
    newList.splice(id, 1);
    setTodoList(newList);
  };


  return (
    <div className="App">
      <Header/> 
      <Clock/>
      <TodoForm onAddItem={handleAddItem}/>
      <TodoList list={todoList} onDrop={handleDrop} onDelete={handleDelete} />
      <Footer/>
    </div>
  );
}

export default App;
