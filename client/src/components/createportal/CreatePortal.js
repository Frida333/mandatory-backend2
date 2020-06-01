import React, {useState} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import CloseIcon from '@material-ui/icons/Close';
import {Link} from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import FocusTrap from "focus-trap-react";

import './createPortal.css'



export default function CreatePortal({cardTitle, id, date,  cardDescription ,listId, setCreatePortal, getCards, listTitle, lists}){
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newListId, setNewListId]= useState(null );



  function onSubmitCard(e, id){
    e.preventDefault();
    let descriptionValue=newDescription;
    let titleValue=newTitle;
    let listIdValue = newListId;
      if(!newDescription){
        descriptionValue=cardDescription
      }
      if(!newTitle){
        titleValue=cardTitle;
      }
      if(!newListId){
        listIdValue=listId
      }
    axios.put(`/cards/${id}`,{
      card: {
        listId: listIdValue,
        title: titleValue,
        description: descriptionValue,
        date: date,
      }
    })
    .then((data) => {
      getCards();
      setCreatePortal(false);
    })
    .catch(err => {
      console.log(err);
    });
  }

  function onChangeList(e){
    e.preventDefault();
    setNewListId(e.target.value)
  }

  function getCloseForm(){
    setCreatePortal(false);
  }

  function onClickDeleteCard(e,id){
    e.preventDefault();
    axios.delete(`/cards/${id}`, {
    })
      .then((res)=>{
        getCards();
    })
      .catch((err) => {
    });
  }

  return ReactDOM.createPortal((
    <FocusTrap>
      <div className='modal'>
        <div className="closeForm">
          <Link to='/'><CloseIcon onClick={getCloseForm}>Close</CloseIcon></Link>
        </div>
        <div className='info'>
          <h3>{cardTitle}</h3>
          <div className="edit">
            <form onSubmit={(e) => onSubmitCard(e, id)}>
              <Card
                style={{
                  minHeight: 80,
                  maxWidth: 300,
                }}>
                <TextareaAutosize
                  placeholder= "Edit this title..."
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  style ={{
                    resize: 'none',
                    outline: 'none',
                    border: 'none',
                    overflow: 'hidden',
                    marginTop: '8px'
                  }}
                />
                <TextareaAutosize
                  placeholder= "Edit description..."
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  style ={{
                    resize: 'none',
                    outline: 'none',
                    border: 'none',
                    overflow: 'hidden',
                    marginTop: '8px'
                  }}
                />
                </Card>
                  <Button
                    variant='contained'
                    style= {{color: 'white', backgroundColor: '#2f4f4f', marginTop:'5px'}}
                    type='submit'>Send
                  </Button>
              </form>
            </div>
            <div className="move">
              <div className="dropdown">
                <Button variant='contained'
                  style= {{color: 'white', backgroundColor: '#2f4f4f'}}>Move your card
                </Button>
                <div className="dropdown-content">
                  <select id="select" name="select" onClick={(e) => onChangeList(e)}>
                    {lists.map((list, index) => {
                      return(
                        <option className="option" value={list.id} key={index}>{list.title}</option>
                      )
                    })}
                  </select>
                </div>
              </div>
              <Button onClick={(e) => onSubmitCard(e, id ) }>Send</Button>
          </div>
        <div >
          <Button
            variant='contained'
            style= {{color: 'white', backgroundColor: '#2f4f4f'}}
            onClick={(e) => onClickDeleteCard(e, id) }>Delete {cardTitle}
          </Button>
          </div>
            <div>
              <p className='date'>Created {date}</p>
            </div>
        </div>
      </div>
    </FocusTrap>
  ),document.body);
}
