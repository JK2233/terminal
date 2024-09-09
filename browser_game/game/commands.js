// c_* - function that is responible for actions of a command in terminal

function c_neofetch(arguments){
	let temp_output = "";
	if(arguments != undefined){
		let modifiers = arguments.split(" ");
		if(modifiers.includes("-v") || modifiers.includes("-version")){
			temp_output += "neofetch version 1.0.0<br>";
		}
		if(modifiers.includes("-esteregg")){
			temp_output += "yep you just found an egg, esteregg. You can indeed give arguments to this command<br>";
		}
		temp_output += "<div class=\"green\">     /\\   _    </div>                 | OS:        Error<br>";
		temp_output += "<div class=\"green\">    /  \\ | |   </div>  ___   ___      | Username:  " + username + "<br>";
		temp_output += "<div class=\"green\">   / /\\ \\| |   </div> / _ \\ / __|     | CPU load:  0%<br>";
		temp_output += "<div class=\"green\">  / ____ | |__ </div>| (_) |\\__ \\     | Memory:    100Mb/512Mb<br>";
		temp_output += "<div class=\"green\"> /_/    \\_____|</div> \\___/ |___/     | Kernel version 1.3.2<br>";
		if(!modifiers.includes("-q")){
			command_log += temp_output;
		}
	}
	else{
		temp_output += "<div class=\"green\">     /\\   _    </div>                 | OS:        Error<br>";
		temp_output += "<div class=\"green\">    /  \\ | |   </div>  ___   ___      | Username:  " + username + "<br>";
		temp_output += "<div class=\"green\">   / /\\ \\| |   </div> / _ \\ / __|     | CPU load:  0%<br>";
		temp_output += "<div class=\"green\">  / ____ | |__ </div>| (_) |\\__ \\     | Memory:    100Mb/512Mb<br>";
		temp_output += "<div class=\"green\"> /_/    \\_____|</div> \\___/ |___/     | Kernel version 1.3.2<br>";	
		command_log += temp_output;
	}
	return temp_output;
}

function c_echo(text){
	command_log += text + "<br>";
	return last_command_output;
}

function c_spco(arguments){ //show previous command output
	if(arguments != undefined){
		let modifiers = arguments.split(" ");
		if(!modifiers.includes("-q")){
			command_log += "<div class='gray'>showing output from previous command buffer</div><br>";
		}
		if(modifiers.includes("-nobr")){
			command_log += last_command_output;
		}
		else{
			command_log += last_command_output + "<br>";
		}
		if(modifiers.includes("-cl") || modifiers.includes("-count_lines")){
			command_log += "<div class='gray'>amount of lines: " + last_command_output.split("<br>").length + "</div><br>";
		}
		if(modifiers.includes("-cc") || modifiers.includes("-count_characters") || modifiers.includes("-count_char")){
			command_log += "<div class='gray'>amount of characters: " + last_command_output.length + "</div><br>";
		}
	}
	else{
		command_log += "<div class='gray'>showing output from previous command buffer</div><br>";
		command_log += last_command_output + "<br>";	
	}
	return last_command_output;
}

function c_bak(arguments){ //stores data to consoles value pair storage
	if(arguments === undefined){
		command_log += "<div class='red'>Error no arguments provided in store (bak) command</div><br>";
		return "error - no arguments";
	}
	let modifiers = arguments.split(" ");
	//first argument is the data tag
	// .slice(command_name.length, input_buffer.length)
	if (back_variables.find(o => o.name === modifiers[0])){
		back_variables.splice(back_variables.find(o => o.name === modifiers[0]))
	}
	let new_pair = new Object();
	new_pair.name = modifiers[0];
	new_pair.value = last_command_output;
	back_variables.push(new_pair);
	return "0";
}

function c_del(arguments){ //stores data to consoles value pair storage
	if(arguments === undefined){
		command_log += "<div class='red'>Error no arguments provided in store (bak) command</div><br>";
		return "error - no arguments";
	}
	let modifiers = arguments.split(" ");
	//first argument is the data tag
	if (back_variables.find(o => o.name === modifiers[0])){
		back_variables.splice(back_variables.find(o => o.name === modifiers[0]))
	}
	else if(!(modifiers.includes("-q") || modifiers.includes("-quiet"))){
		command_log += "<div class='gray'>found no tags to remove! could be an error?</div><br>";
		return "1";
	}
	return "0";
}

function c_swp(arguments){
	if(arguments === undefined){
		command_log += "<div class='red'>Error no arguments provided in swp (swap) command</div><br>";
		return "1";
	}
	let modifiers = arguments.split(" ");
	//first argument is the data tag
	let obj = back_variables.find(o => o.name === modifiers[0]);
	let prev_value = "";
	if (obj !== undefined){
		prev_value = obj.value;
		obj.value = last_command_output;
	}
	else if(!(modifiers.includes("-q") || modifiers.includes("-quiet"))){
		command_log += "<div class='gray'>found no tags to swap! could be an error?</div><br>";
		return "0";
	}
	return prev_value;
}

function c_cbb(arguments){
	back_variables = [];
}

