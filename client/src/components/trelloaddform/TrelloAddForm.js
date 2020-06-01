import React, {useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
import TextareaAutosize from 'react-textarea-autosize';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import moment from 'moment';
import axios from 'axios';


export default function TrelloAddForm({listId, getCards}) {
  const [openForm, setOpenForm] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

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
    setTitle(e.target.value);
  }

  function handleInputDescription(e){
    e.preventDefault();
    setDescription(e.target.value);
  }

  function onSubmit(e){
    e.preventDefault();
    let date = moment(title.created_at).format('YYYY-MM-DD HH:mm');
    axios.post('/cards', {
      card: {
        listId: listId,
        title: title,
        description: description,
        date: date,
      }
    })
    .then((data) => {
      setTitle("");
      setDescription("")
      getCards()
    })
    .catch(err => {
      console.log(err);
    });
  }


  function renderForm(){
    return (
      <div>
        <form onSubmit={(e) => onSubmit(e)}>
          <Card
             style={{
               minHeight: 70,
               minWidth: 200,
               padding: '6px 8px 2px',
               marginTop: 8,
             }}>
             <TextareaAutosize
                placeholder= "Enter a title for this card..."
                value={title}
                onChange={handleInput}
                required
                style ={{
                  resize: 'none',
                  width: '100%',
                  outline: 'none',
                  border: 'none',
                  overflow: 'hidden',
                }}
              />
              <TextareaAutosize
                placeholder= "Add description..."
                value={description}
                onChange={handleInputDescription}
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
    width: 200,
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
