import React from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/Home';
import{
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import DetailPage from './components/DetailPage'
import Login from './components/Login';



function App() {
  return (
    <div className="App">

      <Router>
        <Header/>
          <Routes>
            <Route path="/login" element={<Login/>}/>
              
            
            <Route path="/detailpage/:id" element={<DetailPage/>}/>
              

            <Route path="/" element={<Home/>}/>
             
          </Routes>
      </Router>
      
    </div>
  );
}

export default App;
