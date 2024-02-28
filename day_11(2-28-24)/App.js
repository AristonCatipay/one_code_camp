import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FetchUsingBuiltInFunction from './pages/FetchUsingBuiltInFunction';
import FetchUsingAxios from './pages/FetchUsingAxios';
import OrderComponent from './components/OrderComponent';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/order' element={<OrderComponent/>}></Route>
          <Route path='/functions' element={<FetchUsingBuiltInFunction/>}></Route>
          <Route path='/axios' element={<FetchUsingAxios/>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;