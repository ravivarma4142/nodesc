const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
const formRoute = require('./routes/form');
const successRoute = require('./routes/success');
const { json } = require('body-parser');

const port = 3000;
app.set("view engine","html");

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
nunjucks.configure(['views'],{
    autoescape:false,
    express:app,
    cache:false
})

app.use('/',formRoute);
app.post('/user-data', (req,res)=>{

    const data = Object.assign({},req.body);
    // const keys = Object.keys(data);
    // let error = false;
    // for(let i=0;i<keys.length;i++){
    //     if(!data[keys[i]]){
    //         error = true;
    //         break;
    //     }
    // }

    // if(error){
    //     res.render('pages/success.html',{name:data.name});
    // }




    axios.post('http://localhost:8082/addUser', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json'
        }
      })
    .then(response => {
        const {data} = response
        console.log('response data from java==',data);
        res.render('pages/success.html',{name:data.name})
    })
    .catch(error => {
        console.error(error)
    })
})
app.use('/success',successRoute);

app.listen(port,()=>{
    console.log("started on",port)
})

// const express = require('express');
// const nunjucks = require('nunjucks');
// const path = require('path');
// const app = express();
// const formRoute = require('./routes/form');
// const successRoute = require('./routes/success');


// const port = 3000;

// app.set("view engine","html");
// console.log(path.join(__dirname, 'public'));
// app.use(express.static(path.join(__dirname, '../public')));
// nunjucks.configure(['views'],{
//     autoescape:false,
//     express:app
// })

// app.use('/',formRoute);
// app.use('/success',successRoute);
// app.use(express.static('public'));

// app.listen(port,()=>{
//     console.log("started on",port)
// })