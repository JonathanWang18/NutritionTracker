const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.set('view engine', 'ejs')
app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('index');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})