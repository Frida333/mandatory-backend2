import React, {useState, useEffect}  from 'react';
import TrelloList from '../trellolist/TrelloList';
import Header from '../header/Header';
import axios from 'axios';
 import './todoApp.css';

export default function TodoApp(){
  const [cards, setCards] = useState([]);
  const [savedId, setSavedId] = useState([]);

  useEffect(() => {
    axios.get('/cards')
   .then((data ) => {
     setSavedId(data.data);
     setCards(data.data);
   })
   .catch((err) =>{
     console.log(err)
   })
 },[]);

  const lists = [
    {
      title: "saker att göra",
      id: 0,
       cards: cards,
    },
    {
      title: "gör",
      id: 1,
      cards:cards
    },
    {
      title:"klart",
      id: 2,
      cards: cards
    }
  ]
  return (
     <div>
      <Header />
        <div className="container">
          {lists.map((list, i) =>
            <div key={i}>
              <TrelloList listTitle={list.title} listId={list.id} cards={list.cards} savedId={savedId}/>
            </div>
          )}
        </div>
    </div>
  );
}
