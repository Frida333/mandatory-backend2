import React from 'react';
import TrelloList from '../trellolist/TrelloList';
import Header from '../header/Header';

export default function TodoApp(){

    return (
     <div>
      <Header />
      <TrelloList />
     </div>
    );
}
