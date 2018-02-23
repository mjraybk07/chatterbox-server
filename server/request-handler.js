// var headers = {
//   'access-control-allow-origin': '*',
//   'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
//   'access-control-allow-headers': 'content-type, accept',
//   'access-control-max-age': 10, // Seconds.
//   'Content-Type': 'application/json'
// };

// var sendResponse = function ( response, data, statusCode ) {
//   statusCode = statusCode || 200;
//   response.writeHead(statusCode, headers);
//   response.end(JSON.stringify(data));
// };

// var collectData = function(request, callback) {
//   var data = '';
  
//   request.on('data', function(chunk) {
//     data += chunk;
//   });
//   request.on ('end', function() {
//     callback( JSON.parse(data) );
//   });
// };

var utils = require ('./utils')

var objectId = 1;

var messages = [
  {
    text: "Hello World",
    username: "Bob",
    objectId: objectId
  }
];

var actions = {
  'GET': function(request, response) {
    utils.sendResponse(response, {results: messages}); 
  },
  'POST': function(request, response) {
    utils.collectData(request, function (message) {
    messages.push(message);
    message.objectId = ++objectId;
    sendResponse(response, {objectId: 1});
    });
  },
  'OPTIONS': function(request, response) {
    utils.sendResponse(response, null);
  },  
  
};


module.exports = function(request, response) {

  //console.log('Serving request type ' + request.method + ' for url ' + request.url);
  
  var action = actions[request.method];
  
  if ( action ) {
    action(request, response)
  } else {
    utils.sendReponse(response, "Not Found", 404);
  }
  
  // if ( action === 'GET' ) {
  //   actions.GET(request, response);
       
  // } else if ( action === 'POST' ) {
  //   actions.POST(request, response);
    
  // } else if ( action === 'OPTIONS' ) {
  //   actions.OPTIONS(request, response);
  //}
};




