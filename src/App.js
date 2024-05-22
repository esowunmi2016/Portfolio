import React from 'react';

import Home from './pages/home'
import Landing from './pages/landing';
import Projects from './pages/projects';
 
const App = () => (
  <>
    <div style={{
      position:'relative'
    }}>

      <Home />

      <Landing />
      <Projects />
    </div>
  </>
)

export default App