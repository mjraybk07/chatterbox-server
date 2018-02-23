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

var messages = [
  {
    text: "Hello World",
    username: "Bob"
  }
];

var actions = {
  'GET': function(request, response) {
    sendResponse(response, {results: messages}); 
  },
  'POST': function(request, response) {
    sendResponse(response, "Hello World");
  },
  'OPTIONS': function(request, response) {
    sendResponse(response, null);
  },  
  
};


module.exports = function(request, response) {

  console.log('Serving request type ' + request.method + ' for url ' + request.url);
  
  var action = actions[request.method];
  
  if ( action ) {
    action(request, response)
  } else {
    // TODO: ERROR handling 
  }
  
  // if ( action === 'GET' ) {
  //   actions.GET(request, response);
       
  // } else if ( action === 'POST' ) {
  //   actions.POST(request, response);
    
  // } else if ( action === 'OPTIONS' ) {
  //   actions.OPTIONS(request, response);
  //}
};




