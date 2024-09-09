"use strict";
// This worker can have as many client.js workers connectd to it as it wants
// all the connection to client.js is done through main.js
// main.js can alternativly connect to a diffrent user's main.js and use it's server.js worker for it's clients


// basic server variables
var tps = 30; //the amount of ticks per secound
var tick = 0; //current tick number

// basic variables used for menaging clients
var client = []; //a list of clients {uid: (integer),username: (string),player: (bool),resorces: (obj),cur_packet: (obj),priv_packet: (obj)}
//current paket recived from client {tick: (intager{tick}),data: (obj),ticked: (bool)}
//previous paket recived from client {tick: (intager{tick}),data: (obj),ticked: (bool)}

// world data
var map_size = 0; // the size of the map
var map = []; // 1d array containing information about the world grid {owner: (integer),type: (integer),on_fire: (integer),wet: (integer),mined: (integer),air_quality: (integer),oxygen_level: (integer)}
var entities = []; //an array containing all entities {position: {x, y, z},type: (integer),burning: (integer),wet: (integer),hp: (float),extra...}
var objects = []; //custom objects that will get support later down the line. Simular to entities but diffrent in some way.


// main physics function
window.setInterval(_physics, (1000/tps));
function _physics(){ // responsible for menaging the physics of the game and answering player request (main game logic loop)
	tick++;
	let client_lenght = client.length;
	for(i = 0; i < client_lenght; i++){
	}
}


onmessage = (e) => { //e - event = {type: (integer), data: (obj)}
	if(e.type === 0){ // 0 - client packet, 1 - special
		let user = client.cur_packet.find(o => o.uid === e.data.uid);
		if(user.tick < e.data.tick){
			client.prev_packet.find(o => o.uid === e.data.uid) = user;
			user = e.data;
		}
		else{
			console.log("pocket race condition? new packet is older then previous recived from user - Skipping!")
		}
	}
};