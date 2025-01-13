import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Handle Google Login
  const handleGoogleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log("Google token:", tokenResponse);
      // Navigate to profile page after successful login
      navigate("/profile");
    },
    onError: () => {
      console.error("Google login failed");
    },
  });

  // Handle Internet Identity Login
  const handleInternetIdentityLogin = () => {
    console.log("Internet Identity login triggered.");
    alert("Logged in with Internet Identity (mock data).");
    // Navigate to profile page after successful login
    navigate("/profile");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Half: Login Form Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-white px-8 py-16">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Welcome Back
          </h1>
          <p className="text-gray-600 text-center mb-6">
            Log in to your account and continue where you left off.
          </p>

          <div className="space-y-6">
            {/* Google Login Button */}
            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center py-3 px-4 text-white bg-teal-500 rounded-md font-semibold shadow-md hover:bg-teal-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-300 active:scale-95"
            >
              <svg
                className="w-5 h-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.15 0 5.83 1.1 7.97 2.93l5.97-5.97C34.65 3.45 29.76 1.5 24 1.5 14.7 1.5 6.85 6.4 3.02 13.35l7.3 5.68C12.4 12.05 17.85 9.5 24 9.5z"
                />
                <path
                  fill="#34A853"
                  d="M43.64 20.2H42V20H24v8h11.35c-1.5 4.35-5.65 7.5-11.35 7.5-6.15 0-11.4-4.13-13.27-9.68L3.02 27.8C6.85 36.4 14.7 42 24 42c8.6 0 15.84-5.93 18.43-14.07l.03-.01-7.32-5.7C33.32 23.67 28.91 26.2 24 26.2c-3.35 0-6.45-1.25-8.8-3.3l-.1-.1-7.3 5.7c2.68 4.27 7.58 7.2 13.2 7.2 6.3 0 11.52-3.5 14.24-8.55l7.55 6.23C42.97 36.23 34.77 42 24 42 12.43 42 3 32.93 3 22 3 11.07 12.43 2 24 2c5.75 0 10.96 1.7 15.24 4.58L43.6 9C40.4 6.2 34.88 4 24 4c-8.6 0-16.1 5.35-19.02 13.15l7.3 5.68C14.6 16.4 19.85 14 24 14c5.3 0 9.72 2.5 12.45 6.55L43.63 20H24z"
                />
              </svg>
              Log in with Google
            </button>

            {/* Internet Identity Login Button */}
            <button
              onClick={handleInternetIdentityLogin}
              className="w-full flex items-center justify-center py-3 px-4 text-white bg-teal-600 rounded-md font-semibold shadow-md hover:bg-teal-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-600 active:scale-95"
            >
              <svg
                className="w-5 h-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 22c-5.52 0-10-4.48-10-10S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z" />
                <path d="M12 6C9.24 6 7 8.24 7 11h2c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3v2c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
              </svg>
              Log in with Internet Identity
            </button>
          </div>

          <p className="text-center text-gray-600 mt-6">
            Don't have an account?{" "}
            <a href="/signup" className="text-teal-600 hover:underline font-bold">
              Sign up here
            </a>
          </p>
        </div>
      </div>

      {/* Right Half: Image Section */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-teal-600">
        <img
          src="src/images/login.jpg"
          alt="Login Illustration"
          className="w-4/5 h-3/4 object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default LoginPage;
