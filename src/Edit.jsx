import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BASE_URL = "https://662371883e17a3ac846f42b6.mockapi.io";

function Edit() {
  const { id } = useParams();
  const [todo, setTodo] = useState({
    name: ''
  });

  async function fetchTodo(todoId) {
    try {
      const respones = await axios.get(`${BASE_URL}/user/${todoId}`);
      setTodo(respones.data);
    //   setIsLoading(false);
    } catch (error) {
      console.log("Error", error);
    }
  }

  useEffect(() => {
    fetchTodo(id);
  }, [id]);

  function handleNameChange(event) {
    setTodo((previousState) => ({
        ...previousState,
        name: event.target.value
    }))
  }

  return (
    <>
      <div>Hello edit page {todo.name}</div>
      <input onChange={handleNameChange()} type="text" value={todo.name}></input>
    </>
  );
}

export default Edit;
