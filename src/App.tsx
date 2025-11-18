import React from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './Pages/Home'
import { PrivacyPolicy } from './Pages/PrivacyPolicy'
// import { Donate } from './Pages/Donate';
import { NotFound } from './Pages/NotFound'

import './i18n'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}/>
        <Route path="/terms-of-use" element={<PrivacyPolicy />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
