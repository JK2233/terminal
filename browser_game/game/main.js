"use strict"
// p_* - function concentrated on printing text (for eg.: cutscenes)
// f_* - flags (stuff like enter pressed, event happend, etc)
// gs_* - game states

//game lunch sequence
const corupted_characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789₼₲₲##¿¿¤¤₱₩₩₲₲';
const corupted_haractersLength = corupted_characters.length;

//player-related
var username = "";
var gamemode = 0; //0 - sandbox, 1 - PvP, 2 - PvE, x>2 - custom


//misc basic operation
var back_variables = []; //used by bak ,swp, del, get 
var report_commands_to_log = true; //responsible for leving the command name and other data when pressing enter
var text_buffer = "";
var command_log = "";
var command_helper = "";
var frame = 0; //physics
var last_drawn_frame = 0; //screen
var display_render_loop;
var animation_cout1 = 0;
var is_in_main_menu = true;
var blinker = "▌";
var input_buffer = "";
var input_buffer_max_length = 16;
var gs_main_menu_phase = 1; //0 means that menu is not opeaned
var game_active = false; //whether or not player is in game (not in main menu)
var last_command_output = "";

var string_buffer1 = "";
//keybord presses flags
var f_enter_pressed = false;
var f_insert_pressed = false;
var f_delete_pressed = false;
var f_escape_pressed = false;
var f_tab_pressed = false;

var f_anyshift_pressed = false;
var f_lshift_pressed = false;
var f_rshift_pressed = false;

var f_anyalt_pressed = false;
var f_lalt_pressed = false;
var f_ralt_pressed = false;

var f_anycontrol_pressed = false;
var f_lcontrol_pressed = false;
var f_rcontrol_pressed = false;

var f_capslock_active = false;

//log  element
const log = document.getElementById("log");

//execute command related
var execute_input = [];
var execute_running = false;
var execute_pointer = 0;
var execute_iteration_counter = 0;
var execute_wait_afterwords = 0;

document.addEventListener('keydown', function(event) {
	switch(event.key){
		case "Backspace":
			input_buffer = input_buffer.slice(0, (input_buffer.length - 1));
		break;
		case "Delete":
			f_delete_pressed = true;
		break;
		case "Insert":
			f_insert_pressed = true;
		break;
		case "Enter":
			if(f_anyshift_pressed){
				input_buffer += "¶";
			}
			else{
				f_enter_pressed = true;
			}
		break;
		case "Escape":
			f_escape_pressed = true;
		break;
		case "Alt":
			f_anyalt_pressed = true;
		break;
		case "Control":
			f_anycontrol_pressed = true;
		break;
		case "Shift":
			f_anyshift_pressed = true;
		break;
		case "Tab":
			f_tab_pressed = true;
			event.preventDefault();
		break;
		case "CapsLock": //capslock logic
			if(f_capslock_active === true){
				f_capslock_active = false;
			}
			else{
				f_capslock_active = true;
			}
		break;
		case "`":
			if(f_anycontrol_pressed){
				input_buffer += "¦";
			}
			else{
				input_buffer += "`";
			}
		case "\\":
			if(f_anycontrol_pressed){
				input_buffer += "¦";
			}
			else{
				input_buffer += "\\";
			}
		break;
		case " ": //Space key
			input_buffer += event.key;
			event.preventDefault();
		break;
		default:
			input_buffer += event.key;
		break;
	}
	if(input_buffer.length > input_buffer_max_length){    //detecting if intput buffer exeded specified limit
		input_buffer = input_buffer.slice(0, input_buffer_max_length);
	}
	input_buffer = input_buffer.replace("<", "&lt");
	input_buffer = input_buffer.replace(">", "&gt");
});

document.addEventListener('keyup', function(event) {
	switch(event.key){
		case "Insert":
			f_insert_pressed = false;
		break;
		case "Escape":
			f_escape_pressed = false;
		break;
		case "Alt":
			f_anyalt_pressed = false;
		break;
		case "Control":
			f_anycontrol_pressed = false;
		break;
		case "Shift":
			f_anyshift_pressed = false;
		break;
	}
});

