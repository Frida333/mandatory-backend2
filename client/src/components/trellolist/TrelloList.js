import React from 'react';
import TrelloCard from '../card/TrelloCard';
import './trelloList.css';





 export default function TrelloList() {

   return (
     <div className='listContainer'>
       <div style={styles.container}>
        <h4>saker att göra</h4>
        <TrelloCard />
      </div>
      <div style={styles.container}>
       <h4>gör</h4>
       <TrelloCard />
      </div>
      <div style={styles.container}>
        <h4>klar</h4>
        <TrelloCard />
      </div>
    </div>
   );
}


const styles ={
  container: {
    backgroundColor:"#5f9ea0",
    borderRadius: 3,
    width: 300,
    padding: 8,
    margin: 4,
  }
};
