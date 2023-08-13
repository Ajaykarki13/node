//importing mongoose using node.js
const mongoose = require('mongoose');
const userSchema = require('./userSchema'); // Use 'require' for CommonJS modules

//importing express
const express = require('express')
const app = express()
const port = 8000

//middlewares
app.use(express.json());  //for parsing json data
app.use(express.urlencoded({extended:true}));  //for parsing url-encoded data
/////

//creating api endpoints
app.get('/', (req, res) => {
  res.send('Hello World!')
})
//
app.get('/myform',(req,res)=>{
   return res.send(
   // In the form, the name attributes of the input fields should match the property
   // names in your Schema.     
    `
    <body>
    <form action='/register' method="POST">
    <input type='text' name='name' placeholder='name' />
    <input type='email' name='email' placeholder='email' />
    <input type='number' name='tele' placeholder='teleno.' />
    <input type='password' name='password' placeholder='password' />
    <button type="submit">Submit</button>
    </form>
    </body>
    `
   )
})

app.post('/register',async(req,res)=>{
   // utilizing mongoose model data
   try{
    console.log(req.body);
const {name,email,password,tele} = req.body;
    const user = new userSchema({
        //right side req.body ke variable or we can write req.body.name left side ke schema
        name : req.body.name,
        email : email,
        password : password,
        tele : tele,
    })
  await user.save();
  console.log(user)
    return res.send({message:'registration succesful',status:201})
}
catch (error) {
    console.error(error);
    return res.status(500).send('Error during registration');
  }

})

//mongodb connection

const mongo_URI = `mongodb+srv://ajayMongo:ajaymongodbkarki@cluster0.mzwwrj3.mongodb.net/firstdatabase`

mongoose.connect(mongo_URI).then(()=>{
    console.log('mongodb connected yayy!!')
}).catch((err)=>{
    console.log(err)
})

//start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

