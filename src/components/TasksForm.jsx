import { useState, useEffect } from "react"
import {useDispatch, useSelector} from 'react-redux'
import {addTask, editTask} from '../features/task/taskSlice'
import {v4 as uuid} from 'uuid'
import {useNavigate, useParams} from 'react-router-dom'

const TasksForm = () => {
  // vamos a utilizar el estado el cual sera inicializado con un titulo vacio y una descripcion vacia.
  const [ task, setTask ] = useState({
    title: '',
    description: ''
  })
// funcion que nos permitira disparar eventos desde el slice
  const dispatch = useDispatch()
// funcion que nos permite redirigir la pagina
  const navigate = useNavigate()
  const params = useParams()
  // todas las tareas que tengo en el estado de redux
  const tasks = useSelector(state => state.tasks)

  const handleChange = e => {
// utilizamos el modificador del estado setTask
    setTask({
//spredOperator para copiar todos los datos que tenga inicialmente, si hay algun dato que lo copie
      ...task,
// vamos a ocupar el e.target.name y colocamos como valor el e.target.value
    [e.target.name]: e.target.value,
    })
  }
  // funcion que evita que se refresque la pagina.
  const handleSubmit = (e) => {
    
    e.preventDefault()
    if(params.id){
      dispatch(editTask(task))
    } else{
// mostrar en la consola la tarea actual que tengio en el estado
    //console.log(task)
    dispatch(addTask({
      ...task, // hacemos una copia del estado actual 
      id: uuid(), // generamos a task un uuid unico
    }))
  }
// redirige a la ruta principal despues de ejecutar el dispatch
    navigate('/')
  }
useEffect(()=>{
  if(params.id) {
    setTask(tasks.find(tasks => tasks.id === params.id))
  }
},[params.id, tasks])
  
  return (
    <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4 mb-2">
      <label htmlFor="title" className="block text-xs font-bold">Task: </label>
      <input
       name="title"
       type="text"
       placeholder="title" 
       onChange={handleChange}
       value = {task.title}
       className="w-full p-2 rounded-md bg-zinc-600 mb-2"/>
       
       <label htmlFor="description" className="block text-xs font-bold mb-2">Description:</label>
      <textarea 
       name="description" 
       placeholder="description" 
       onChange={handleChange}
       value={task.description}
       className="w-full p-2 rounded-md bg-zinc-600 mb-1"
      ></textarea>
      <button className="px-2 py-1 rounded-md bg-purple-900 "> Guardar. </button>
    </form>
  )
}

export default TasksForm