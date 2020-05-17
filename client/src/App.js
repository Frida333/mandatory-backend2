import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import TodoApp from './components/todoapp/TodoApp';

import './App.css';

 export default function App() {
  return (
    <HelmetProvider>
    <Helmet>
      <title>Trello</title>
    </Helmet>
    <Router>
      <Route exact path="/" component={TodoApp} />
    </Router>
    </HelmetProvider>

  );
}
