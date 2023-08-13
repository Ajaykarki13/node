const mongoose = require('mongoose');
const {Schema} = mongoose;

//creating schema
//const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
  name: {type:String,require:true},
  email: {type:String,require:true},
  password: {type:String,require:true},
  //date: {type:Date,default: Date.now},
  tele:{type:Number}
});

//converting schema into model to use it

 //const Blog = mongoose.model('Myblog',BlogPostSchema)
//export default Blog
  module.exports = mongoose.model('User',userSchema)