import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import IndexPage from './pages/IndexPage';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={IndexPage} />
        <Route path='/' component={IndexPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
