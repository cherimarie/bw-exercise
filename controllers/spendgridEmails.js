
async function create(request, response){
    // TODO: Implement sending to spendgrid service
    response.status = 200
    response.json({status: 'success from spendgrid',})
    response.send()
}

module.exports = { create }