import { useSelector, useDispatch } from 'react-redux'
import { deleteTask } from '../features/task/taskSlice'
import { Link } from 'react-router-dom' // Link para ocupar la redureccion de nuestro task list a taskform sin que la pagina tenga un refresh.

const TasksList = () => {
  // Disparar un evento.
  const dispatch = useDispatch()

  const stateTasks = useSelector(state => state.tasks)

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }

  // del arreglo de tareas vamos a hacer un map y por cada tarea que estes recorriendo vamos a retornar un div
  return (

    <div className='w-4/6'>
      <header className='flex justify-between items-center py-4'>
        <h1>Task {stateTasks.length}</h1>
        <Link to='/list' className='bg-indigo-600 px-2 py-1 rounded-sm text-sm'>create task</Link>
      </header>

      <div className='grid grid-cols-3 gap-3'>
        {stateTasks.map(task => (
          <div key={task.id} className='bg-neutral-800 p-4 rounded-md'>
            <header className='flex justify-between'>
              <h3>{task.title}</h3>
              <div className='flex gap-x-2'>
              <Link to={`/edit-task/${task.id}`}
                className='bg-zinc-600 px-2 py-1 text-xs rounded-md' 
              >Edit</Link>
              <button className='bg-red-500 px-2 py-y rounded-md self-center' onClick={() => handleDelete(task.id)}>Delete</button>
              </div>
            </header>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TasksList