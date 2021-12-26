import { remult } from "./common";
import { Task } from '@xyz/shared';
import { useCallback, useEffect, useState } from "react";

const taskRepo = remult.repo(Task);

function App() {
  const [title, setTitle] = useState('');
  const [tasks, setTasks] = useState([] as Task[]);

  const loadTasks = useCallback(async () => {
    const tasks = await taskRepo.find();
    setTasks(tasks);
  }, []);
  useEffect(() => { loadTasks() }, [loadTasks]);

  const createTask = async () => {
    try {
      await taskRepo.save({ title });
      setTitle('');
      loadTasks();

    } catch (err: any) {
      console.log(err);
    }
  }
  return (
    <div>
      <input value={title}
        onChange={(e) =>
          setTitle(e.target.value)}
      />
      <button onClick={createTask}>Create Task</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title}
          </li>))}
      </ul>
    </div>
  )
}

export default App;
