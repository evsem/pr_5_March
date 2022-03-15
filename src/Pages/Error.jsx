import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/App.css'

const Error = () => {
  return (
    <>
      <h2 className="titleError">
        Error. Go to <Link to="/posts">home</Link>.
      </h2>
    </>
  )
}

export default Error
