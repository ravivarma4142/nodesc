
var express = require('express');
var router = express.Router();
var axios = require('axios');


router.get('/', function(req, res, next){
    axios({
        method: 'get',
        url: `https://api.first.org/data/v1/countries?region=europe&limit=5`,
        headers:{"Content-Type":"application/json"}
      })
    .then(function (response) {
        const {data} = response;
        const {data: countries} = data;
        console.log('countries==',data);
        res.render('pages/form.html',{countriesList:countries});
    }).catch((err)=>{
        console.log(err);
    })});

module.exports = router;