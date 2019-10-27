const express = require('express');
const app = express();

const router = express.Router();
const employeeRouters = require('./routes/employeeRoute')

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());

app.use('/test', (req, res) => {
    res.send("Test route");
  });

app.use('/xx',(req,res)=>{
  res.send("Hello World form NodeJS express.");
});

//Route
app.use('/employee',employeeRouters);

router.get('/waka', (req, res) => {

  res.json({status: 'Employeed Saved'});

});

module.exports = router;


app.listen(app.get('port'),()=>{
  console.log("Start server on port "+app.get('port'))
})