function c_cls(argumnents){
	if (argumnents !== undefined){
		let modifiers = argumnents.split(" ");
		if(modifiers.includes("-l")){
			command_log = command_log.substring(0, command_log.lastIndexOf('<br>'));
			command_log = command_log.substring(0, command_log.lastIndexOf('<br>'));
			command_log += "<br>"
		}
		if(modifiers.includes("-ll")){
			command_log = command_log.substring(0, command_log.lastIndexOf('<br>'));
			command_log = command_log.substring(0, command_log.lastIndexOf('<br>'));
			command_log = command_log.substring(0, command_log.lastIndexOf('<br>'));
			command_log = command_log.substring(0, command_log.lastIndexOf('<br>'));
			command_log = command_log.substring(0, command_log.lastIndexOf('<br>'));
			command_log += "<br>"
		}
		return last_command_output;
	}
	command_log = "";
	return last_command_output;
}

function c_in(argument){
	return argument;
}

function c_calc(arguments){
	if(arguments === undefined){
		command_log += "<div class='red'>Error no arguments provided in calc (expr) command</div><br>";
		return "0";
	}
	if(last_command_output === ""){
		last_command_output = 0;
	}
	let input = [];
	if(typeof last_command_output === "string"){
		input = last_command_output.split(" ");
	}
	else{
		input.push(parseFloat(last_command_output));
	}
	let modifiers = arguments.split(" ");
	let answer = 0;
	let modifiers_lenght = modifiers.length;
	for(i = 0 ; i < modifiers_lenght ; i++){
		switch(modifiers[i]){
			case "x":
				modifiers[i] = input[0];
				break;
			case "y":
				modifiers[i] = input[1];
				break;
			case "z":
				modifiers[i] = input[2];
				break;
			case "w":
				modifiers[i] = input[3];
				break;
			case "a1":
				modifiers[i] = input[0];
				break;
			case "a2":
				modifiers[i] = input[1];
				break;
			case "a3":
				modifiers[i] = input[2];
				break;
			case "a4":
				modifiers[i] = input[3];
				break;
			case "a5":
				modifiers[i] = input[4];
				break;
			case "a6":
				modifiers[i] = input[5];
				break;
			case "a7":
				modifiers[i] = input[6];
				break;
			case "a8":
				modifiers[i] = input[7];
				break;
		}
	}
	for(i = 0 ; i < modifiers_lenght ; i++){
		switch(modifiers[i]){
			case "+":
				answer = parseFloat(modifiers[i-1]) + parseFloat(modifiers[i+1]);
				modifiers[i+1] = answer;		
				break;
			case "-":
				answer = parseFloat(modifiers[i-1]) - parseFloat(modifiers[i+1]);
				modifiers[i+1] = answer;		
				break;
			case "*":
				answer = parseFloat(modifiers[i-1]) * parseFloat(modifiers[i+1]);
				modifiers[i+1] = answer;		
				break;
			case "/":
				answer = parseFloat(modifiers[i-1]) / parseFloat(modifiers[i+1]);
				modifiers[i+1] = answer;		
				break;
			case "^":
				answer = Math.pow(parseFloat(modifiers[i-1]), parseFloat(modifiers[i+1]));
				modifiers[i+1] = answer;		
				break;
		}
	}
	if(modifiers[0] === "-m" || modifiers[0] === "-manual"){
		command_log += "answer: " + answer + "<br>";
		return answer;
	}
	return answer;
}

function c_execute(arguments){ //this is just a once run setup to the accual execute command loop, accual execute is named c_execute_loop and its called form main
	if(arguments === undefined){
		command_log += "<div class='red'>Error no arguments provided to execute (script) command</div><br>";
		return "0";
	}
	if(typeof arguments != "string"){
		command_log += "<div class='red'>Error argument provided to execute (script) are just a number</div><br>";
	}
	execute_input = arguments.split("¦");

	execute_running = true;
	execute_pointer = 0;
	execute_iteration_counter = 0;
	execute_wait_afterwords = 0;
	return last_command_output;
}

