import {useSelector} from 'react-redux'

const TasksForm = () => {
    console.log('taskForm')

    const tasksForm = useSelector(state => state.tasks)
    console.log(tasksForm)

  return (
    <div>TasksForm</div>
  )
}

export default TasksForm