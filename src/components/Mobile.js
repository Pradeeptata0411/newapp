import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import w from './images/iphone.jpg'
import x from './images/rd.jpg'
import z from './images/download.jpg'
function Mobile() {
    const mble=[{ 
      
      "img":<img src={w} width="200" height="200"/>, 
    "model":14, 
    "name":"iPhone", 
    "price":"$1500/-", 
    "available":false 
  },
  { 
    "img":<img src={z} width="200" height="200"/>, 
    "model":9, 
    "name":"OnePlus", 
    "price":"Rs. 50,000/-", 
    "available":true 
},
{"img":<img src={x} width="200" height="200"/>, 
    "model":"10x prime", 
    "name":"Redmi",
    "price":"Rs. 30,000/-", 
    "available":true 
}
  ]
    
  return (
    <div class="phone">
        <hr width="50%" size="3" /><h1>Welcome to Ezy Shop</h1><hr width="50%" size="3" />
      <Box p={10}>
      <Grid  container justifyContent="center" spacing={2}>
              {mble.map((m)=>(<Grid item>
               <Paper key={m.id} sx={{height:300 , width:250}}>
                   {m.img}<br/>{m.Name}<br/>
                   <h6>modal:{m.modal}<br/>price:{m.price}<br/>available:{m.available ? "Yes":"No"}</h6>
                   <Button variant="contained">BUY NOW</Button>
               </Paper>
              </Grid>))}
          </Grid>
     </Box>
    </div>
)
};

export default Mobile