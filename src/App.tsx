import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home';
import Edit from './Edit';
import Detail from './Detail';
import Add from './Add';
import Signin from './Signin';
import NotFound from './NotFound';
import { ErrorBoundary } from 'react-error-boundary';
import Error from './Error';


function App() {
  return (
    <ErrorBoundary fallback={<Error />}>
      <BrowserRouter>
        <Routes>
          <Route path="/edit/:id" element={<Edit />}></Route>
          <Route path="/book/:id" element={<Detail />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/Signin" element={<Signin />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
