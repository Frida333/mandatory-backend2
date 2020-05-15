import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Header from './components/header/Header';
import TrelloList from './components/trellolist/TrelloList';
import './App.css';

 export default function App() {
  return (
    <HelmetProvider>
    <Helmet>
      <title>Trello</title>
    </Helmet>
      <div className="frame">
      <Header />
      <TrelloList />
      </div>
    </HelmetProvider>

  );
}
