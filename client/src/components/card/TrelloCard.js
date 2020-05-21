import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import {Link} from 'react-router-dom';
import CreatePortal from '../createportal/CreatePortal';


import './trelloCard.css';



export default function TrelloCard({card, description, date , id}) {
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
            <Link onClick={createPortalCard} to={`?card=${card}`} >{card}</Link>
          </Typography>
          <Typography  color="textSecondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
      <div>
      {createPortal && <CreatePortal card={card} description={description} date={date} id={id} setCreatePortal={setCreatePortal}/> }

      </div>
    </div>
   );
}
