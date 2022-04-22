import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home';
import Edit from './Edit';
import Detail from './Detail';
import Add from './Add';
import Signin from './Signin';
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/edit/:id" element={<Edit />}></Route>
        <Route path="/book/:id" element={<Detail />}></Route>
        <Route path="/add" element={<Add />}></Route>
        <Route path="/Signin" element={<Signin />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
