import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PokemonCard from './components/PokemonCard';
import PokemonList from './components/PokemonList';
import BattleStart from './components/BattleStart';
import App from './App';
import AppProvider from './AppProvider';
import BattlePage from './components/BattlePage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
    <BrowserRouter> 
      <Routes>
        <Route exact path="/" element={<App />} />
          {/* these are nested within "/" App */}
          <Route path="/home" element={<LandingPage />} />
          <Route path="/pokemonCard" element={<PokemonCard />} />
          <Route path="/pokemonList" element={<PokemonList />} />
          <Route path="/battleStart" element={<BattleStart />} />
          <Route path="/battlePage" element={<BattlePage />} />
      </Routes>
    </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
