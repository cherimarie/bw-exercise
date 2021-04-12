const assert = require('assert')
const sinon = require("sinon")
const request = require('supertest')

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
describe('index', function(){
  let sandbox = sinon.createSandbox()
  let createServer

  beforeEach(()=>{
    delete require.cache[require.resolve('../index')]
    createServer = require('../index')
  })
  afterEach(() => {
    sandbox.restore()
    // server.close(done) ??
  })

  describe('Environment', function() {
    it('should call appropriate service when configured for snailgun', function() {

    })
    it('should call appropriate service when configured for spendgrid', function() {

    })
    xit('should not start if not configured for a known provider', function() {
      const noProvider = {PROVIDER: ''}
      sandbox.stub(process, 'env').value(noProvider)
      assert.throws(createServer())
    })
    xit('should not start if not configured with snailgun api key', function() {
      const noKey = {PROVIDER: 'snailgun', SNAILGUN_API_KEY: ''}
      assert.throws(createServer())
    })
    xit('should not start if not configured with spendgrid api key', function() {
      const noKey = {PROVIDER: 'spendgrid', SPENDGRID_API_KEY: ''}
      assert.throws(createServer())
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

})
