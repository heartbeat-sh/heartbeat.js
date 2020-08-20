const axios = require('axios')

module.exports = {
    HeartbeatClient: class {
        constructor({subdomain}) {
            if(!subdomain) {
                throw "Please provide a subdomain in your config!"
            }

            this.config = {
                subdomain: subdomain
            }

            this.proto = 'https'
            this.host = 'heartbeat.sh'
        }

        SendHeartbeat(name, warning, error) {
            let query = ''
            if(warning && typeof warning == "number") {
                query = '?warning=' + parseInt(warning)
            }
            if(error && typeof error == "number") {
                query += query ? '&' : '?'
                query += 'error=' + parseInt(error)
            }
            let url = `${this.proto}'://'${this.host}/${name}${query}`

            return axios({
                method: 'post',
                url: url
            })
        }
    }
}
