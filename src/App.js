import React from 'react'
import classes from './Style/App.module.css'
import { Routes, Route, Link } from 'react-router-dom'

//Импортируем страницы для их использования в навигации самого приложения
import AboutMe from './Pages/AboutMe'
import Posts from './Pages/Posts'
import Error from './Pages/Error'

const App = () => {
  return (
    <div className={classes.wrapper}>
      <header className={classes.headerForHref}>
        <Link className={classes.href} to="/aboutMe">
          AboutMe
        </Link>
        <Link className={classes.href} to="/posts">
          Posts
        </Link>
      </header>
      <div>
        <h1 className={classes.wrapper_title}>
          Get started with React-Router 6
        </h1>
      </div>

      <Routes>
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App

/*
Routes - оболочка для всех Route'ов

Route - элемент Routes.
<Route path="/aboutMe" element={<AboutMe />} /> - в path прописывается путь до самой страницы(/ означает корневой файл; * означает все остальные пути, которые не были прописаны вручную); element={<AboutMe />} - что должно отрисовываться при переходе на данный путь. Сам элемент обяхательно указывается внутри html-скобок.

Link - создание SPA-приложения(вместо классического тега ссылки используем Link; вместо href используем to).
Смотри пример выше
*/
