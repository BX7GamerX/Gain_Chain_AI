import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignUpPage from './components/signup';
import ProfilePage from './components/Profile';
import { AuthClient } from "@dfinity/auth-client";

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  
  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root to signup */}
        <Route path="/" element={<SignUpPage />} />
        
        {/* Protected Profile Route */}
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          } 
        />

        {/* Catch all other routes and redirect to signup */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App; 