/*a) Write an express server with three routes.
i. First route will return “Hello World” as response 
on get request.
ii. Second route will return current DateTime (IST) on 
GET request.
iii. Third route will return “Third Route” as response 
on GET request.
*/
var http = require('http');
var url = require('url');
function process_req(req, res) { 
    let data;
 if (req.method == 'GET' && req.url == '/') { 
    data = 'Hello World';
    res.write(data); 
    res.end();
 }
 else if(req.method == 'GET' && req.url == '/time'){
let time = new Date().toISOString();
 
 res.write("todays date and time is : " + time); 
 res.end();
 } 
 else if(req.method == 'GET' && req.url == '/third'){
    res.write("Third Route"); 
    res.end();}
    else
    res.end("not found");
} 
var server = http.createServer(process_req) 
server.listen(3000);
console.log('server listening on localhost:3000');
