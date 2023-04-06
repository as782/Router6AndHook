import React, { Component } from 'react'
import { Fragment } from 'react'



export default class Gogo extends Component {
  state = {
    name: 'Tom',
    iserror:false
  }
  static getDerivedStateFromError(err){
    console.log(err);
    return {
      iserror:true
    }
  }
  render() {

    return (
      <Fragment>
        <div style={{ border: "1px solid #222", backgroundColor: "#DDD", marginLeft: "15px" }}>
          我是Gogo组件
          <B render={(name) => <C name={name} />} />
         {
          this.state.iserror ? <h1>出错了！！！！</h1>: <D /> 
         } 
        </div>
      </Fragment>

    )
  }
}



class B extends Component {
  state = {
    name: "王志"
  }
  render() {

    return (
      <div style={{ border: "1px solid #222", backgroundColor: "#ddff", marginLeft: "15px" }}>
        我是B组件

        {this.props.render(this.state.name)}
      </div>
    )
  }
}


function C(props) {
  const INITVALUE = 18;
  let [value, setValue] = React.useState(INITVALUE)
 
  React.useEffect(() => {
    if (value >= 30) {
      alert("你死了")
    }
   

  }, [value])
  
  return (
    <div  style={{ border: "1px solid #222", backgroundColor: "#f44", marginLeft: "15px" }}>
      我是C组件
      <h1>我父组件中的name:{props.name}</h1>
      <h2>他的年龄：{value}</h2>
      <button onClick={() => { setValue(++value) }}>让他长大</button>
    </div>
  )
}



function D(props) {
  return (
    <div>没有出现错误。。。
      { props.data.map(()=>{return 1})}
    </div>
   
     
    
  )
}
