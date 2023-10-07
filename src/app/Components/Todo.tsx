'use client'
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useTodo } from '../Contexts/TodoContexts';
import AddTodo from './AddTodo';
import { useState } from 'react';
type Props = {};

export default function Todo({}: Props) {
  const[id,setID] = useState(1)
  const { register,handleSubmit,dispatch,state } = useTodo();
 console.log(state)
  
  const handleAddTodo = (data:any) => {
    
 setID(id+1)
  console.log(data.name)
    dispatch({ type: 'add-todo', payload: data.name,
    newId:id});   
    // Perform any other actions you need with the data (e.g., dispatching to context)
  };

  return (
    <div className='flex flex-col'>
      <form
        className='mx-3 my-10'
        onSubmit={handleSubmit(handleAddTodo)} // Use handleSubmit from useForm
      >
        <div className='flex'>
          
              <input name='name'{...register('name')}
                
                className='text-black font-bold text-2xl border-xl'
              />
          <button
            type='submit'
            onClick={handleAddTodo}
            className='ml-2 bg-red-500 b-5 hover:bg-red-900'
          >
            AddTodo
          </button>
        </div>
        <div className='mt-10 mr-5'>
          {state.map((item:any,index:number)=>(<AddTodo key={index} id={item.id} todo={item.todo}/>))}
        </div>
      </form>
    </div>
  );
}
