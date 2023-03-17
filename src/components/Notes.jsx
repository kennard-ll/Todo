import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BasicModal from './Modal';

export default function Notes({title, id, delNote }) {
  return (
    <Card sx={{ marginTop: "50px", maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="100%"
        image="https://clickup.com/blog/wp-content/uploads/2020/01/note-taking.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => handleOpen(id, name)} size="small">Edit</Button>
        <Button onClick={() => delNote(id)} size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}