function c_execute_loop(){
	execute_iteration_counter += 1;
	console.log(execute_iteration_counter);
	console.log(execute_input[execute_pointer]);
	if(execute_iteration_counter > 100){
		execute_running = false;
		command_log += "<div class='red'>Program had been running for too long - terminated by AlfaOS</div><br>"
		return "program running for too long - terminated";
	}
	if(execute_input[execute_pointer] === undefined){
		execute_running = false;
		command_log += "<div class='gray'>Program terminated by AlfaOS, reson: no more instructions to execute - reched the end of the script</div><br>"
		return "no more instruction - terminated";
	}
	if(execute_input[execute_pointer].charAt(0) === "#"){
		let parameters = execute_input[execute_pointer].split(" ")
		switch(parameters[0]){
			case "#for":
				let old_parameters = parameters;
				if(isNaN(parameters[1])){
					execute_running = false;
					command_log += "<div class='red'>Error #for's first parameter is not a number when it should be<div><br>";
					return "ERROR";
				}
				if(isNaN(parameters[2])){
					execute_running = false;
					command_log += "<div class='red'>Error #for's secound parameter is not a number when it should be<div><br>";
					return "ERROR";
				}
				if(parseInt(parameters[2]) > 1){
					execute_input[execute_pointer] = "#for " + old_parameters[1] + " " + (parseInt(old_parameters[2]) - 1);					
					execute_pointer = parameters[1] - 1;
				}
				break;
			case "#jiz":
				if(isNaN(parameters[1])){
					execute_running = false;
					command_log += "<div class='red'>Error #if's first parameter is not a number when it should be<div><br>";
					return "ERROR";
				}
				if(isNaN(parameters[2])){
					execute_running = false;
					command_log += "<div class='red'>Error #if's secound parameter is not a number when it should be<div><br>";
					return "ERROR";
				}
				if(parameters[2] === 0){
					execute_pointer = parameters[1] - 1;
				}
				break;
			case "#jigz":
				if(isNaN(parameters[1])){
					execute_running = false;
					command_log += "<div class='red'>Error #if's first parameter is not a number when it should be<div><br>";
					return "ERROR";
				}
				if(isNaN(parameters[2])){
					execute_running = false;
					command_log += "<div class='red'>Error #if's secound parameter is not a number when it should be<div><br>";
					return "ERROR";
				}
				if(parameters[2] > 0){
					execute_pointer = parameters[1] - 1;
				}
				break;
			case "#jilz":
				if(isNaN(parameters[1])){
					execute_running = false;
					command_log += "<div class='red'>Error #if's first parameter is not a number when it should be<div><br>";
					return "ERROR";
				}
				if(isNaN(parameters[2])){
					execute_running = false;
					command_log += "<div class='red'>Error #if's secound parameter is not a number when it should be<div><br>";
					return "ERROR";
				}
				if(parameters[2] < 0){
					execute_pointer = parameters[1] - 1;
				}
				break;
			case "#jmp":
				if(isNaN(parameters[1])){
					execute_running = false;
					command_log += "<div class='red'>Error #jmp's first parameter is not a number when it should be<div><br>";
					return "ERROR";
				}
				execute_pointer = parameters[1] - 1;
				break;
			case "#hello_world":
				command_log += "hello world from execute command<br>";
				break;
		}
	}
	else{
		let argumnents = execute_input[execute_pointer].split(" ");
		console.log(argumnents);
		let command_name = argumnents[0];
		let obj = command_list.find(o => o.name === command_name);
		if(command_list.find(o => o.name === command_name)){
			if(obj.run === c_execute){
				command_log += "<div class='red'>You can't run execute in execute command!!!</div><br>";
			}

			let commands_arguments = execute_input[execute_pointer].slice(command_name.length + 1, execute_input[execute_pointer].length);
			console.log(commands_arguments);
			last_command_output = obj.run(commands_arguments);
		}
		else{
			command_log += "<div class='red'>There is no command named: '" + command_name + "' plese check your spelling</div><br>";
		}
	}
	execute_pointer += 1;
}

function c_concat(text){
	if(text === undefined){
		return last_command_output;
	}
	let modifiers = text.split(" ");
	if(modifiers[0] === "-bb"){
		let obj = back_variables.find(o => o.name === modifiers[1])
		if(obj === undefined){
			return "tag not found"
		}
		return last_command_output + obj.value;
	}
	if(modifiers[0] === "-robb"){
		let obj = back_variables.find(o => o.name === modifiers[1])
		if(obj === undefined){
			return "tag not found"
		}
		return obj.value + last_command_output;
	}
	if(modifiers[0] === "-t"){
		return last_command_output + text.slice(3, text.length());
	}
	if(modifiers[0] === "-tro"){
		return text.slice(3, text.length()) + last_command_output;
	}
	return last_command_output + text;
}
function c_reverse(arguments){
	return last_command_output.split('').reverse().join('');
}
var command_list = [
	{name:"neofetch", run:c_neofetch},
	{name:"fetch", run:c_neofetch},
	{name:"echo", run:c_echo},
	{name:"spco", run:c_spco}, //show previous command output
	{name:"previous", run:c_spco},
	{name:"bak", run:c_bak},
	{name:"BAK", run:c_bak},
	{name:"store", run:c_bak},
	{name:"del", run:c_del},
	{name:"DEL", run:c_del},
	{name:"remove", run:c_del},
	{name:"swp", run:c_swp},
	{name:"SWP", run:c_swp},
	{name:"swap", run:c_swp},
	{name:"cls", run:c_cls},
	{name:"clear", run:c_cls},
	{name:"CBB", run:c_cbb},
	{name:"cbb", run:c_cbb},
	{name:"ClearBackBuffer", run:c_cbb},
	{name:"input", run:c_in},
	{name:"in", run:c_in},
	{name:"IN", run:c_in},
	{name:"calc", run:c_calc},
	{name:"expr", run:c_calc},
	{name:"#", run:c_execute},
	{name:"execute", run:c_execute},
	{name:"script", run:c_execute},
	{name:"concat", run:c_concat},
	{name:"rev", run:c_reverse},
	{name:"reverse", run:c_reverse},
	{name:"", run:c_reverse},

];
