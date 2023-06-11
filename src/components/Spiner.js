import React from 'react'
import loading from "../loading.gif"
const Spinner=()=>{
  
    return (
      <div style={{display:"flex" , justifyContent:"center"}}>
        <img src={loading} alt="blank" />
      </div>
    )
  
}
export  default Spinner
