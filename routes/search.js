require('dotenv').config()
const express = require('express')
const router = express.Router()
const URL = 'https://api.edamam.com/api/food-database/v2/parser'
router.get('/', (req, reply) => {
    const param = new URLSearchParams()
    param.append("app_id", process.env.FOOD_API_ID)
    param.append("app_key", process.env.FOOD_API_KEY)
    param.append("ingr", req.query.searchbar)
    fetch(URL +'?' + param.toString()) 
      .then(res => res.json())
        .then(value => {
          console.log(value.hints[0])
          console.log(value.hints[1])
          console.log(value.hints[2])
          reply.render('index', {foods: value.hints});
        }) 

  
    
  })

module.exports = router