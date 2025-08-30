import { useEffect, useState } from 'react'
import './App.css'
import ToDo from './ToDo'
import { addtodoAPI, getAlltodoAPI } from './service/allApi'

function App() {
  const [newTodo, setNewTodo] = useState({ task: "" })   // input box
  const [todos, setTodos] = useState([])                 // fetched todo list

  const handleAdd = async () => {
    if (newTodo.task.trim().length > 0) {
      try {
        await addtodoAPI(newTodo)             // call API to add
        setNewTodo({ task: "" })              // clear input
        handleGet()                           // refresh list
      } catch (error) {
        console.log(error)
      }
    } else {
      alert("Type something...")
    }
  }

 const handleGet = async () => {
    try {
      const response = await getAlltodoAPI()
      if (response?.data) {
        setTodos(response.data)
        console.log(response.data);
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleGet()
  }, [])

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 p-3 p-md-0" style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/030/659/186/large_2x/minimalistic-desktop-background-high-quality-free-photo.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="bg-white bg-opacity-50 shadow-lg rounded p-4 p-md-5" style={{ width: "500px", height: "700px" }}>
        <h2 className="text-center fw-bold pt-4 pt-md-0">My To-Do List</h2>
        <p className="text-center fs-6 fw-bold">Small steps every day lead to big achievements.</p>

        <div className="d-flex gap-3">
          <input
            value={newTodo.task}
            onChange={(e) => setNewTodo({ task: e.target.value })}
            className="w-100 mt-2 rounded border-0 py-2 px-3 fw-bold"
            type="text"
            placeholder="Enter a task or activity"
            style={{ outline: "none" }} />
          <button
            onClick={handleAdd}
            className="mt-2 rounded border-0 px-3 fw-bold"
            style={{ backgroundColor: "rgba(113,152,185,255)" }}>Add</button>
        </div>

        <div className="pt-3">
          {todos.length > 0 ? (
            todos.map((item, index) => (
              <ToDo key={index} todo={item} handleGet={handleGet}/>
            ))
          ) : (
            <p className="text-center text-muted fw-semibold pt-3">No tasks yet. Add one!</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
