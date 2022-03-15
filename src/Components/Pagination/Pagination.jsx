import React from 'react'
import ButtonNav from '../../UI/allButtons/ButtonNav/ButtonNav'
import { getPageArray } from '../../Utils/forPages'
import classes from './Pagination.module.css'

const Pagination = ({ changePage, totalCount }) => {
  let pageArray = getPageArray(totalCount)
  return (
    <div className={classes.wrapper}>
      {pageArray.map((page) => (
        <ButtonNav key={page} onClick={() => changePage(page)}>
          {page}
        </ButtonNav>
      ))}
    </div>
  )
}

export default Pagination
