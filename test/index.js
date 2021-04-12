var assert = require('assert')
var sinon = require("sinon")

const index = require('../index.js')

const validData = {
"to": "susan@abcpreschool.org",
"to_name": "Miss Susan",
"from": "noreply@mybrightwheel.com",
"from_name": "brightwheel",
"subject": "Your Weekly Report",
"body": "<h1>Weekly Report</h1><p>You saved 10 hours this week!</p>"
}

const missingFieldData = {
"to": "susan@abcpreschool.org",
"to_name": "Miss Susan",
"from": "noreply@mybrightwheel.com",
"from_name": "brightwheel",
"body": "<h1>Weekly Report</h1><p>You saved 10 hours this week!</p>"
}

const missingValueData = {
"to": "",
"to_name": "Miss Susan",
"from": "noreply@mybrightwheel.com",
"from_name": "brightwheel",
"subject": "Your Weekly Report",
"body": "<h1>Weekly Report</h1><p>You saved 10 hours this week!</p>"
}

describe('Environment', function() {
  it('should call appropriate service when configured for snailgun', function() {

  })
  it('should call appropriate service when configured for spendgrid', function() {

  })
  it('should not start if not configured for a known provider', function() {

  })
})

describe('Email Post Complete Flow', function() {
  describe('Success', function() {
    it('should return success when data is valid and spendgrid call succeeds', function() {

    })
    it('should return success when data is valid and snailgun call succeeds', function() {

    })
  })

  describe('Failure', function() {
    it('should return a useful message if params are invalid', function() {

    })
    it('should return a useful message if params are missing', function() {

    })
    it('should return a useful message if snailgun fails', function() {

    })
    it('should return a useful message if spendgrid fails', function() {

    })
  })
})
