import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body';
import { createBrowserRouter, RouterProvider , Outlet } from 'react-router-dom';
import About from './Components/About';
import FallBack from './Components/Fallback';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
import ResMenu from './Components/RestaurantMenu';
import Profile from './Components/Profile';
import ProfileComponent from './Components/ProfileClass';
const AppLayout = () =>{
    return (
        <div className='app'>
            <Header/>
            <Outlet/> 
            <Footer/>
        </div>
    )
}
const appRoute = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        errorElement:<FallBack/>,
        children:[
            {
                path:'/',
                element: <Body/>,
            },
            {
                path:'/about',
                element: <About/>,
                children:[{
                    path:'profile',
                    element:<Profile/>
                },
               ]
            },
            {
                path:'/home',
                element: <Home/>
            },
            {
                path:'/contact',
                element: <Contact/>
            },
            {
                path:'/cart',
                element: <Cart/>
            },
            {
                path:'/resdetail/:id',
                element: <ResMenu/>
            },
            {
                path:'/profilecp',
                element:<ProfileComponent/>
            }
           
        ]
    },
   
])

const reactElement = React.createElement(AppLayout);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRoute} />);