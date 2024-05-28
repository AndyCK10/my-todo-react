import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header";
import Image from "./components/Image";
import Checkbox from "./components/Checkbox";
import { IconA, IconB } from './components/Icon';
import VideoPlayer from './components/Video'

const BASE_URL = 'https://664829ba2bb946cf2f9fc3f1.mockapi.io'

function App() {
  const [count, setCount] = useState(0)

  const totoList = [
    {
      text: 'coding react',
      isChecked: false
    },
    {
      text: 'dogin document react',
      isChecked: true
    },
    {
      text: 'test react',
      isChecked: false
    }
  ]

  const [counter, setCounter] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [todos, setTodos] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  async function fetchTodo() {
    try {
      const respones = await axios.get(`${BASE_URL}/user`)
      setTodos(respones.data)
      setIsLoading(false)
    } catch (error) {
      console.log('Error', error);
    }
  }

  async function deleteTodo(id) {
    try {
      setIsLoading(true)
      await axios.delete(`${BASE_URL}/user/${id}`)
      await fetchTodo()
      setIsLoading(false)
    } catch (error) {
      console.log('Error', error);
    }
  }

  useEffect(() => {
    fetchTodo()
  }, []);

  function buttonClick() {
    setCounter(counter + 1)
  }

  function triggerPlayer() {
    setIsPlaying(!isPlaying)
  }

  return (
    <>
      {/* <Header />
      <Image imageUrl="https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI" />
      <IconA />
      <IconB />
      <div>
        Hello Andy
      </div>
      <div>
        Now counter is {counter}
        <button onClick={buttonClick}>Add counter</button>
        <Checkbox text='coding react' isChecked={false} />
        {
          totoList.map((todo, key)=>
            <Checkbox 
              key={key}
              text={todo.text} 
              isChecked={todo.isChecked} 
            />
          )
        }
      </div>

      <div>
        <VideoPlayer 
          isPlaying={isPlaying}
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm" 
        />
        <button onClick={triggerPlayer}>{ isPlaying ? 'Pause' : 'Play' }</button>

      </div> */}

      {
        isLoading && (<div>Loading...</div>)
      }
      { !isLoading &&
        <div>
          { 
            todos.map((todo, index) => (
              <div key={index}>
                { todo.id } { todo.name } { todo.status }
                <Link to={`todo/${todo.id}`}>
                <button>Edit</button>
                </Link>
                <button 
                  onClick={async () => {
                    await deleteTodo(todo.id)
                  }}
                  >Delete</button>
              </div>
            ))
          }
        </div>
      }
      
      
    </>
  )
}

export default App
