import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import './trelloCard.css';



export default function TrelloCard({card, description, date}) {
  return (
    <div>
      <Card
        style={{
          minWidth: 27,
          padding: '6px 8px 2px',
          marginTop: 8,
        }}>
        {date}
        <CardContent>
          <Typography>
            {card}
          </Typography>
          <Typography  color="textSecondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
   );
}
