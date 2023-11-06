import React from 'react'
import classes from './ButtonC.css'
import { useState } from 'react';

export const ButtonC = () =>{
 // const{item} = props
 const intiatialState = true;//{title:"test",likes:1}
 //const [post,setPost] = useState(intiatialState);

 const [cardView,setView] = useState(intiatialState);
 
 const handlAddLike = () =>{
  //setPost({...post,likes: post.likes+1})
  setView(prev => !prev )
 };
 //    <button onClick={handlAddLike}> {post.likes} </button>
 //    <h2>{post.title}</h2>
  return (
    <>

     <div>
      {cardView ? <div>Hello</div> : <div>Buy</div>}

     </div>
     <button onClick={handlAddLike}> button </button>

    </> );
};