function game_loop(){
	frame++;
	switch(frame%20){ //blinker logic
		case 1:
			blinker = "▌";
		break;
		case 8:
			blinker = "<div class='l_gray'>▌</div>";
		break;
		case 9:
			blinker = "<div class='gray'>▌</div>";
		break;
		case 10:
			blinker = "&nbsp;";
		break;
	}
	if(frame < 220){ //start sequence
		if(f_enter_pressed === true && frame < 210){
			frame = 200; //skips animation (most of it at least)
		}
		p_start_game(frame)
	}
	else{
		if(is_in_main_menu){
			main_menu();
		}
		else{
			if(game_active === true){
				//game loop
				input_buffer_max_length = 256; //I know its running every tick, but its just one variable so its fine
				if(execute_running === false){
					if(f_enter_pressed === true){
						input_buffer = input_buffer.split("¶").join(" ");
						if(report_commands_to_log === true){
							command_log += input_buffer + "<br>"; //leves the name of executed command in the log
						}
						f_enter_pressed = false;
						let argumnents = input_buffer.split(" ");
						let command_name = argumnents[0];
						if(command_list.find(o => o.name === command_name)){
							if(argumnents[1] != undefined){
								let commands_arguments = input_buffer.slice(command_name.length + 1, input_buffer.length);
								last_command_output = command_list.find(o => o.name === command_name).run(commands_arguments);
							}
							else{
								last_command_output = command_list.find(o => o.name === command_name).run();
							}
						}
						else{
							command_log += "<div class='red'>There is no command named: '" + command_name + "' plese check your spelling</div><br>";
						}
						input_buffer = "";
					}
					text_buffer = command_log + input_buffer.split("¶").join("¶<br>") + blinker + command_helper;
				}
				else{
					//execute command execting
					c_execute_loop();
					text_buffer = command_log;
					if(f_escape_pressed){
						command_log += "<div class='gray'>Program terminated by user (" + username + "), reson: user pressed escape button</div><br>"
					}
				}
			}
			else{
				//pause menu
			}
		}
	}
	reset_keybord_flags(); //seprate file (misc_functions.js)
}
window.setInterval(game_loop, 20);

function p_render_frame(){
	if(last_drawn_frame != frame){
		last_drawn_frame = frame;
		log.innerHTML = text_buffer + '<div id="empty_footer"></div>';
	}
	window.requestAnimationFrame(p_render_frame);
}
requestAnimationFrame(p_render_frame);

function main_menu(){
		text_buffer = "Booting into "
		text_buffer += "A"
		text_buffer += corupted_characters.charAt(Math.floor(Math.random() * corupted_haractersLength));
		text_buffer += "F"
		text_buffer += corupted_characters.charAt(Math.floor(Math.random() * corupted_haractersLength));
		text_buffer += "OS<br>The OS that empowers creativity<br><br><br>"
		text_buffer += "<div class=\"green\">Succesfully Booted Up</div><br><div class=\"red\">Detected Some Errors In Kernel</div><br><br>"
		text_buffer += "<div class=\"green\">     /\\   _    </div><br>"
		text_buffer += "<div class=\"green\">    /  \\ | |   </div>  ___   ___ <br>"
		text_buffer += "<div class=\"green\">   / /\\ \\| |   </div> / _ \\ / __|<br>"
		text_buffer += "<div class=\"green\">  / ____ | |__ </div>| (_) |\\__ \\<br>"
		text_buffer += "<div class=\"green\"> /_/    \\_____|</div> \\___/ |___/<br>"
		switch(gs_main_menu_phase){
			case 1:
				input_buffer_max_length = 20;
				if(f_enter_pressed === true){
					gs_main_menu_phase = 2;
					username = input_buffer;
					input_buffer = ""; //clear input buffer
				}
				text_buffer += "<br><br>Username: " + input_buffer + blinker;
			break;
			case 2:
				input_buffer_max_length = 10;
				if(f_enter_pressed === true){
					switch(input_buffer.toLocaleLowerCase()){
						case "0":
							gamemode = 0;
							gs_main_menu_phase = 3;
							break;
						case "1":
							gamemode = 1;
							gs_main_menu_phase = 3;
							break;
						case "2":
							gamemode = 2;
							gs_main_menu_phase = 3;
							break;
						case "sandbox":
							gamemode = 0;
							gs_main_menu_phase = 3;
							break;
						case "pvp":
							gamemode = 1;
							gs_main_menu_phase = 3;
							break;
						case "pve":
							gamemode = 2;
							gs_main_menu_phase = 3;
							break;
					}
					input_buffer = ""; //clear input buffer
				}
				text_buffer += "<br><br>Username: " + username;
				text_buffer += "<br><div class='l_gray'>(0.sandbox, 1.PvP, 2.PvE)</div><br>Gamemode: " + input_buffer + blinker;
			break;
			case 3:
				text_buffer += "<br><br>Username: " + username;
				text_buffer += "<br><div class='l_gray'>(0.sandbox, 1.PvP, 2.PvE)</div><br>Gamemode: " + gamemode;
				text_buffer += "<br><div class='l_gray'>(difficulty from 0-5, does nothing in PvP, 0 is pritty much no ai while 2 is normal and 5 is for hardcore linux users)</div><br>Difficulty: " + input_buffer + blinker;
				if(f_enter_pressed === true){
					if(parseInt(input_buffer) >= 0 && parseInt(input_buffer) <= 5){
						gs_main_menu_phase = 0;
						game_active = true; //start the game
						is_in_main_menu = false;
					}
					input_buffer = ""; //clear input buffer
				}
		}
}