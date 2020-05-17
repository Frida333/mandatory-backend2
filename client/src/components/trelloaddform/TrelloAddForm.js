import React, {useState, useEffect} from 'react';
import AddIcon from '@material-ui/icons/Add';
import TextareaAutosize from 'react-textarea-autosize';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';
import queryString from 'query-string';
import {Link} from  'react-router-dom';

export default function TrelloAddForm({title, setTitle, titles}) {
  const [openForm, setOpenForm] = useState(false);


  function renderButton(){
    return (
      <div style={styles.addButtonForm}
       onClick={getOpenForm}
      >
       <AddIcon>Add</AddIcon>
       <p>Add another card</p>
      </div>
    );
  }

  function getOpenForm(){
    setOpenForm(true);
  }

  function getCloseForm(){
    setOpenForm(false);
  }

  function handleInput(e){
    e.preventDefault();
    setTitle(e.target.value)
  }

  function onSubmit(e){
  e.preventDefault();

  axios.post('/cards', {
    title: title,
  })
    .then((response) => {
        setTitle(title);
    })
    .catch(err => {
        console.log(err);
    });
  }


  function renderForm(){
   return (
     <div >
      <form onSubmit={(e) => onSubmit(e) }>
      <Card
       style={{
         minHeight: 80,
         minWidth: 272,
         padding: '6px 8px 2px',
         marginTop: 8,
       }}>
        <TextareaAutosize
          placeholder= "Enter a title for this card..."
          autoFocus
          onClick={getCloseForm}
          value={title}
          onChange={handleInput}
          style ={{
            resize: 'none',
            width: '100%',
            outline: 'none',
            border: 'none',
            overflow: 'hidden',
          }}
        />
      </Card>
        <div style={styles.formButton}>

          <Button
            type= 'submit'
            variant='contained'
            style= {{color: 'white', backgroundColor: '#2f4f4f'}}
            >
            Add a card

          </Button>
          <CloseIcon style={{marginLeft: 8, cursor: 'pointer'}} onClick={getCloseForm}>Close</CloseIcon>
        </div>
        </form>
     </div>
   )
  }

   return (
     (openForm) ? renderForm() : renderButton()
   );
}

const styles = {
  addButtonForm: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 3,
    height: 36,
    width: 272,
    paddingLeft: 10,
    opacity: 0.5,
    color: 'inherit',
    backgroundColor: 'inherit',
  },
  formButton: {
    display: 'flex',
    marginTop: 8,
    alignItems: 'center',
  }
};
