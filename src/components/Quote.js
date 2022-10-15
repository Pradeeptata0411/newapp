import React from 'react' 
import { Button } from '@mui/material' 
import axios from "axios"; 
import {useState} from 'react'  
function Quote() { 
    const [quote,setQuote]=useState('')  
    const getQuote=()=>{  
        axios.get('https://api.quotable.io/random')  
        .then(res=>{  
            setQuote(res.data.content)  
  
        }).catch(err=>{  
            console.log(err)  
  
        })  
    } 
  return ( 
    <div>  
        <Button
        color = 'secondary' variant="contained" 
        onClick={getQuote}>Generate Quote</Button>  
        <p>{quote}</p></div>  
  ) 
 
} 
 
export default Quote