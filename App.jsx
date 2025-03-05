import React from "react";
import IDCard from "./IDCard";
import profileImage from "./assets/girl.jpeg"; // Ensure the image path is correct
import "./App.css";
    export default function App() {
      return (
        <div className="app-container">
          <IDCard 
            name="Lali" 
            job="Software Engineer" 
            email="lali8142@example.com" 
            image={profileImage} 
          />
        </div>
      );
    }
   // <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
    //  <IDCard 

