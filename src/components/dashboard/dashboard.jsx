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

function Dashboard() {

  const [toggle, setToggle] = useState(false)

  const[toggle1, setToggle1]= useState(false)

  const[noteChoice, setNoteChoice] = useState("Notes")

  const listenToDrawer=(hover)=>{
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
  },[noteChoice])

  const getNote = () => {
    getNotesList().then((response) => {
      let filterNotes=[]
      if(noteChoice==='Archive'){
        filterNotes=response.data.data.data.filter((notes)=>{
          if(notes.isArchived===true && notes.isDeleted===false){
            return notes
          }
        })
      }
      else if(noteChoice==='Notes'){
        filterNotes=response.data.data.data.filter((notes)=>{
          if(notes.isArchived===false && notes.isDeleted===false){
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
      else if(noteChoice==="Trash"){
        filterNotes=response.data.data.data.filter((notes)=>{
          if(notes.isArchived===false && notes.isDeleted===true){
            return notes
          }
        })
      }
      console.log(response)
      setNoteList(filterNotes)
      console.log(filterNotes,"addedfilter")
    })
      .catch((error) => {
        console.log(error)
      })
  }
  const listenToHeader1=()=>{
    setToggle1(!toggle1)
  }

  return (
    <div>
      <Headermui  listenToHeader1={listenToHeader1}/>
      
      <Drawer1 toggle1={toggle1} listenToDrawer={listenToDrawer}/>

      <div>
        {
          toggle ? <TakeNote2 listenToNote2={listenToNote2} /> : <TakeNote1 listenToNote1={listenToNote1} />
        }

        <div className='middele' style={{ width: "80vw", height: "60vh", border: "0px solid black", display: "flex", flexDirection: "row", flexWrap: "wrap", position: "relative", left: "250px" }}>
          {
            noteList.map((note) => (<TakeNote3 note={note} getNote={getNote} />))
          }
        </div>
      </div>
    </div>
  )
}

export default Dashboard
