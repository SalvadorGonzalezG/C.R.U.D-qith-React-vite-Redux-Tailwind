import {useSelector} from 'react-redux'

const TasksList = () => {
    console.log('tasksList')
    const stateList = useSelector(state => state.tasks)
    console.log(stateList)
  return (
    <div>TasksList</div>
  )
}

export default TasksList