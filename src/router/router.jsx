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
import AddBlog from "../Pages/DashBoardPage/AdminPage/AddBlog";
import AdminContentManagement from "../Pages/DashBoardPage/AdminPage/AdminContentManagement";
import AdminPriviteRoute from "../PriviteComponent/AdminPriviteRoute";
import SearchPage from "../Pages/SerchPage/SearchPage";
import BloodDonationRequest from "../Pages/BloodDonationRequestPage/BloodDonationRequest";
import Blog from "../Pages/Blog/Blog";
import BlogDeatils from "../Pages/BlogDeatils/BlogDeatils";
import ErrorPage from "../Pages/Error/ErrorPage";
import Funding from "../Pages/Funding/Funding";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    // errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/search",
        element: <SearchPage></SearchPage>,
      },
      {
        path: "/all-blood-donation-request",
        element: <BloodDonationRequest></BloodDonationRequest>,
      },
      {
        path: "/published-blog",
        element: <Blog></Blog>,
      },
      {
        path: "/blog-deatils/:id",
        element: (
          <PriviteRoute>
            <BlogDeatils></BlogDeatils>
          </PriviteRoute>
        ),
      },

      {
        path: "/funding",
        element: (
          <PriviteRoute>
            <Funding></Funding>
          </PriviteRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
  {
    path: "/dashboard",
    element: (
      <PriviteRoute>
        <DashboardLayout></DashboardLayout>
      </PriviteRoute>
    ),
    children: [
      {
        index: true,
        hydrateFallbackElement: <LoadingSpner></LoadingSpner>,
        loader: () =>
          fetch(`${import.meta.env.VITE_SERVER_KEY}/count-total-user`),
        element: (
          <PriviteRoute>
            <DashboardHome></DashboardHome>
          </PriviteRoute>
        ),
      },
      {
        path: "/dashboard/my-donation",
        element: (
          <PriviteRoute>
            <MydonationRequest></MydonationRequest>
          </PriviteRoute>
        ),
      },
      {
        path: "/dashboard/create-donation-request",
        element: (
          <PriviteRoute>
            <CreateDonationRequext></CreateDonationRequext>
          </PriviteRoute>
        ),
      },
      {
        path: "/dashboard/profile",
        element: (
          <PriviteRoute>
            <UserProfile></UserProfile>
          </PriviteRoute>
        ),
      },
      {
        path: "/dashboard/edit-donation/:id",
        element: (
          <PriviteRoute>
            <UpdateDonation></UpdateDonation>
          </PriviteRoute>
        ),
      },
      {
        path: "/dashboard/diatils/:id",
        element: (
          <PriviteRoute>
            <DonationDitails></DonationDitails>
          </PriviteRoute>
        ),
      },
      // admin && volunteer
      {
        path: "/dashboard/all-donner-info",
        hydrateFallbackElement: <LoadingSpner></LoadingSpner>,
        loader: () =>
          fetch(`${import.meta.env.VITE_SERVER_KEY}/count-total-user`),
        element: (
          <AdminPriviteRoute>
            <PriviteRoute>
              <Alluser></Alluser>
            </PriviteRoute>
          </AdminPriviteRoute>
        ),
      },
      {
        path: "/dashboard/all-blood-donation-request",
        hydrateFallbackElement: <LoadingSpner />,
        loader: () =>
          fetch(`${import.meta.env.VITE_SERVER_KEY}/count-all-donation`),
        element: (
          <AdminPriviteRoute>
            <PriviteRoute>
              <AllBloodDonationRequest></AllBloodDonationRequest>
            </PriviteRoute>
          </AdminPriviteRoute>
        ),
        // element:<PriviteRoute><AllBloodDonationRequest></AllBloodDonationRequest></PriviteRoute>
      },
      {
        path: "/dashboard/content-management",
        hydrateFallbackElement: <LoadingSpner />,
        loader: () =>
          fetch(`${import.meta.env.VITE_SERVER_KEY}/count-all-blog`),
        element: (
          <AdminPriviteRoute>
            <PriviteRoute>
              <AdminContentManagement></AdminContentManagement>
            </PriviteRoute>
          </AdminPriviteRoute>
        ),
      },
      {
        path: "/dashboard/content-management/add-blog",
        element: (
          <AdminPriviteRoute>
            <PriviteRoute>
              <AddBlog></AddBlog>
            </PriviteRoute>
          </AdminPriviteRoute>
        ),
      },

      //     path:"/*",
      //     element:<ErrorPage></ErrorPage>
      // }
      //volantir
    ],
  },
]);

export default router;
