import { useState } from "react"
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';


function App() {
  const name = 'Tyler'

  const [tasks, setTasks] = useState([
    {id: 1, text: "yo"}, {id: 2, text: "ok"}, {id: 3, text:"yeah"}

  ])


  return (
    <div className="App">
      <Header name={name} title={'Hey'} />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
