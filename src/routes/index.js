import { Navigate } from "react-router-dom";
import Detail from "../pages/About/Message/Details";
import About from "../pages/About";
import Message from "../pages/About/Message";
import News from "../pages/About/News";
import Home from "../pages/Home";

//路由规则
export const routers =  [
    {
        path:'/',
        element:<Navigate to='/home'/>
    },
    {
        path:'/home',
        element:<Home/>
    },
    {
        path:'/about',
        element:<About/>,
        children:[
            {
                path:'news',
                element:<News/>
            },
            {
                path:"message",
                element:<Message/>,
                children:[
                    {
                        path:'detail/:id/:name/:age',
                        element:<Detail/>
                    }
                ]
            }
        ]
    }
]