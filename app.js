const express = require('express');

const app = express();

app.use(express.static(__dirname + "/public"));

app.get('/', (req,res) => {
	res.send('Hello World');
});


const PORT = 1337;
	app.listen(PORT, ()=> {
	console.log(`App listening in port ${PORT}`);
});
