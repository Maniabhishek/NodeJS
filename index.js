const http = require('http');
const url = require('url');
const fs = require('fs');
var StringDecoder = require('string_decoder').StringDecoder;

const port = process.env.PORT || 3000
const server = http.createServer((req,res)=>{
    const parsedUrl = url.parse(req.url, true);
    //parsing path
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g,'');
    // getting the method
    const method = req.method.toLowerCase();
    //getting the query
    const queryStringObj = parsedUrl.query;
    const headers = req.headers;
    const host = parsedUrl.hostname
    const initial = new Date();
    const agent = new http.Agent({});
    console.log("maxFreeSockets",agent.maxFreeSockets);
    // const stream = fs.createReadStream(`${__dirname}/data.txt`);
    // stream.pipe(res);
    // const data = fs.readFileSync('./data.txt',
    //         {encoding:'utf8', flag:'r'});
    // res.end(data);
   
    // fs.readFile(`${__dirname}/data.txt`, (err, data) => {
    //     res.end(data);
    // });
    const decoder = new StringDecoder('utf-8');
    let buffer ='';
    const final = new Date();
    console.log(final.getTime())
    console.log(final.getTime() - initial.getTime())
    // console.log(__dirname);
    // console.log(`trimmed path is =${trimmedPath} , method is =${method}, headers is = ${headers}`, "query is" ,  queryStringObj, "headers is", headers);
    req.on('data',(data)=>{
        console.log(data); 
        buffer += Buffer.from(data).toString('utf-8'); // we could have used decoder.write(data)
    });

    req.on('end',()=>{
        const parsedData = JSON.parse(buffer) //decoder.end()
        res.end(parsedData.name);
    });

})
// Parse the url
// var parsedUrl = url.parse(req.url, true);

// // Get the path
// var path = parsedUrl.pathname;
// var trimmedPath = path.replace(/^\/+|\/+$/g, '');

// // Get the query string as an object
// var queryStringObject = parsedUrl.query;

// // Get the HTTP method
// var method = req.method.toLowerCase();

// // Send the response
// res.end('Hello World!\n');

// // Log the request/response
// console.log('Request received on path: '+trimmedPath+' with method: '+method+' and this query string: ',queryStringObject);

server.listen(port,()=>{
    console.log(`server is listening on ${port}`);
})