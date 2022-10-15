import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import a from './images/dlap.jpg'
import b from './images/hplap.jpg'
import c from './images/lenlap.jpg'
import d from './images/mac.jpg'
import e from './images/asus.jpg'
function Laptop() {
  const lapi=[{ 
    "img":<img src={a} width="200" height="200"/>, 
  "model":14, 
  "name":"dell laptop", 
  "price":"$25400/-", 
  "available":true
  },
  { 
    "img":<img src={b} width="200" height="200"/>, 
  "model":5, 
  "name":"HP laptop", 
  "price":"$7500/-", 
  "available":false 
  },
  { 
    "img":<img src={c} width="200" height="200"/>, 
  "model":7, 
  "name":"dell laptop", 
  "price":"$3400/-", 
  "available":true
  },
  { 
    "img":<img src={d} width="200" height="200"/>, 
  "model":7, 
  "name":"mac book  laptop", 
  "price":"$60000/-", 
  "available":true
  }
  ,
  { 
    "img":<img src={e} width="200" height="200"/>, 
  "model":7, 
  "name":"ASUS laptop", 
  "price":"$5600/-", 
  "available":true
  }
]
return(
  <div class="column">
        <Grid  container justifyContent="center" spacing={2}> 
      {lapi.map((l) =>
      (<Grid item>
        <Paper key={l.id} sx={{height:400 , width:250}}>
       <h4 key={l.id}>{l.img}<br/> Model Number:{l.model}<br/>
      Model Name:{l.name}<br/>Price:{l.price}<br/> 
      <br></br>
      <Button variant="contained">BUY NOW</Button>
      </h4>
      </Paper>
      </Grid>))}   
        </Grid>  
      </div>
  )
}

export default Laptop