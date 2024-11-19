import { useEffect, useState } from 'react'
import './App.css'

const intitialTasks = [
  'Learn JS',
  'Learn PHP',
  'Rest',
  'Learn Java',
  'Learn Laravel',
  'Learn React',
  'Learn Vue',

]
function App() {

  const [tasks, setTasks] = useState(intitialTasks)
  const [newTask, setNewTask] = useState('')
  const [searchText, setSearchText] = useState('')
  const [filteredTasks, setFilteredTasks] = useState([])
  useEffect(() => {

    // searchText = Rest
    // filteredTask = ['Rest']
    // tasks = filterdTasks
    // tasks = ['Rest']

    // Digito 
    // searhText = Laravel
    // 


    const filteredTasks = tasks.filter((task) => task.includes(searchText))
    console.log(filteredTasks);

    // Error
    //setTasks(filteredTasks)

    setFilteredTasks(filteredTasks)



  }, [tasks, searchText])



  function addTask(e) {
    e.preventDefault()
    //tasks.push(newTask);
    // console.log(tasks);

    // clona l'array di stato
    const newTasks = [
      newTask,
      ...tasks,
    ]
    setTasks(newTasks)

    setNewTask('')

  }


  function handleTrashTaskClick(e) {
    // select the task to remove
    console.log(e.target);


    const taskIndexToTrash = Number(e.target.getAttribute('data-index'))

    // remove the task based on its index
    console.log(tasks, taskIndexToTrash);
    const newTasks = tasks.filter((task, index) => index != taskIndexToTrash)

    console.log(newTasks);

    setTasks(newTasks)

  }

  function handleSearchForm(e) {
    e.preventDefault()
    //alert('Form sent')
  }




  return (
    <>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <h1>Todolist</h1>

          <form onSubmit={handleSearchForm}>
            <div className="mb-3">

              <input
                type="search"
                className="form-control"
                name="searchText"
                id="searchText"
                aria-describedby="searchHelper"
                placeholder=" 🔍 Search ..."
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
              />

            </div>

          </form>

        </div>


        {/* New Task form */}

        <form onSubmit={addTask}>
          <div className="mb-3">
            <label htmlFor="task" className="form-label">Task</label>

            <div className="input-group mb-3">
              <input type="text"
                className="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                value={newTask}
                onChange={e => setNewTask(e.target.value)}
              />
              <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Button</button>
            </div>

            <small id="taskHelperId" className="form-text text-muted">Type your new task</small>
          </div>

        </form>

        {/* List */}
        <ul className="list-group">

          {filteredTasks.map((task, index) =>
            <li key={index} className="list-group-item d-flex justify-content-between">
              {task}

              <button onClick={handleTrashTaskClick} data-index={index} className='btn btn-danger'>
                <i className="bi bi-trash"></i>
              </button>
            </li>)}

        </ul>

      </div>
    </>
  )
}

export default App
