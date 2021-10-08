import { useState } from "react"
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import { Navbar } from './components/Navbar'


function App() {
  const name = 'Tyler'

  const [tasks, setTasks] = useState([
    {id: 1, text: "yo"}, {id: 2, text: "ok"}, {id: 3, text:"yeah"}

  ])


  return (
    <div className="App">
      <Navbar />
      <Header name={name} title={'Hey'} />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
