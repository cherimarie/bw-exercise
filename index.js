const express = require('express')
const app = express()
const port = 3000

const emails = require('./controllers/emails.js')

app.post('/email', (req, res) => {
    res.status = 200
    res.json({status: 'success', msg: 'hello from email land!'})
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})