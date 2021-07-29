import React from 'react';
import Home from './pages/Home';
import Context from './store/context';

function App() {
  return (
    <Context>
      <Home />
    </Context>
  );
}

export default App;
