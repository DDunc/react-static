import React from 'react'
import { Router, Routes, Link } from 'react-static'

//

import Navigation from './components/Navigation'
import withAuthentication from './session/withAuthentication'

import './app.css'

const App = withAuthentication(() => (
  <Router>
    <div>
      <nav>
        <Link exact to="/">
          Home
        </Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <Navigation />
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
))

export default App