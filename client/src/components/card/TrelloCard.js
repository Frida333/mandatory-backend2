import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import './trelloCard.css';


export default function TrelloCard({title}) {



   return (
     <Card
     style={{
       minWidth: 272,
       padding: '6px 8px 2px',
       marginTop: 8,
     }}>
      <CardContent>
         <Typography gutterBottom>
          {title}
         </Typography>
      </CardContent>
    </Card>
   );
}
