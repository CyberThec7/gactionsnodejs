const express = require('express')
const app = express()

app.get('/testNodePage', async(req, res)=>{
  res.status(201).send('test endpoint success')
})




module.exports = app