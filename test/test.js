const should = require('should');
const heartbeat = require('../index')

describe('Constructor', function() {
    it('Create a client', function() {
        let client = new heartbeat({subdomain: 'test'});

        should.exist(client);
        client.should.have.property('config')
        client.config.should.have.property('subdomain').which.equal('test');
    })
})

describe('Heartbeats', function() {
    it('Send a heartbeat', async function() {
        let client = new heartbeat({subdomain: 'test'});
        let response = await client.SendHeartbeat('test', 300, 300)

        should.exist(response);
        response.should.have.property('status').which.equal(200)
    })
})
