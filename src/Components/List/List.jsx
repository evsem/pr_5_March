import React from 'react'
import classes from './List.module.css'
import Item from '../Item/Item'

const List = ({ posts, removePost }) => {
  return (
    <div className={classes.wrapper}>
      {posts.map((post, idx) => (
        <Item
          post={post}
          number={idx + 1}
          removePost={removePost}
          key={post.id}
        />
      ))}
    </div>
  )
}

export default List
