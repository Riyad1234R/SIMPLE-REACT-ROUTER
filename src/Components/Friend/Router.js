import { createBrowserRouter } from "react-router-dom";
import Setting from "../../Pages/Setting";
import Home from "../Home/Home";
import Friends from "../Friends/Friends";
import Riad from "../../Pages/Riad";
import FriendDetail from "../FriendDetail/FriendDetail";

export const route = createBrowserRouter([
    {path:'/',element:<Setting></Setting>,children:[
     {path:'/friends',element:<Friends></Friends>},
     {path:'/',element:<Home></Home>},
     {path:'/riad',element:<Riad></Riad>},
     {path:'/frienddetail/:id',element:<FriendDetail></FriendDetail>,loader: async ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)}
    ]}
])