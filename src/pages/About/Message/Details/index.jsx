import React from 'react'
import { useParams } from 'react-router-dom'

export default function Detail() {
 let {id,name,age}= useParams();
  
  return (
    <div>
        <ul>
            <li>id:{id}</li>
            <li>name:{name}</li>
            <li>age:{age}</li>
        </ul>
    </div>
  )
}
