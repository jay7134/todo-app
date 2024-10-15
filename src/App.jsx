import { useState } from 'react';
import './App.css';
const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //add todo
  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    const newTodo = {
      text: input.trim(),
      isComplete: false,
    };
    setTodos([...todos, newTodo]);
    setInput('');
  };
  //mark todo complete
  const toggleComplete = (index) => {
    const updatedTodos = todos.map((todo, idx) =>
      idx === index ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodos);
  };

  const toggleRemove = (index) => {
    setTodos(todos.filter((_, idx) => idx !== index));
  };

  return (
    <>
      <h1>Todo APP</h1>
      <form className="todoForm" onSubmit={addTodo}>
        <input
          placeholder="Input Todo"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      <h4>Todos List:</h4>

      <ul className="todos-list">
        {todos &&
          todos.map((todo, index) => {
            return (
              <li
                key={index}
                className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}
              >
                <span className="todo-text">{todo.text}</span>
                <span className="item-controls">
                  <span
                    onClick={() => toggleComplete(index)}
                    className={`mark-complete ${
                      todo.isCompleted ? 'done' : ''
                    }`}
                  ></span>
                  <span onClick={() => toggleRemove(index)} className="remove">
                    X
                  </span>
                </span>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default App;

