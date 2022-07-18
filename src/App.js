import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';


const App = () => {

  return(
    <BrowserRouter>
    <div className='app'>
      <Home />
      <About />
    </div>
    </BrowserRouter>
  )
}

export default App;