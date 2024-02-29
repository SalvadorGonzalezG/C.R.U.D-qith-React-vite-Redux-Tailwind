import { useSelector } from 'react-redux'

const TasksList = () => {

const stateTasks = useSelector(state => state.tasks)
  console.log(stateTasks)
  // del arreglo de tareas vamos a hacer un map y por cada tarea que estes recorriendo vamos a retornar un div
  return (
    <div className='taskslist'>
      {stateTasks.map(task => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  )
}

export default TasksList