import React from 'react';
import { Route } from 'react-router-dom';
import { Home, Auth } from 'pages';


const App = () => {

  return (
    <>
      <Route exact path='/' component={Home}/>
      <Route path='/auth' component={Auth}/>
    </>
  )
}

export default App;
