import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { useTodo } from '../Contexts/TodoContexts';

type Props = {}

export default function AddTodo({}: Props) {
  const {state} = useTodo()

  return (
   <div className='text-3xl mt-3'>
    <div className='flex justify-evenly items-center' >
    <input type='checkbox'  className='w-5 h-5 '  />
    <label>This is a todo</label>
    
   <button> <DeleteIcon style={{fontSize:'2rem'}}/></button>
    
    </div>
   </div>
  )
}