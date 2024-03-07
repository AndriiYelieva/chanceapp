import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from './Pages/Home'
import { PrivacyPolicy } from './Pages/PrivacyPolicy'
// import { Donate } from './Pages/Donate';
import { NotFound } from './Pages/NotFound'

import './i18n'

function App() {
  return (
    <BrowserRouter  >
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/donate" element={<Donate />}/> */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />}/>
        <Route path="/terms-of-use" element={<PrivacyPolicy />}/>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
