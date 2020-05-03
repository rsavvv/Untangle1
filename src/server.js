const express = require('express');
const app = express();
var bodyParser = require('body-parser');
 var mongo = require('mongoose');
var mongoConnection = "mongodb+srv://rsavvv:Founders2020@cluster0-gws6a.gcp.mongodb.net/database1?retryWrites=true&w=majority";
//var mongoConnection = "mongodb://localhost:27017/AngularCRUD";
var db = mongo.connect(mongoConnection,function(err,res){
	if(err){console.log(err);}
	else{console.log("connected to: " + db + res);}
});

app.use(function(req,res,next){
	res.setHeader('Access-Control-Allow-Origin','*'); //http://localhost:3000,
	res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT,PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers','*');
	res.setHeader('Access-Control-Allow-Credentials','true');
	next();
});

var Schema = mongo.Schema; 

var UserSchema = new Schema({
	name:{type:String}, 
	email:{type:String}
})
var userModel = mongo.model('users', UserSchema, 'users');


app.post('/api/saveUser', function (req, res) {
	var query = {'email': "'email':'test@test.com'"};
	var mod = {'name':'test', 'email':'test@test.com'}; 
	 userModel.findOneAndUpdate(query,mod, {upsert: true}, function(err,doc) {
		    if (err){
		    	console.log(err);
		    } //return res.send(500, {error: err});
		    else{
		    	if(doc){
		    		res.send({data:"already exist"});

		    	}
		    	else{
		    		res.send({data:"Added"});
		    	}
		    	
		    }
		});
})

app.listen(8001); 