const express = require('express');
const app = new express();

app.use(express.static(__dirname +'/dist/calculator'));

app.get('/',(req,res)=>{
	res.sendFile(__dirname +'/dist/app/index.html');
});


const PORT = process.env.PORT || 80;

app.listen(PORT,()=>{
	console.log('Server running at port ${PORT}');
});