import React from 'react'
import {Link,Outlet} from 'react-router-dom'
export default function Message() {
  const newlist = [
    {id:'01',name:"张三",age:22},
    {id:'02',name:"李四",age:43},
    {id:'03',name:"王老五",age:45},
    {id:'04',name:"老刘",age:34}
  ]
  return (
    <div>
        <ul>
             {
              newlist.map((item,index)=>{
                return (
                  <li key={item.id}>
                    <Link to={`detail/${newlist[index].id}/${newlist[index].name}/${newlist[index].age}`}>消息{index+1}</Link>
                  </li>
                )
              })
             }
        </ul>
        <hr />
        <Outlet />
    </div>
  )
}
