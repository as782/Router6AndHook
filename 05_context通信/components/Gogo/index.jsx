import React, { Component } from 'react'
import { Fragment } from 'react'


const GogoContext = React.createContext();
export default class Gogo extends Component {
  state = {
    name: 'Tom'
  }

  render() {

    return (
      <Fragment>
        <div style={{ border: "1px solid #222", backgroundColor: "#DDD", marginLeft: "15px" }}>
          我是Gogo组件
          <div >
            <GogoContext.Provider value={this.state.name}>
              <B />
            </GogoContext.Provider>

          </div>
        </div>
      </Fragment>

    )
  }
}



class B extends Component {
  render() {

    return (
      <div style={{ border: "1px solid #222", backgroundColor: "#ddff", marginLeft: "15px" }}>
        我是B组件
        <h1>
          我从Gogo组件接受的：？？？
        </h1>
        <C />
      </div>
    )
  }
}

// class C extends Component {
//   static contextType = GogoContext
//   render() {
//     console.log(this)

//     return (
//       <div style={{ border: "1px solid #222", backgroundColor: "#f44", marginLeft: "15px" }}>
//         我是C组件
//         <h1>
//           我从Gogo组件接受的： {this.context}
//         </h1>

//       </div>
//     )
//   }
// }

function C() {

  return (
    <div style={{ border: "1px solid #222", backgroundColor: "#f44", marginLeft: "15px" }}>
      我是C组件
      <h1>
        我从Gogo组件接受的：  
        <GogoContext.Consumer>
          {
            value =>(value)
          }
        </GogoContext.Consumer>
      </h1>

    </div>
  )
}