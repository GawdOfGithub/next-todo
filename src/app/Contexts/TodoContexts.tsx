'use client'
import React, { createContext,useContext,useState,useReducer } from "react";
import { useForm } from "react-hook-form";
type FormData = {
  todoInput: string;
};


type TodoContextType = {
 register:any
 handleSubmit:any
 dispatch:any
 state:any
 check:boolean
 setCheck:(check:boolean)=>void
};
const TodoContext = createContext<TodoContextType | null>(null);
interface TodoContextsProps {
  children: React.ReactNode;
}
export default function TodoContexts({ children }: TodoContextsProps) {
  function reducer(state:any,action:any)
  {
    switch(action.type)
    {
      case "add-todo":{
       
        return [...state, {todo:action.payload,id:action.newId}]
      } 
    }
  
  }
 const initalState =
 [
  {
    todo:"Add a todo",
    
    id:0,
  }
]
  const[state,dispatch] = useReducer(reducer,initalState)
  const[check,setCheck] = useState(false)
  const { register,handleSubmit } = useForm<FormData>();
  return (
    <TodoContext.Provider value={{ register, handleSubmit,dispatch,state,check,setCheck}}>
      {children}
    </TodoContext.Provider>
  );
  
}
export function useTodo()
{
 const context = useContext(TodoContext)
 if(context==null)
 {
  throw new Error("there is some problem with useTodo")
 }
 return context
}