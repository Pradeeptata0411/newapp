import {Card, CardContent} from "@material-ui/core";
import Avatar from '@mui/material/Avatar';
import { Typography } from "@mui/material";
import m from'./images/rd.jpg';

function CCard() {
  return (
    <Card style ={{width :300,height:450,marginLeft:500,marginRight:180,marginTop:100}}>
      
      <CardContent>
          <Avatar 
        alt="Remy Sharp"
        src={m}
        sx={{ width: 180, height: 170,marginLeft:5 }}
      /><Typography variant='h7'>
     <h2> KL University</h2>
            <h3>T.Pradeep</h3>
            <h3>2100030875</h3>
            <h4>B.Tech 2nd year</h4>
          CSE Department,<br/>KL University,
          Andrapradesh
       
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CCard;