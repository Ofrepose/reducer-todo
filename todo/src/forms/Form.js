import React,{useReducer, useState} from 'react';



import {toDoReducer, initialState} from '../reducers/reducer';



export default function Form(props){

    const [newToDoText, setNewToDo] = useState("");
    const [state,dispatch] = useReducer(toDoReducer,initialState);

    const handleChange = e =>{
        setNewToDo(e.target.value);
    };

    const completeToDo = (e) =>{
        dispatch({type:'done', payload:parseInt(e.target.id)});
        e.target.classList.toggle('done');
    }


    return (
        <>
            {state.map(item=>{
               return <h1 key={item.id} id={item.id} onClick={completeToDo}>{item.item}</h1>
            })}

            <input
                type='text'
                name='newToDoText'
                value={newToDoText}
                onChange={handleChange}
                />

                <button
                    onClick={()=>{dispatch({type:'add', payload:{newToDoText}})}}
                    >Add
                </button>

            <button onClick={()=>{dispatch({type:'garbage'})}}>CleanUp</button>
        </>


    )
}