import { Fragment } from "react";
import ReactDOM from "react-dom";
import React from "react";
import root from "../..";
export default function Count() {
    const init = 0;
    const [count, setCount] = React.useState(init);
     
    function ADD() {

        setCount((count) => {
           
            return count + 1
        })

    }
    function unMount() {
        root.unmount()
    }
    React.useEffect(() => {
        // 相当于DidMount,UpdateMount
        console.log("!")
       let timer =  setInterval(() => {
            setCount((count)=>count+1)
        }, 1000);
        return () => {
            console.log("#")
            clearInterval(timer)
        }
    }, []);

    return (
        <Fragment>
            <h1>Count:{count}</h1>
            <button onClick={ADD}>+</button>
            <button onClick={unMount}>卸载</button>
        </Fragment>
    )
}