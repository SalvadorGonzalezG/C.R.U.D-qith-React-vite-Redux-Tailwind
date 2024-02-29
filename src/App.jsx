import {useSelector} from 'react-redux'
import TasksForm from './components/TasksForm'
import TasksList from './components/TasksList'

// useDispatch:
// useSelector: Permite leer datos del estado, toma una funcion como argumento que devuelve la parte del estado que se desea
function App() {

const tasksState = useSelector(state=> state.tasks)
  console.log(tasksState)  
  return (
    <>
      <div>
        <h1>Wlcome Neoker</h1>
        <TasksForm/>
        <TasksList/>
      </div>
    </>
  )
}

export default App
