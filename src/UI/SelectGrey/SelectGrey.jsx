import React from 'react'
import classes from './SelectGrey.module.css'

const SelectGrey = ({ options, defaultValue, value, onChange }) => {
  return (
    <select
      className={classes.selectGrey}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option disabled>{defaultValue}</option>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  )
}

export default SelectGrey
