import React, {useState, useEffect}  from 'react';
import TrelloList from '../trellolist/TrelloList';
import Header from '../header/Header';
import axios from 'axios';
import './todoApp.css';

export default function TodoApp(){
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCards()
  },[]);

  function getCards(){
    axios.get('/cards')
   .then((data ) => {
     setCards(data.data);
   })
   .catch((err) =>{
     console.log(err)
   })
  }

  const lists =
  [
    {
      title: "things to do",
      id: "0",
    },
    {
      title: "make",
      id: "1",
    },
    {
      title:"done",
      id: "2",
    }
  ]
  return (
     <div>
      <Header />
        <div className="container">
          {lists.map((list, i) =>
            <div key={i}>
              <TrelloList listTitle={list.title} listId={list.id} cards={cards} getCards={getCards} lists={lists}/>
            </div>
          )}
        </div>
    </div>
  );
}
