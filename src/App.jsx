import TasksForm from './components/TasksForm'
import TasksList from './components/TasksList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// useDispatch: Permite desencadenar acciones devuelve una funcion dispacth la cual es la que se ocupara para desencadenar dichas acciones.
// useSelector: Permite leer datos del estado, toma una funcion como argumento que devuelve la parte del estado que se desea

function App() {

  return (
    <>
      <div>
        <Router>
        <Routes>
           <Route path='/' element={<TasksList />} />
           <Route path='/list' element={<TasksForm />} />
           <Route path='/edit-task/:id' element={<TasksForm />} />
        </Routes>
        </Router> 
    </div >
    </>
  )
}

export default App
