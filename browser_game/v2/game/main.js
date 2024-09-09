"use strict";
//secure context should be on
console.log("secure context it on: " + window.isSecureContext); //should report true

//user data
var uid;
var username;
var client = []; //a list of clients {uid: (integer),local: (integer),path: (path_to_client)}


var text_buffer = "";


var IS_A_HOST = true;

var server;
if(IS_A_HOST === true){
	server = new Worker("game/workers/server.js");
}

server.onmessage = (e) => {
	//menage response
};