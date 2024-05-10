import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material"
import StarIcon from '@mui/icons-material/Star';

function ReviewCard(props){
  return (
    <Box style={{padding: '50px'}}>

      <Card style={{padding: "24px"}}>

        <CardContent style={{minHeight: '150px'}}>

          {[...Array(props.stars)].map(() => <StarIcon />)}

          <Typography gutterBottom variant='h7' component='div' style={{paddingBottom: '10px'}}>
          {props.subject}
          </Typography>

          <Typography variant='body2'>
          {props.content}
          </Typography>

          <Typography variant='overline' color='text.secondary'>
          {props.name}
          </Typography>

        </CardContent>

      </Card>
      
    </Box>
  )
}




export default ReviewCard;