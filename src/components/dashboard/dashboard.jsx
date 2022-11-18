import { Drawer } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Drawer1 from '../../pages/drawer/drawer'
import Header from '../../pages/header/Header'
import Headermui from '../../pages/headermui/Headermui'
import TakeNote1 from '../../pages/takenote1/TakeNote1'
import TakeNote2 from '../../pages/takenote2/TakeNote2'
import TakeNote3 from '../../pages/takenote3/TakeNote3'
import { getNotesList } from '../../services/dataService'
import "../dashboard/dashboard.css"
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  middle: {
    maxWidth: '80vw',
    height: "auto",
    border: "0px solid red",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: '250px !important',
    justifyContent: 'flex-start',
    flexGrow:'1',
  }
})

function Dashboard() {
  const classes = useStyles()

  const [toggle, setToggle] = useState(false)

  const [toggle1, setToggle1] = useState(false)

  const [noteChoice, setNoteChoice] = useState("Notes")

  const listenToDrawer = (hover) => {
    setNoteChoice(hover)
  }

  const [noteList, setNoteList] = useState([])
  const listenToNote1 = () => {
    setToggle(true)
  }

  const listenToNote2 = () => {
    setToggle(false)
  }

  useEffect(() => {
    getNote()
  }, [noteChoice])

  const autoRefresh = () => {
    getNote()
  }

  const getNote = () => {
    getNotesList().then((response) => {
      let filterNotes = []
      if (noteChoice === 'Archive') {
        filterNotes = response.data.data.data.filter((notes) => {
          if (notes.isArchived === true && notes.isDeleted === false) {
            return notes
          }
        })
      }
      else if (noteChoice === 'Notes') {
        filterNotes = response.data.data.data.filter((notes) => {
          if (notes.isArchived === false && notes.isDeleted === false) {
            return notes
          }
        })
      }
      // else if(noteChoice==='Archive'){
      //   filterNotes=response.data.data.data.filter((notes)=>{
      //     if(notes.isArchived===true && notes.isDeleted===false){
      //       console.log(notes,'filtered archive notes')
      //       return notes
      //     }
      //   })
      // }
      else if (noteChoice === "Trash") {
        filterNotes = response.data.data.data.filter((notes) => {
          if (notes.isArchived === false && notes.isDeleted === true) {
            return notes
          }
        })
      }
      console.log(response)
      setNoteList(filterNotes)
      console.log(filterNotes, "addedfilter")
    })
      .catch((error) => {
        console.log(error)
      })
  }
  const listenToHeader1 = () => {
    setToggle1(!toggle1)
  }

  return (
    <div>
      <Headermui listenToHeader1={listenToHeader1} />

      <Drawer1 toggle1={toggle1} listenToDrawer={listenToDrawer} />

      <div>
        {
          toggle ? <TakeNote2 listenToNote2={listenToNote2} /> : <TakeNote1 listenToNote1={listenToNote1} />
        }

        <Grid container spacing={1} className={classes.middle}>
          {
            noteList.map((note) => (<Grid item lg={2.9} md={4} xs={12} sm={6} ><TakeNote3 note={note} autoRefresh={autoRefresh} /></Grid>))
          }
        </Grid>
      </div>
    </div>
  )
}

export default Dashboard
