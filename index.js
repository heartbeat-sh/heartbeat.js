const axios = require('axios')

const proto = 'https'
const host = 'heartbeat.sh'

module.exports = class HeartbeatClient {
    constructor({subdomain}) {
        if (!subdomain) {
            throw "Please provide a subdomain in your config!"
        }
        this.config = {
            subdomain: subdomain
        }
    }

    async SendHeartbeat(name, warning, error) {
        let query = ''
        if (warning && typeof warning == "number") {
            query = '?warning=' + parseInt(warning)
        }
        if (error && typeof error == "number") {
            query += query ? '&' : '?'
            query += 'error=' + parseInt(error)
        }
        let url = `${proto}://${this.config.subdomain}.${host}/beat/${name}${query}`

        return axios({
            method: 'post',
            url: url,
        })
    }
}
