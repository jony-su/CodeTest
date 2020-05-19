import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './Login/Login'
import Home from './Home/Home'

function Main() {
  return (
    <Router>
      <Route path="/login/" exact component={Login} />
      <Route path="/home/" exact component={Home} />
    </Router>
  )
}

export default Main;
