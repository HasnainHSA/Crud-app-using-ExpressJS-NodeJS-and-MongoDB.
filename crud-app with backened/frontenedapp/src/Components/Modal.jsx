import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useState } from 'react';
import Icons from "./MenuAppBar"
import {useDispatch} from 'react-redux';
import { createProducts } from '../store/Postslice';

const Profile = () => {

const dispatch = useDispatch()


  // getting data from the inputfields
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [price, setPrice] = useState()
  
   console.log(title)
  
 //

 const addProduct=()=>{
  const obj={
    title,
    description,
    price,
  }
  dispatch(createProducts(obj))
 }



// for modal open  close state
    const [modal, setmodal] = useState(false)
  return (
    <>
    <Modal size='1g' isOpen={modal} toggle={()=> setmodal(!modal)}>
        <ModalHeader toggle={()=> setmodal(!modal)}>
            PopUp
        </ModalHeader>
   
    <ModalBody>
   
      <label >Title:</label>

    <input  type="text" placeholder="Enter the title" onChange={(e)=>setTitle(e.target.value)} />

    <br/><br/>

      <label >Description:</label>

      <input type="text" placeholder="Enter the product" onChange={(e)=>setDescription(e.target.value)} />

      <br/><br/>

     <label >Price:</label>

    <input type="number" placeholder="Enter the price"  onChange={(e)=>setPrice(e.target.value)} />

    <br/><br/>
      <Button variant="success" type="submit" onClick={addProduct}>
    Add Product
      </Button >


    </ModalBody>
    </Modal>
    <Button className='btn mt-3' style={{
        backgroundColor: "blue" ,
        color: "white"
    }} 
    onClick={()=> setmodal(true)}
    >
     Open Modal
    </Button>
    </>
  )
}

export default Profile