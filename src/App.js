import React from 'react'
import Game from './pages/Game'
import Categories from './pages/Categories'
import GameOver from './pages/GameOver'
import Home from './pages/Home'

import './App.css'
import {BrowserRouter,Route, Switch} from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/categories" component={Categories}/>
          <Route path="/gameover" exact component={GameOver}/>
          <Route path="/game/:mode" component={Game}/>
        </Switch>
      </BrowserRouter>
    </>
  )
}


export default App
