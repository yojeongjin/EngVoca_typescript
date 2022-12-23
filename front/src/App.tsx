import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styled/theme';
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
import Basic from './pages/Basic'
import Join from './pages/Join'
import Repeat from './pages/Repeat';

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`)
  }
  useEffect(() => {
    setScreenSize()
  })

  return (
    <ErrorBoundary FallbackComponent={Error}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path='/repeat' element={<Repeat />} />
            <Route path='/join' element={<Join />} />
            <Route path='/900' element={<Basic />} />
            <Route path='/800' element={<Basic />} />
            <Route path='/700' element={<Basic />} />
            <Route path='/LCRC' element={<Basic />} />
            <Route path='/basic' element={<Basic />} />
            <Route path='/eachtype' element={<EachType />} />
            <Route path='/notebook' element={<Notebook />} />
            <Route path='/test/:idx' element = {<Test />} />
            <Route path='/day/:idx' element = {<Day />} />
            <Route path='signin' element={<Login />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App;
