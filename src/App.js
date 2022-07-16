import React from 'react';
import Pages from './pages/pages';
import { BrowserRouter } from 'react-router-dom';



const App = () => {

  return(
    <BrowserRouter>
    <div>
      <Pages />
    </div>
    </BrowserRouter>
  )
}

export default App;