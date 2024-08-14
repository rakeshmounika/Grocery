import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter  } from 'react-router-dom';
import './App.css';
import Header from './Grocery/Header';
import Home from './Grocery/Home';
import Menu from './Grocery/Menu';
import About from './Grocery/About';
import Contact from './Grocery/Contact';
import AttaRice from './Grocery/AttaRice';
import SpicesSalt from './Grocery/SpicesSalt';
import DetailPage from './DetailsPage';
import OilGhee from './Grocery/OilGhee';
import DryFruits from './Grocery/DryFruits';
import Snacks from './Grocery/Snacks';

function App() {
  return (
    <>
    <div className='appdesign'> 
<BrowserRouter>
<Header/>
<Routes>
  <Route>
        <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/menu" element={<Contact />} />
          <Route path="/about" element={<About />} />


          <Route path="/AttaRice" element={<AttaRice />} />
          <Route path="/SpicesSalt" element={<SpicesSalt />} />
          <Route path="/OilGhee" element={<OilGhee />} />
          <Route path="/DryFruits" element={<DryFruits />} />
          <Route path="/Snacks" element={<Snacks />} />


          {/* <Route path="/detail/:itemName" element={<DetailPage />} /> */}


          </Route>
          </Routes>
    </BrowserRouter>
    </div>
    </>
  
  );
}

export default App;
