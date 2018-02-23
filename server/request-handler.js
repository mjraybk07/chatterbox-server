var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};
var sendResponse = function ( response, data, statusCode ) {
  statusCode = statusCode || 200;
  response.writeHead(statusCode, headers);
  response.end(JSON.stringify(data));
};

module.exports = function(request, response) {

  console.log('Serving request type ' + request.method + ' for url ' + request.url);

  
    if ( request.method === 'GET' ) {
      // response.writeHead(statusCode, headers);
      // response.end(JSON.stringify('Hello, World!'));
      sendResponse(response, 'Hello, World!');
     
   } else if ( request.method === 'POST' ) {
     // response.writeHead(statusCode, headers);
     // response.end(JSON.stringify('Hello, World!'));
     sendResponse(response, 'Hello, World!');
   }


};




