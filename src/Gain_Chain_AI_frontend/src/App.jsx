import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import FloatingButton from './components/Floatingai';
import SignUpPage from './components/signup';
import FolderPage from './components/dashboard/Folderpage';
import GCHCoinInfo from './components/gchcoininfo';
import './index.css';

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  
  if (!isAuthenticated) {
    return <Navigate to="/signup" />;
  }
  
  return children;
};

const App = () => {
  return (
    <Router>
      <div>
        <FloatingButton />
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/gch-coin" element={<GCHCoinInfo />} />
          
          {/* Protected routes */}
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/folder/:folderName" 
            element={
              <ProtectedRoute>
                <FolderPage />
              </ProtectedRoute>
            } 
          />

          {/* Catch all other routes and redirect to landing */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
