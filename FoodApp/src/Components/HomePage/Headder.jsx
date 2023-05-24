import React from 'react'
import SectionLogo from "../../../assets/sectionimg.png";
import Underline from "../../../assets/Decore.png"; 
import { Link, Router } from 'react-router-dom';


const HomeHeader = () =>{
    return (
        <>
         <div className='flex  space-x-48 '>
          <div className=' flex flex-col px-11 py-32'>
          <div className='py-2'> 
            
              
             <button className='bg  text-white font-bold py-2 px-4 rounded-full'>1M + People Trust us</button>
             
          </div>   

         <h1 className='text-4xl font-semibold		'>We're <span className='text-red-600	'>Serious</span> For</h1>
          <h1 className='text-4xl font-semibold'><span className='text-red-600	'>Food</span> & <span className='text-yellow-600'>Delivery</span></h1>
         <div className='pl-28 py-1'>
         <img className='h-2 w-64 ' src={Underline}></img>

         </div>

         
          <p>Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.</p>
        
<form class="flex items-center py-4">   
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Search" required/>
    </div>
    <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-red-700 rounded-lg border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-red-800">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        <span class="sr-only">Search</span>
    </button>
</form>
 
 <Link to={'/'}>
 <button onClick={
    ()=>{
      console.log("hello toast")
    }
} data-popover-target="popover-default" type="button" class="text-white  bg focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Magic</button>
 </Link>

<div data-popover id="popover-default" role="tooltip" class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
    <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
        <h3 class="font-semibold text-gray-900 dark:text-white">Magic</h3>
    </div>
    <div class="px-3 py-2">
        <p>And here's some amazing content. It's very engaging. Right?</p>
    </div>
    <div data-popper-arrow></div>
</div>


         
          </div>
         
         
         <img className='h-3/4	' src={SectionLogo}></img>
</div>
          
        </>
    )
}
export default HomeHeader;