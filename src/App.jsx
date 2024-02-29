import TasksForm from './components/TasksForm'
import TasksList from './components/TasksList'

// useDispatch: Permite desencadenar acciones devuelve una funcion dispacth la cual es la que se ocupara para desencadenar dichas acciones.
// useSelector: Permite leer datos del estado, toma una funcion como argumento que devuelve la parte del estado que se desea

function App() {

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
