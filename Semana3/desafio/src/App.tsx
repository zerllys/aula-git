import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { Usuario } from './types/usuario'
import { Post } from './types/post'

function App() {

  const [usuario, setUsuario] = useState<Usuario[]>()
  const [post, setPost] = useState<Post[]>()
  const [id, setId] = useState<String>("")

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/`)
      .then(resposta => setUsuario(resposta.data))
  }, [])

  const getPosts = (id: number) => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then(resposta => setPost(resposta.data))
  }

  return (
    <div className="App" >
      <div className="lista-de-usuarios">{usuario?.map(item => (
        <li onClick={(event) => getPosts(item.id)} key={item.id}>{item.id}, {item.name}</li>
      ))}
      </div>
      <div className="lista-de-post">{post?.map(item => (
        <li key={item.userId}>
          <p>Id:{item.userId}</p>
          <p>Título:{item.title}</p>
          <p>Post:{item.body}</p>
          </li>
      ))}
      </div>
    </div>
  );
}

export default App;
