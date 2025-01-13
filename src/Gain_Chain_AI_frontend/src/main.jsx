import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google"; // Import Google OAuth provider
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend"; // Import the drag-and-drop HTML5 backend
import App from "./App";
import "./index.css"; // Import Tailwind CSS styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
