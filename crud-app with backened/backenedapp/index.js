// importing express, mongoose and the modal
const express = require('express');
const mongoose = require('mongoose');
const productModel = require('./models/productSchema')
const cors = require('cors')

//intializing the express server
const app = express();
// the port on which the server is running
const PORT = process.env.PORT || 5000;


const BASE_URL = 'mongodb+srv://freeguy:freeguy123456@app1.saeex40.mongodb.net/test'
// connect our database mongoDB server
mongoose.connect(BASE_URL)
.then((resp)=> console.log ('MongoDB successfully connected'))
.catch((err)=> console.log("ERROR:",err))


// for getting body from server
app.use(express.json());
app.use(cros())

// single product
app.get('/api/products/product1', (request, response)=>{
    response.send("Single product");
})


//for getting all products from api
app.get('/api/products', (request, response)=>{
    //response.send("products api");

    productModel.find({}, (error, data) => {
        if (error) {
            response.send("ERROR:", error)
        }
        else {
            response.json({
                message: 'product successfully found',
                data,
            })
        }
    })
})


//for creating a new product
app.post('/api/products', (request, response)=>{
     console.log(request.body)
     
     productModel.create(request.body,(error, data)=>{
        if (error) {
            response.send("ERROR:", error);
        }
        else{
            response.json({
                Message: "product created successfully",
                data
            })
        }
    })
    // response.send(request.body)
    // response.send("post product");
})


// for updating an existing product 
app.put('/api/products', (request, response)=>{
    
    const id = request.body._id

    productModel.findByIdAndUpdate(id, request.body, {new: true}, (error, data) => {
        if (error) {
            response.send("ERROR:", error);
        }
        else {
            response.json({
                message: 'product successfully updated',
                data
            })
        }
    })
    //response.send("put product");
})


// for deleting a product or properties
app.delete('/api/products/:id', (request, response)=>{
    
    const { id } = request.params

    productModel.findByIdAndDelete(id, (error, data) => {
        if (error) {
            response.send("ERROR:", error);
        }
        else {
            response.json({
                message: 'product successfully deleted',
                data,
            })
        }
    })
    //response.send("delete product");
})

// this function is used for running the server
app.listen(PORT, ()=>console.log(`the server of uploading app is runing on ${PORT}`));
