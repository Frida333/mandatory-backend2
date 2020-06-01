import React,{useState} from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import {Link} from 'react-router-dom';
import CreatePortal from '../createportal/CreatePortal';

import './trelloCard.css';


export default function TrelloCard({cardTitle, date , id, setCards, cardDescription, listId , getCards, listTitle, lists}) {
  const [createPortal, setCreatePortal] = useState(false);

  function createPortalCard(){
    setCreatePortal(true);
  }

  return (
    <div>
      <Card
        style={{
          minWidth: 27,
          padding: '6px 8px 2px',
          marginTop: 8,
        }}>
        <CardContent>
          <Typography>
            <Link onClick={createPortalCard} to={`?card/${cardTitle}`} >{cardTitle}</Link>
          </Typography>
          <Typography  color="textSecondary">
            {cardDescription}
          </Typography>
        </CardContent>
      </Card>
      <div>
        {createPortal && <CreatePortal cardTitle={cardTitle} cardDescription={cardDescription} date={date} id={id} setCreatePortal={setCreatePortal}
          listId={listId} getCards={getCards} listTitle={listTitle} lists={lists}
        />}
      </div>
    </div>
  );
}
