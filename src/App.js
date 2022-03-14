import React, { useState } from 'react'
import Filter from './Components/Filter/Filter'
import Form from './Components/Form/Form'
import List from './Components/List/List'
import { usePosts } from './Hooks/usePosts'
import './Style/App.css'

const App = () => {
  let [posts, setPosts] = useState([
    { id: 1, title: 'JS', body: 'Programming language' },
    { id: 2, title: 'Python', body: 'Programming language' },
    { id: 3, title: 'Kotlin', body: 'Programming language' },
    { id: 4, title: 'Ruby', body: 'Programming language' },
    { id: 5, title: 'C', body: 'Programming language' },
    { id: 6, title: 'Java', body: 'Programming language' },
  ])
  let [filter, setFilter] = useState({ query: '', sort: '' })
  let searchedAndSelectedPosts = usePosts(posts, filter.sort, filter.query)

  const addNewPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }
  return (
    <div className="App">
      <Form addPost_Func={addNewPost} />

      <Filter filter={filter} setFilter={setFilter} />

      <List posts={searchedAndSelectedPosts} removePost={removePost} />
    </div>
  )
}

export default App
