import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TrelloCard from '../card/TrelloCard';
import TrelloAddForm from '../trelloaddform/TrelloAddForm';

import './trelloList.css';


export default function TrelloList() {
   const [title, setTitle] = useState('');
   const [id, setId] = useState();
   const [titles, setTitles] = useState([]);

   useEffect(() => {
     setTitle(title);

    axios.get('/cards')
    .then(( res ) => {
      setTitles( titles => [...res.data.map(titles => titles.title)]);
    })
    .catch((err) =>{
      console.log(err)
    })
  },[]);


  console.log(titles);


   return (
     <div className='listContainer'>
       <div style={styles.container}>
        <h4>saker att göra</h4>
        {titles.map((title, i ) => <div key={i}><TrelloCard title={title} /></div>)}
        <TrelloAddForm  title={title} setTitle={setTitle}/>
      </div>
      <div style={styles.container}>
       <h4>gör</h4>
       <TrelloCard />
       <TrelloAddForm  title={title} setTitle={setTitle}/>
      </div>
      <div style={styles.container}>
        <h4>klar</h4>
        <TrelloCard />
        <TrelloAddForm  title={title} setTitle={setTitle}/>
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
    marginBottom: 8,
    height: '100%',
  }
};
