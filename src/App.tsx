import { useEffect, useState } from "react";
import axios from "axios";

interface todoItems {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

function App() {
  const [todos, setTodos] = useState<todoItems[]>([]);

  useEffect(() => {
    axios
      .get<todoItems[]>("https://jsonplaceholder.typicode.com/todos")
      .then((response) => setTodos(response.data));
  }, []);

  return (
    <div className="App">
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </div>
  );
}

export default App;
