import React, { Component } from 'react'

export default class Count extends Component {
    state={
        count:0
    }
    increment=()=>{
        this.setState((state,props)=>{
            console.log("(props,state:",props,state)
         return  {count:state.count + props.point} ;
        },()=>{
            console.log("页面渲染后的：",this.state.count)
        });
        console.log("跟新后立即获取：",this.state.count)
    }
  render() {
    return (
      <div>
      <h1>  求和：{this.state.count}</h1>
      <button onClick={this.increment}>加1</button>
      </div>
    )
  }
}
