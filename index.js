const express = require('express')
const app = express()
const port = 3000

const snailgunEmails = require('./controllers/snailgunEmails.js')
const spendgridEmails = require('./controllers/spendgridEmails.js')

app.post('/email', (req, res) => {
    res.status = 200
    res.json({status: 'success', msg: 'hello from email land!'})
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})