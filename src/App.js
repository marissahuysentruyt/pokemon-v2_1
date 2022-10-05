import React from "react";
// import './scss/utilities/enterView.scss';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Link className="enter" to="/home">I choose you!</Link> 
    </div>
  );
};

export default App;
