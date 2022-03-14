import React from 'react'
import classes from './Filter.module.css'
import InputGrey from '../../UI/InputGrey/InputGrey'
import SelectGrey from '../../UI/SelectGrey/SelectGrey'

const Filter = ({ filter, setFilter }) => {
  return (
    <div className={classes.wrapper}>
      <InputGrey
        type="text"
        placeholder="Search"
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <SelectGrey
        value={filter.sort}
        onChange={(sortPost) => setFilter({ ...filter, sort: sortPost })}
        defaultValue="Sorting"
        options={[
          { name: 'By name', value: 'title' },
          { name: 'By description', value: 'body' },
        ]}
      />
    </div>
  )
}

export default Filter
