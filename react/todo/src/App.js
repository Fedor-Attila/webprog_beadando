function TodoApp() {
    const [tasks, setTasks] = React.useState([]);
    const [newTask, setNewTask] = React.useState('');
  
    const addTask = () => {
      if (newTask.trim() === '') return;
      setTasks([...tasks, newTask]);
      setNewTask('');
    };
  
    const deleteTask = (index) => {
      const updatedTasks = tasks.filter((task, i) => i !== index);
      setTasks(updatedTasks);
    };
  
    return (
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <h2>To-Do Lista</h2>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Új feladat"
        />
        <button onClick={addTask} style={{ marginLeft: '10px' }}>Hozzáadás</button>
  
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
          {tasks.map((task, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>
              {task}
              <button onClick={() => deleteTask(index)} style={{ marginLeft: '10px' }}>Törlés</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  // Globálisan elérhetővé tesszük:
  window.TodoApp = TodoApp;
  