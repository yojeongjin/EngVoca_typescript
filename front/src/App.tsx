import React from 'react';
import GlobalStyles from './styled/GlobalStyles';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import Signin from './pages/Signin';

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path='signin' element={<Signin />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App;
