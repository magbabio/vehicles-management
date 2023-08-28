import React from 'react';
import {Route, Routes} from 'react-router-dom';
import CarsPage from './pages/CarsPage';
import CarsForm from './pages/CarsForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CarContextProvider } from './context/CarProvider';

const App = () => {
  return (
 <div className="bg-white h-screen">
  <Navbar/>
   <div className="container mx-auto py-10 px-20">
    <CarContextProvider>
        <Routes>
          <Route path="/" element={<CarsPage/>}/>
          <Route path="/new" element={<CarsForm/>}/>
          <Route path="/edit/:id" element={<CarsForm/>}/>
        </Routes>
    </CarContextProvider>
   </div>
   <Footer/>
 </div>
  );
}

export default App
