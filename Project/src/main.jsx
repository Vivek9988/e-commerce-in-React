import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import User from './Components/User/User.jsx';
import Github from './Components/Github/Github.jsx';
import Login from './Components/Login/Login.jsx';
import Signup from './Components/Signup/Signup.jsx';
import Clothes from './Components/Home/Clothes/Clothes.jsx';
import Health from './Components/Home/Health/Health.jsx'; 
import Furniture from './Components/Home/Furniture/Furniture.jsx';
import Mobiles from './Components/Home/Mobiles/Mobiles.jsx';
import Paintings from './Components/Home/Mobiles/Mobiles.jsx'
import DogFood from './Components/Home/DogFood/DogFood.jsx'; // Ensure this file exists
import Aeroplane from './Components/Home/Aeroplane/Aeroplane.jsx'; // Ensure this file exists
import LadiesCloths from './Components/Home/LadiesCloths/LadiesCloths.jsx'; // Ensure this file exists





 



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:id' element={<User />} />
      <Route path='github' element={<Github />} />
      <Route path='signup' element={<Signup />} />
      <Route path='login' element={<Login/>} />
      <Route path='cloths' element={<Clothes />} />
      <Route path='health' element={<Health />} />
      <Route path='furniture' element={<Furniture />} />
      <Route path='mobiles' element={<Mobiles />} />
      <Route path='painting' element={<Paintings />} />
      <Route path='dog-food' element={<DogFood />} />
      <Route path='aeroplane' element={<Aeroplane />} />
      <Route path='ladies-cloths' element={<LadiesCloths />} />

     
          </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
