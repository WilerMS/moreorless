import React from 'react'
import Game from './pages/Game'
import Categories from './pages/Categories'

import './App.css';
import {BrowserRouter,Route, Switch} from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Categories}/>
          <Route path="/game/:mode" component={Game}/>
        </Switch>
      </BrowserRouter>
    </>
  )
}


export default App;
