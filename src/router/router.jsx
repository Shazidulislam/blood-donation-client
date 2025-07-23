import { createBrowserRouter } from "react-router";
import RootLayout from "../LayOut/RootLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import LoadingSpner from "../Component/LoadingSpner";

const router = createBrowserRouter([
    {
        path:"/",
        Component:RootLayout,
        children:[
            {
                index:true,
                element:<Home></Home>
            }
        ]
    },
    {
        path:"/login",
        Component:Login,
    },
    {
        path:"/register",
        Component:Register,
        hydrateFallbackElement:<LoadingSpner/>,
        loader:()=> fetch("../distric.json"),
    }

])

export default router;