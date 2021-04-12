const axios = require('axios')


async function poll(fn, timeout=3000, interval=100){
    let endTime = Number(new Date()) + (timeout)

    let checkCondition = function(resolve, reject) {
        // Does validation function pass?
        let result = fn()
        if(result) {
            resolve(result)
        }
        // Validation hasn't passed, but time isn't up yet
        // BUG: checkCondition is not rerunning, something is probably wrong here
        else if (Number(new Date()) < endTime) {
            setTimeout(checkCondition, interval, resolve, reject)
        }
        // No validation and time is up
        else {
            reject(new Error('timed out for ' + fn + ': ' + arguments))
        }
    }
    return new Promise(checkCondition)

}

async function create(request, response){
    const baseURL = 'https://bw-interviews.herokuapp.com/snailgun/emails';
    params = request.body
    config = {headers: {
            "Content-Type": "application/json",
            "X-Api-Key": process.env.email_api_key
        }}

    axios.post(baseURL, {
        "from_email": params.from,
        "from_name": params.from_name,
        "to_email": params.to,
        "to_name": params.to_name,
        "subject": params.subject,
        "body": params.body
        },
        config
    )
    .then(function(resp) {
        console.log("Response from snailgun: ", resp.data)
        const emailStatus = resp.data.status

        if(emailStatus && emailStatus != "sent"){
            // Call polling function, passing callback that checks status
            poll(async function(){
                emailData = await axios.get(`${baseURL}/${resp.data.id}`, config)

                if(emailData.data.status === "sent"){
                    return "success"
                }
                console.log("Email not in sent status yet :(", emailData.data)
                return null

            }, 2000, 150)
            .then(function(success) {
                // BUG: This is returning success before polling completes
                console.log("success from polling:", success)
                response.status = 200
                response.json({status: 'success from snailgun',})
                response.send()
            })
            .catch(function(err){
                response.status = 500
                console.log("ERROR ", err)
                response.json({status: 'error', errMsg: err})
                response.send()
            })
        }
    })
    .catch(function(err){
                response.status = 500
                console.log("ERROR ", err)
                response.json({status: 'error', errMsg: err})
                response.send()
            })


}

module.exports = { create }