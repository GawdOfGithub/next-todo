import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { useTodo } from '../Contexts/TodoContexts';

type Props = {
  id:number
  todo:string
}

export default function AddTodo({id,todo}: Props) {
  const {state,check,setCheck,dispatch} = useTodo()
  function handleChange()
  {
   setCheck(!check)
   dispatch({type:"checked", check:check})
  }

  return (
   <div className='text-3xl mt-3'>
    <div className='flex justify-evenly items-center' >
    <input type='checkbox' onChange={handleChange} className='w-5 h-5 '  />
    <label>{todo}</label>
    
   <button> <DeleteIcon style={{fontSize:'2rem'}}/></button>
    
    </div>
   </div>
  )
}