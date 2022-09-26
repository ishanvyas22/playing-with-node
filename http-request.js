var http = require('https')
var options = {
    host: 'catfact.ninja',
    path: '/fact',
    // scheme:'https'
    // port : 8081,
};
function callback(response, request) {
    /**
     * Old version
     */
    // console.log('respinse',response)
    // var res = '';
    // response.on('data', function (data) {
    //     process.stdout.write(data);
    //     res += data.toString('utf8')
    //     console.log(res)
    // })
    // console.log(res)
    // response.on('end', function (data) {
    //     // process.stdout.write(data);
    //     //res += data.toString('utf8')
    //     let value = data.JSON.parse(data)
    //     console.log(value)
    // })

    /**
     * New version
     */
    response.setEncoding('utf8');
    
    // Variable used to store full response body
    let jsonData = '';
    // Stream response data
    response.on('data', function (chunk) {
        // Push chunk data to `jsonData` variable
        jsonData += chunk;
    });
    // @see https://nodejs.org/api/http.html#httprequesturl-options-callback for available events
    response.on('end', function() {
        try {
            // Parse json response into json object so we can use it to print data.
            let parsedData = JSON.parse(jsonData);

            console.log('Fact:', parsedData.fact);
            console.log('Length:', parsedData.length);
        } catch (e) {
            console.error('Unable to parse JSON response, reason: ' + e.message);
        }
    });
}
http.request(options, callback).end();