import React from 'react'
import { useDispatch } from 'react-redux'
import { bag } from 'redux/reducers/bag'



export const HandleThings = (list, packed) => {
  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(bag.actions.tooglePacked(list.item.id));
  }

  const handleRemoveButtonClick = () => {
    dispatch(bag.actions.removeItem(list.item.id))
  }

  return (
    <li>
      <input
      type="checkbox"
      unchecked={packed}
      onChange={handleCheckboxClick}/>
      <span>{list.item.name}</span>
      <button 
        type='button' 
        onClick={handleRemoveButtonClick}>
        Remove
      </button>
    </li>
  )
}