import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import FloatingButton from './components/Floatingai';
import SignUpPage from './components/signup';
import LoginPage from './components/LoginPage';
import FolderPage from './components/dashboard/Folderpage';
import GCHCoinInfo from './components/gchcoininfo';
import './index.css';

const App = () => {
  return (
    <Router> {/* Wrap Routes with BrowserRouter */}
      <div>
        <FloatingButton />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<Dashboard />} />
          <Route path="/gch-coin" element={<GCHCoinInfo />} /> {/* Static route for GCH Coin info */}
          <Route path="/folder/:folderName" element={<FolderPage />} /> {/* Dynamic route for folder details */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
