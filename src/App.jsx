import React, { useState } from "react";
import Card from "./components/Notes"
import { Button, TextField, Grid } from '@mui/material';




const add = [
  {
    id: 1,
    title: "Monday",
  },
  {
    id: 2,
    title: "Tuesday",
  },
  {
    id: 3,
    title: "Wednesday",
  },
  {
    id: 4,
    title: "Thursday",
  },
];









const App = () => {

  const [note, setNote] = useState(add)

  const submit = (event) => {
    event.preventDefault()

    let notes = {
      id: Math.random()
    }


    let fd = new FormData(event.target)

    fd.forEach((value, key) => {
      notes[key] = value
    })

    setNote([...note, notes])
    console.log(notes)
  }



  const  delNote = (id) => {
    let filtered = note.filter(el => el.id !== id)

    setNote(filtered)
  } 


  return (
    <>
      <center>
        <form className="mt-[20px]" onSubmit={submit} >
          <TextField sx={{ width: "30rem", }} fullWidth label="Add Note" name='title' />
          <Button type='submit' variant="contained" sx={{ height: "46px", marginLeft: "20px", backgroundColor: "#7571d7" }} >Create</Button>
        </form>

        <Grid container rowSpacing={1} columnSpacing={1} >
          {
            note.map((item) => (
              <Grid item xs={4} key={item.id}>
                <Card {...item} delNote={delNote} />
              </Grid>
            ))
          }
        </Grid>
      </center>

    </>
  );
}

export default App;