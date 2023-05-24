import React, { lazy, useEffect ,Suspense } from 'react';
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
import Homepage from './Components/HomePage/HomePage';
import Shrimmers from './Components/Shrimmer';
import Instamart from './Components/instamart';
import PocMemo from './Components/Memo';
//__________________
// On demand loading 
// Code Splitting 
// Bundle Chunkking
// Dynamic Import 
// Chunking 
// Lazy Loading
// Dynamic Bundling
//_________________

const Instamart = lazy(()=>{
    import("./Components/instamart");
});

const AppLayout = () =>{
    return (
        <div className='app'>
            <Header/>
            <Outlet/> 
            <Footer/>
        </div>
    )
}
/// App Route

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
                element: <Homepage/>
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
            },
            {
                path:'/Homepage',
                element:<Homepage/>
            },
            {
                path:'/Instamart',
                element:<Suspense fallback={Shrimmers}><Instamart/></Suspense>
            },
            {
                path:'/memo',
                element:<PocMemo/>
            }
        ],
    },
])

// const reactElement = React.createElement(AppLayout);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRoute} />);