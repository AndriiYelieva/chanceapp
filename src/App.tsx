import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from './src/Pages/Home'
import { PrivacyPolicy } from './src/Pages/PrivacyPolicy'
// import { Donate } from './Pages/Donate';
import { NotFound } from './src/Pages/NotFound'

import './src/i18n'

function App() {
  return (
    <BrowserRouter  >
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/chanceapp/donate" element={<Donate />}/> */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />}/>
        <Route path="/terms-of-use" element={<PrivacyPolicy />}/>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
