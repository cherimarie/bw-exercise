const express = require('express')
const dotenv = require('dotenv')

const snailgunEmails = require('./controllers/snailgunEmails.js')
const spendgridEmails = require('./controllers/spendgridEmails.js')

const port = 3000

function validEmailPostParams(params) {
    const requiredKeys = [ 'body', 'from', 'from_name', 'subject', 'to', 'to_name' ]
    const valid = requiredKeys.every(function(key){
        // Coerce a boolean from existence of value in params
        return !!params[key]
    })
    return valid
}

// App creation is in a function so it can be exported and tested.
function createServer(){
    const app = express()
    app.use(express.json())

    // Make variables from .env file available as part of process.env
    dotenv.config()

    const providers = {
        snailgun: {
            api_key: process.env.SNAILGUN_API_KEY,
            controller: snailgunEmails
        },
        spendgrid: {
            api_key: process.env.SPENDGRID_API_KEY,
            controller: spendgridEmails
        }
    }

    if(!providers[process.env.PROVIDER] || !providers[process.env.PROVIDER].api_key){
        throw new Error("Application is configured incorrectly, missing required environment variables.")
    }

    app.post('/email', (req, res, next) => {
        if(!validEmailPostParams(req.body)){
            res.status = 422
            res.json({status: 'error', errMsg: 'Invalid email paramaters'})
            next()
        }else {
            process.env.email_api_key = providers[process.env.PROVIDER].api_key
            providers[process.env.PROVIDER].controller.create(req, res)
        }
    })

    return app
}

const app = createServer()
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

module.exports = createServer

