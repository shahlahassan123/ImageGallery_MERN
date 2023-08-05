import React from 'react'
import { AiFillPlusCircle } from "react-icons/ai";
import axios, * as others from 'axios';

const Button = ({setUpdateUI}) => {
  
  const handleChange = e =>{
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("photo", e.target.files[0]);

    axios.post("http://localhost:3003/api/save", formData)
    .then(res=>{
        console.log("POST ",res.data)
        setUpdateUI(res.data._id)
    }).catch(err=>console.log(err))


  }



  return (

      <label htmlFor='file_picker' className='button'>
        <AiFillPlusCircle/>
        <input hidden type="file" name="file_picker"
         id="file_picker" onChange={e=>handleChange(e)}></input>
      </label>

  )
}

export default Button
