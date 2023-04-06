import React, { lazy, Component,Suspense } from 'react'
import { Link, Route } from 'react-router-dom'
const About = lazy(() => import('./pages/About'));
const Home = lazy(() => import('./pages/Home'));

export default class App extends Component {
  render() {
    return (
      <div>

        <div >
          <Link to={{ pathname: '/home' }}>HOME</Link> &nbsp;
          <Link to={{ pathname: '/about' }}>ABOUT</Link>
        </div>

        <div style={{ border: "1px solid #333", marginTop: "100px" }}>
          <Suspense fallback={<h1>loading.....</h1>}  >
            <Route path='/home' component={Home}></Route>
            <Route path='/about' component={About}></Route>
          </Suspense>
        </div>
      </div>
    )
  }
}
