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
import Clothes from './Routes/Clothes/Clothes.jsx';
import Health from './Routes/Health/Health.jsx';
import Furniture from './Routes/Furniture/Furniture.jsx';
import Mobiles from './Routes/Mobiles/Mobiles.jsx';
import Paintings from './Routes/Mobiles/Mobiles.jsx'
import DogFood from './Routes/DogFood/DogFood.jsx'; // Ensure this file exists
import Aeroplane from './Routes/Aeroplane/Aeroplane.jsx'; // Ensure this file exists
import LadiesCloths from './Routes/LadiesCloths/LadiesCloths.jsx'; // Ensure this file exists
import Shoes from './Routes/Main Product/Shoes.jsx';
import Men from './Routes/Main Product/Men.jsx';
import Women from './Routes/Main Product/Women.jsx';
import Kids from './Routes/Main Product/Kids.jsx';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:id' element={<User />} />
      <Route path='github' element={<Github />} />
      <Route path='signup' element={<Signup />} />
      <Route path='login' element={<Login />} />
      <Route path='cloths' element={<Clothes />} />
      <Route path='health' element={<Health />} />
      <Route path='furniture' element={<Furniture />} />
      <Route path='mobiles' element={<Mobiles />} />
      <Route path='painting' element={<Paintings />} />
      <Route path='dog-food' element={<DogFood />} />
      <Route path='aeroplane' element={<Aeroplane />} />
      <Route path='ladies-cloths' element={<LadiesCloths />} />
      <Route path='shoes' element={<Shoes />} />
      <Route path='men' element={<Men />} />
      <Route path='women' element={<Women />} />
      <Route path='kids' element={<Kids />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
