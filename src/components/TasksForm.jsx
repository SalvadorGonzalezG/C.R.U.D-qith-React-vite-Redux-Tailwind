import { useState } from "react"

const TasksForm = () => {
  // vamos a utilizar el estado el cual sera inicializado con un titulo vacio y una descripcion vacia.
  const [ task, setTask ] = useState({
    title: '',
    description: ''
  })
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
// mostrar en la consola la tarea actual que tengio en el estado
    console.log(task)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input name="title" type="text" placeholder="title" onChange={handleChange}/>
      <textarea name="description" placeholder="description" onChange={handleChange}></textarea>
      <button > Guardar. </button>
    </form>
  )
}

export default TasksForm