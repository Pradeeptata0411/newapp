import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import dr from './images/dress1.jpg'
import dr2 from './images/dress2.jpg'
import dr3 from './images/dress3.jpg'
import dr4 from './images/dress4.jpg'
import dr5 from './images/kurta.jpg'
function Fashion() {
  const fable=[{
    "img":<img src={dr} width="200" height="200" />,
    "Category":"Men",
    "Cloth":"Rayon",
    "Colour":"Black",
    "Price":1000,
    "Discount":"20%",
    "Available":"true"

  },
  {
    "img":<img src={dr2} width="200" height="200" />,
    "Category":"Men",
    "Cloth":"Cotton",
    "Colour":"White",
    "Price":600,
    "Discount":"15%",
    "Available":"true"
  },
  {
    "img":<img src={dr3} width="200" height="200" />,
    "Category":"Men",
    "Cloth":"Silk",
    "Colour":"Multi colour",
    "Price":1500,
    "Discount":"5%",
    "Available":"true"
  },
  {
    "img":<img src={dr4} width="200" height="200" />,
    "Category":"Men",
    "Cloth":"Nylon",
    "Colour":"Orange",
    "Price":999,
    "Discount":"0%",
    "Available":"true"
  },
  {
    "img":<img src={dr5} width="200" height="200" />,
    "Category":"Men",
    "Cloth":"Nylon",
    "Colour":"blue",
    "Price":5000,
    "Discount":"15%",
    "Available":"true"
  }

]
return(
  <div class="column"> 
   <hr width="50%" size="3" /><h1>Welcome to Ezy Shop</h1><hr width="50%" size="3" />
<Box p={10}>
<Grid  container justifyContent="center" spacing={2}>
{fable.map((Fash) => (<Grid item>
  <Paper key={Fash.id} sx={{height:400 , width:250}}>
    <h5 key={Fash.id}>{Fash.img}<br/> Category:{Fash.category}<br/>
Cloth type:{Fash['cloth type']}<br/>Colour:{Fash.color}<br/> 
Price : {Fash.price}<br/>discount : {Fash.discount}<br/>
<br></br>
<Button variant="contained">BUY NOW</Button>
</h5></Paper>
</Grid>))}
</Grid>
</Box>
</div>
  )
}

export default Fashion