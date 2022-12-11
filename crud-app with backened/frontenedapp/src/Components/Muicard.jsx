import React from 'react'
import Button24 from '../Components/Button'
import {Box, Card, CardContent, Typography, CardActions, Button, CardMedia} from "@mui/material"
import {Grid} from "@mui/material"
import {useState, useEffect} from "react"
import axios from 'axios'

const Muicard = () => {

     // getting data from the inputfields
   const [newtitle, setnewTitle] = useState()
   const [newdescription, setnewDescription] = useState()
   const [newprice, setnewPrice] = useState()

  return (
    <>
   <Grid container my={4} spacing={2} p={2}>
    
     <Grid item xs={12} sm={6} md={3}><Card>
     <CardMedia
            component='img'
            height='140'
            image="http://source.unsplash.com/random"
            />  
        <CardContent>
            <Typography gutterBottom variant='h5' component="div">
                Product 2
            </Typography>
            <Typography variant='body2' color='text.secondary'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis id dolor dolores dignissimos accusantium itaque nobis inventore cumque alias adipisci. Magnam vel omnis sint debitis assumenda iure quia tempora placeat?
            </Typography>
        </CardContent>
        <CardActions>
        <Button24 text="Edit" bg="green"/> 
           <Button24 text="Delete" bg="red"/>
        </CardActions>
     </Card></Grid>

     <Grid item xs={12} sm={6} md={3}><Card>
     <CardMedia
            component='img'
            height='140'
            image="http://source.unsplash.com/random"
            />  
        <CardContent>
            <Typography gutterBottom variant='h5' component="div">
                Product 3
            </Typography>
            <Typography variant='body2' color='text.secondary'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis id dolor dolores dignissimos accusantium itaque nobis inventore cumque alias adipisci. Magnam vel omnis sint debitis assumenda iure quia tempora placeat?
            </Typography>
        </CardContent>
        <CardActions>
        <Button24 text="Edit" bg="green"/> 
           <Button24 text="Delete" bg="red"/>
        </CardActions>
     </Card></Grid>

     <Grid item xs={12} sm={6} md={3}><Card>
     <CardMedia
            component='img'
            height='140'
            image="http://source.unsplash.com/random"
            />  
        <CardContent>
            <Typography gutterBottom variant='h5' component="div">
                Product 4
            </Typography>
            <Typography variant='body2' color='text.secondary'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis id dolor dolores dignissimos accusantium itaque nobis inventore cumque alias adipisci. Magnam vel omnis sint debitis assumenda iure quia tempora placeat?
            </Typography>
        </CardContent>
        <CardActions>
        <Button24 text="Edit" bg="green"/> 
           <Button24 text="Delete" bg="red"/>
        </CardActions>
     </Card></Grid>
    
   </Grid>






    </>

  )
}

export default Muicard