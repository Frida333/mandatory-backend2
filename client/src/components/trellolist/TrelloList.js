import React from 'react';
import TrelloCard from '../card/TrelloCard';
import TrelloAddForm from '../trelloaddform/TrelloAddForm';
import './trelloList.css';


export default function TrelloList({listTitle, cards, listId , getCards, lists}) {

  return (
    <div className="listContainer">
      <div style={styles.container}>
        <h4>{listTitle}</h4>
        {cards.map((card, i ) =>{
          if(listId === card.card.listId){
            return(
              <div key={card._id}>
                <TrelloCard cardTitle={card.card.title} cardDescription={card.card.description} date={card.card.date} id={card._id} listId={listId}
                  getCards={getCards} listTitle={listTitle} lists={lists}
                />
              </div>
            )}
            return;
        })}
          <TrelloAddForm  listId={listId} getCards={getCards}/>
      </div>
    </div>
  );
}


const styles ={
  container: {
    backgroundColor:"#5f9ea0",
    borderRadius: 3,
    width: 250,
    padding: 8,
    margin: 4,
    marginBottom: 8,
    height: '100%',
  }
};
