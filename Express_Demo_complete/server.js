var express = require('express');  
var path = require("path");   
var bodyParser = require('body-parser');  
var mongo = require("mongoose");  
  
var db = mongo.connect("mongodb://localhost:27017/AngularCRUD", function(err, response){  
   if(err){ console.log( err); }  
   else{ console.log('Connected to ' + db, ' + ', response); }  
});  
  
   
var app = express()  
app.use(bodyParser());  
app.use(bodyParser.json({limit:'5mb'}));   
app.use(bodyParser.urlencoded({extended:true}));  
   
  
app.use(function (req, res, next) {        
     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');    
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');      
     res.setHeader('Access-Control-Allow-Credentials', true);       
     next();  
 });  
  
 var Schema = mongo.Schema;  
  
var UsersSchema = new Schema({      
 name: { type: String   },       
 address: { type: String   },   
},{ versionKey: false });  
   
  
var model = mongo.model('users', UsersSchema, 'users');  
  
app.post("/api/SaveUser",function(req,res){   
 var mod = new model(req.body);  
 if(req.body.mode =="Save")  
 {  
    mod.save(function(err,data){  
      if(err){  
         res.send(err);                
      }  
      else{        
          res.send({data:"Record has been Inserted..!!"});  
      }  
 });  
}  
else   
{  
 model.findByIdAndUpdate(req.body.id, { name: req.body.name, address: req.body.address},  
   function(err,data) {  
   if (err) {  
   res.send(err);         
   }  
   else{        
          res.send({data:"Record has been Updated..!!"});  
     }  
 });  
  
  
}  
 })  
  
 app.post("/api/deleteUser",function(req,res){      
    model.remove({ _id: req.body.id }, function(err) {    
     if(err){    
         res.send(err);    
     }    
     else{      
            res.send({data:"Record has been Deleted..!!"});               
        }    
 });    
   })  
  
  
  
 app.get("/api/getUser",function(req,res){  
    model.find({},function(err,data){  
              if(err){  
                  res.send(err);  
              }  
              else{                
                  res.send(data);  
                  }  
          });  
  })  
  
  
app.listen(8080, function () {  
    
 console.log('Example app listening on port 8080!')  
})  

//  These are for the restful api 


// const Joi = require('joi');
// const express = require("express");
// const app = express();

// app.use(express.json());


// const courses = [
//     { id: 1, name: 'course 1'},
//     { id: 2, name: 'course 2'},
//     { id: 3, name: 'course 3'},
//     { id: 4, name: 'course 4'}
// ]
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/api/courses", (req, res) => {
//     res.send(courses)
// //   res.send(course);
// });

// app.get("/api/courses/:id", (req, res) => {
//   const course = courses.find(c => c.id === parseInt(req.params.id))
//   if(!course) res.status(404).send('The course with the given ID was not found')
//   res.send(course);
// });

// app.post('/api/courses', (req, res) => {
//     const { error } = validateCourse(req.body);
//     if (error){
//         res.status(400).send(error.details[0].message);
//         return;
//     }

//     const course = {
//         id: courses.length + 1,
//         name: req.body.name
//     };
//     courses.push(course);
//     res.send(course);
// });


// app.put('/api/courses/:id', (req, res) => {
//     const course = courses.find(c => c.id === parseInt(req.params.id))
//     if(!course) res.status(404).send('The course with the given ID was not found')
//     const result = validateCourse(req.body);
//     const { error } = validateCourse(req.body);
//     if (error){
//         res.status(400).send(error.details[0].message);
//         return;
//     }
//     course.name = req.body.name;
//     res.send(course);
// });

// app.delete('/api/courses/:id', (req, res) => {
//     const course = courses.find(c => c.id === parseInt(req.params.id))
//     if(!course) res.status(404).send('The course with the given ID was not found')

//     const index = courses.indexOf(course);
//     courses.splice(index, 1);
//     res.send(course);
// });


// function validateCourse(course){
//     const schema = {
//         name: Joi.string().min(3).required()
//     };
//     return Joi.validate(course, schema);

// }
// const port = process.env.PORT || 8000;

// app.listen(port, () => console.log(`Now Listening on port no ${port} `));
