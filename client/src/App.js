import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Button from './components/Button'
import Grid from './components/Grid'
import axios, * as others from 'axios';


const App = () => {

  const [photos, setPhotos] = useState([]);
  const [updateUI, setUpdateUI] =useState(false);

  useEffect(()=>{
    axios.get("http://localhost:3003/api/get").then(res=>{
      console.log("GET", res)
      setPhotos(res.data)
    }
    ).catch(err=>console.log(err))

  },[updateUI])


  return (
    <div className='App'>

      <Navbar/>
      <Grid photos={photos} />
      <Button setUpdateUI={setUpdateUI}/>
    </div>
  )
}

export default App
