import React from "react";
import './scss/base.scss';
import { Link } from 'react-router-dom';
import AppProvider from "./AppProvider";

function App() {
  return (
    <AppProvider>
      <div>
        <Link className="enter" to="/home">I choose you!</Link> 
      </div>
    </AppProvider>
      
  );
};

export default App;
