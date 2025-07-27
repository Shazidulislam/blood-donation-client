import { createBrowserRouter } from "react-router";
import RootLayout from "../LayOut/RootLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import LoadingSpner from "../Component/LoadingSpner";
import PriviteRoute from "../PriviteComponent/PriviteRoute";
import DashboardLayout from "../LayOut/DashboardLayout";
import UserProfile from "../Pages/DashBoardPage/Menu/UserProfile/UserProfile";
import MydonationRequest from "../Pages/DashBoardPage/DonnerPage/MydonationRequest";
import CreateDonationRequext from "../Pages/DashBoardPage/DonnerPage/CreateDonationRequext";
import DashboardHome from "../Pages/DashBoardPage/DashboardHome/DashboardHome";
import UpdateDonation from "../Pages/DashBoardPage/UpdateDonation/UpdateDonation";
import DonationDitails from "../Pages/DashBoardPage/DonationDitails/DonationDitails";
import Alluser from "../Pages/DashBoardPage/AdminPage/Alluser";
import AllBloodDonationRequest from "../Pages/DashBoardPage/AdminPage/AllBloodDonationRequest ";
import ContentManagement from "../Pages/DashBoardPage/AdminPage/ContentManagement";

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
       
    },
    {
        path:"/dashboard",
        element:<PriviteRoute><DashboardLayout></DashboardLayout></PriviteRoute>,
        children:[
            {
              index:true,
              element:<PriviteRoute><DashboardHome></DashboardHome></PriviteRoute>
            },
            {
                path:"/dashboard/my-donation",
                element:<PriviteRoute><MydonationRequest></MydonationRequest></PriviteRoute>
            },
            {
              path:"/dashboard/create-donation-request",
              element:<PriviteRoute><CreateDonationRequext></CreateDonationRequext></PriviteRoute>
            },
            {
                path:"/dashboard/profile",
                element:<PriviteRoute><UserProfile></UserProfile></PriviteRoute>

            },
            {
                path:"/dashboard/edit-donation/:id",
                element:<PriviteRoute><UpdateDonation></UpdateDonation></PriviteRoute>
            },
            {
                path:"/dashboard/diatils/:id",
                element:<PriviteRoute><DonationDitails></DonationDitails></PriviteRoute>
            },
            // admin
            {
                path:"/dashboard/all-donner-info",
                hydrateFallbackElement:<LoadingSpner></LoadingSpner>,
                loader:()=>fetch(`${import.meta.env.VITE_SERVER_KEY}/count-total-user`),
                element:<PriviteRoute><Alluser></Alluser></PriviteRoute>
            },
            {
                path:"/dashboard/all-blood-donation-request",
                hydrateFallbackElement:<LoadingSpner/>,
                loader:()=>fetch(`${import.meta.env.VITE_SERVER_KEY}/count-all-donation`),
                element:<PriviteRoute><AllBloodDonationRequest></AllBloodDonationRequest></PriviteRoute>
            },
            {
                path:"/dashboard/content-management",
                element:<PriviteRoute><ContentManagement></ContentManagement></PriviteRoute>
            }
        ]
    }

])

export default router;