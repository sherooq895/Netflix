import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/banner/Banner';
import './App.css';
import RowPost from './Components/RowPost/RowPost';
import {action,originals} from './urls'




function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Orginals'/>
      <RowPost url={action} title='Action' isSmall/>

    </div> 
  );
}

export default App;
