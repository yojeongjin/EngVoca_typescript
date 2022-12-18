import React from 'react';
import GlobalStyles from './styled/GlobalStyles';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import Login from './pages/Login';
import Day from './pages/Day';
import Test from './pages/Test';
import Notebook from './pages/Notebook';
import EachType from './pages/EachType';

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path='/eachtype' element={<EachType />} />
          <Route path='/notebook' element={<Notebook />} />
          <Route path='/test/:idx' element = {<Test />} />
          <Route path='/day/:idx' element = {<Day />} />
          <Route path='signin' element={<Login />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App;
