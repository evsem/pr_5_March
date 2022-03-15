import React, { useEffect, useState } from 'react'
import PostService from '../API/PostService'
import Filter from '../Components/Filter/Filter'
import Form from '../Components/Form/Form'
import List from '../Components/List/List'
import Pagination from '../Components/Pagination/Pagination'
import { useFetching } from '../Hooks/useFetching'
import { usePosts } from '../Hooks/usePosts'
import '../Style/App.css'
import LoaderGrey from '../UI/LoaderGrey/LoaderGrey'
import { getPageCount } from '../Utils/forPages'

const Posts = () => {
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
  let [totalPages, setTotalPages] = useState(0)
  let [limit, setLimit] = useState(10)
  let [page, setPage] = useState(0)

  let [fetchPost, isPostLoading, postError] = useFetching(async () => {
    let postsToServer = await PostService.getAll(limit, page)
    setPosts(postsToServer.data)
    let totalCount = postsToServer.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })
  const changePage = (page) => {
    setPage(page)
  }
  useEffect(() => {
    fetchPost()
  }, [page])

  const addNewPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }
  return (
    <div className="Posts">
      <Form addPost_Func={addNewPost} />
      <Filter filter={filter} setFilter={setFilter} />

      {isPostLoading ? (
        <LoaderGrey />
      ) : (
        <List posts={searchedAndSelectedPosts} removePost={removePost} />
      )}

      <Pagination totalCount={totalPages} changePage={changePage} />
    </div>
  )
}

export default Posts
