import React, {useState} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import CloseIcon from '@material-ui/icons/Close';
import {Link} from 'react-router-dom';


import './createPortal.css'


export default function infoPortal({card, id, date, setCreatePortal}){


  function onSubmit(e){
    e.preventDefault();
  }

  function getCloseForm(){
    setCreatePortal(false);
  }

  function onClickDeleteCard(e,id){
    e.preventDefault();
    axios.delete(`/cards/${id}`, {
    })
      .then((res)=>{
    })
      .catch((err) => {
    });
  }


  return ReactDOM.createPortal((
    <div className='modal'>
      <div className='info'>
        <Link to='/'><CloseIcon style={{marginLeft: 8, cursor: 'pointer'}} onClick={getCloseForm}>Close</CloseIcon></Link>

        <h3>{card}</h3>
        <p>Skapades {date}</p>
      </div>
      <div className='deletebutton'>
        <button onClick={(e) => onClickDeleteCard(e, id) }>Ta bort {card}</button>
      </div>

    </div>
  ),document.body);
}
