# heartbeat.js
A js client library for [heartbeat.sh](https://heartbeat.sh).

## Usage
Install the package with `npm i heartbeat-sh`

### Example Usage:
```Javascript
const heartbeatClient = require('heartbeat-sh')

const secondsPerDay = 86400
const secondsPerHour = 3600

const myClient = new heartbeatClient({subdomain: "example"})
myClient.SendHeartbeat("example:js", secondsPerDay + 2 * secondsPerHour, secondsPerDay * 2)

```

## Links
- npm: https://www.npmjs.com/package/heartbeat-sh
