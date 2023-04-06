import { Fragment } from "react";
// import ReactDOM from "react-dom";
import React from "react";
import root from "../..";
export default function Count() {
    const init = 0;
    const [count, setCount] = React.useState(init);
    const [obj, setName] = React.useState({ name: 'tom', age: 191 })
    const nameInp = React.useRef();
    const ageInp = React.useRef();
    function ADD() {
        setCount(count => count + 1)

    }
    function changename() {
        setName((obj) => {
            
          let  name = nameInp.current.value;
          let  age = ageInp.current.value;
            
            return { ...obj, name, age }
        });
    }
    function unMount() {
        root.unmount()
    }
    React.useEffect(() => {
        // 相当于DidMount,UpdateMount
        console.log('first')
        return () => {
            console.log('0')
        }
    }, [obj]);

    return (
        <Fragment>
            <h1>Count:{count}</h1>
            <h1>name:{obj.name}-age:{obj.age}</h1>
            <input ref={nameInp} type="text" placeholder="name" />
            <input ref={ageInp} type="text" placeholder="age" />
            <button onClick={ADD}>+</button>
            <button onClick={unMount}>卸载</button>
            <button onClick={changename}>g</button>
        </Fragment>
    )
}