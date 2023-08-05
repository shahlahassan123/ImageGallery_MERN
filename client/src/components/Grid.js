import React from 'react'

const Grid = ({photos}) => {
  return (
    <>
    <h1>Photo Gallery</h1>
    <div className='grid'>
        {
            photos && photos.map(({photo,_id})=>
             <div className='grid-item' key={_id}>
                <img src={`http://localhost:3003/uploads/${photo}`} style={{width : "20rem" , height: "20rem"}}
                 alt="grid-img" />

             </div>
            )
        }

    </div>
    </>
  )
}

export default Grid
