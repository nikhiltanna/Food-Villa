
// imported react and reactdom from nodemodule folder
// import {React, createElement as ce} from 'react';
import React, { lazy,Suspense,useState } from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import Footer from './Src/Components/Footer'
import {Body} from './Src/Components/Body'
import Header from './Src/Components/Header'
import About from './Src/Components/About'
import Error from './Src/Components/Error'
import Contact from  './Src/Components/Contact'
import RestaurantMenu from "./Src/Components/RestaurantMenu";
import Profile from  "./Src/Components/ProfileClass";
import {createBrowserRouter,Outlet,RouterProvider,Outlet,} from 'react-router-dom'
import Shimmer from "./Src/Components/Shimmer"
import UserContext from './Src/utils/UserContext';
import { Provider, useSelector } from 'react-redux';
import storre from  './Src/utils/store';
import Cart from './Src/Components/Cart'


//Lazy laoding of the components
const Instamart= lazy(()=>import("./Src/Components/Instamart"));

// React Component 
// Functional component - new way of writing component 
// Class component - old way of writing component
// Title component is functional component
export const Title = () => {
  return (
    <h1 id="title" key="title">Food Villa</h1>
  )
}


const Applayout= ()=>{
  const [user,setUser]=useState(
    {
      name: "Nikhil-Tanna",
      email:"support@namastedev.com"
   
  });
  
  return(
<Provider store={storre}>
<UserContext.Provider value={{
      user:user,
  }}>
   <Header/>
   <Outlet/>
   <Footer/>
   </UserContext.Provider>
  </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <Applayout/>,
    errorElement:<Error/>,
    children: [

      {
        path:"/",
        element: <Body/>,
      },
      {
        path:"/About",
        element: <About/>,
        children:[
          {
            path:"profile",
            element:<Profile/>,
          }
        ]
    
      },
      {
      
      path:"/contact",
      element: <Contact/>,
      },
      {
        path:"/restaurant/:resid",
        element:<RestaurantMenu/>
      },
      {
      
        path:"/instamart",
        element: <Suspense fallback= {<Shimmer/>} ><Instamart/></Suspense>
        },
        {
          path:"/cart",
          element: <Cart/>,
        }
    ]
  },
  


])

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));


// passing react element inside root
root.render(<RouterProvider router={appRouter}/>);
