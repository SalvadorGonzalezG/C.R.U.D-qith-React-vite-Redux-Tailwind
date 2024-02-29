import { useSelector, useDispatch } from 'react-redux'
import {deleteTask} from '../features/task/taskSlice'
import {Link} from 'react-router-dom' // Link para ocupar la redureccion de nuestro task list a taskform sin que la pagina tenga un refresh.

const TasksList = () => {
// Disparar un evento.
const dispatch = useDispatch()

const stateTasks = useSelector(state => state.tasks)

const handleDelete = (id) => {
  dispatch(deleteTask(id))
}

  // del arreglo de tareas vamos a hacer un map y por cada tarea que estes recorriendo vamos a retornar un div
  return (
    
    <div className='taskslist'>
      <header>
      <h1>Task 10</h1>
      <Link to= '/list'>create task</Link>

    </header>
      {stateTasks.map(task => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button className='delete' onClick={() => handleDelete(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default TasksList