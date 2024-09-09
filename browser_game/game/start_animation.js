function p_start_game(current_frame){
	switch(current_frame){
		case 1:
			text_buffer += "Amethist Small BIOS v1.0.0, small and reliable <br>"
			text_buffer += "Copiright © 1994, Amethist Software Industries"
			text_buffer += "<br>"
			text_buffer += "Custom Build Verstion PowerPC32-X233<br>"
			text_buffer += "<br>"
			text_buffer += "CPU: Unknown (PowerPC at 450Mhz)<br>"
		break;
		case 30:
			text_buffer += "Memory test  :  640K OK<br>"
		break;
		case 105:
			animation_cout1 = 0; //resetuje counter
			text_buffer = "Amethist Small BIOS v1.0.0, small and reliable <br>"
			text_buffer += "Copiright © 1994, Amethist Software Industries"
			text_buffer += "<br>"
			text_buffer += "Custom Build Verstion PowerPC32-X233<br>"
			text_buffer += "<br>"
			text_buffer += "CPU: Unknown (PowerPC at 450Mhz)<br>"
			text_buffer += "Memory test  :  262144K OK<br>"
		break;
		case 115:
			text_buffer += "<br>"
			text_buffer += "Atempting to find bootable OS on connected devices: "
		break;
		case 134:
			text_buffer += "found target<br>"
		break;
		case 138:
			text_buffer += "Booting into detected Operating System"
		break;
		case 143:
			text_buffer += "."
		break;
		case 148:
			text_buffer += "."
		break;
		case 153:
			text_buffer += "."
		break;
		case 155:
			text_buffer = "Booting into "
			text_buffer += corupted_characters.charAt(Math.floor(Math.random() * corupted_haractersLength));
			text_buffer += corupted_characters.charAt(Math.floor(Math.random() * corupted_haractersLength));
			text_buffer += "F"
			text_buffer += corupted_characters.charAt(Math.floor(Math.random() * corupted_haractersLength));
			text_buffer += "OS"
		break;
		case 160:
			text_buffer = "Booting into "
			text_buffer += corupted_characters.charAt(Math.floor(Math.random() * corupted_haractersLength));
			text_buffer += corupted_characters.charAt(Math.floor(Math.random() * corupted_haractersLength));
			text_buffer += "F"
			text_buffer += corupted_characters.charAt(Math.floor(Math.random() * corupted_haractersLength));
			text_buffer += "OS"
			text_buffer += "<br>"
			text_buffer += "The OS that empowers creativity<br>"
			text_buffer += "<br>"
			text_buffer += "<br>"
			text_buffer += "Loading System Drivers<br>"
		break;
		case 165:
			text_buffer = "Booting into "
			text_buffer += "A"
			text_buffer += corupted_characters.charAt(Math.floor(Math.random() * corupted_haractersLength));
			text_buffer += "F"
			text_buffer += corupted_characters.charAt(Math.floor(Math.random() * corupted_haractersLength));
			text_buffer += "OS"
			text_buffer += "<br>"
			text_buffer += "The OS that empowers creativity<br>"
			text_buffer += "<br>"
			text_buffer += "<br>"
			text_buffer += "Detecting Input Devices<br>"
		break;
		case 170:
			text_buffer = "Booting into "
			text_buffer += "A"
			text_buffer += corupted_characters.charAt(Math.floor(Math.random() * corupted_haractersLength));
			text_buffer += corupted_characters.charAt(Math.floor(Math.random() * corupted_haractersLength));
			text_buffer += corupted_characters.charAt(Math.floor(Math.random() * corupted_haractersLength));
			text_buffer += "OS"
			text_buffer += "<br>"
			text_buffer += "The OS that empowers creativity<br>"
			text_buffer += "<br>"
			text_buffer += "<br>"
			text_buffer += "Loading Additional Device Drivers<br>"
			break;
		case 175:
			text_buffer = "Booting into "
			text_buffer += "A"
			text_buffer += corupted_characters.charAt(Math.floor(Math.random() * corupted_haractersLength));
			text_buffer += corupted_characters.charAt(Math.floor(Math.random() * corupted_haractersLength));
			text_buffer += corupted_characters.charAt(Math.floor(Math.random() * corupted_haractersLength));
			text_buffer += "OS"
			text_buffer += "<br>"
			text_buffer += "The OS that empowers creativity<br>"
			text_buffer += "<br>"
			text_buffer += "<br>"
			text_buffer += "Loading Additional Device Drivers<br>"
			break;
		case 180:
			text_buffer = "Booting into "
			text_buffer += "A"
			text_buffer += corupted_characters.charAt(Math.floor(Math.random() * corupted_haractersLength));
			text_buffer += corupted_characters.charAt(Math.floor(Math.random() * corupted_haractersLength));
			text_buffer += corupted_characters.charAt(Math.floor(Math.random() * corupted_haractersLength));
			text_buffer += "OS"
			text_buffer += "<br>"
			text_buffer += "The OS that empowers creativity<br>"
			text_buffer += "<br>"
			text_buffer += "<br>"
			text_buffer += "Loading Loccale Data<br>"
			break;
		case 185:
			text_buffer = "Booting into "
			text_buffer += "A"
			text_buffer += corupted_characters.charAt(Math.floor(Math.random() * corupted_haractersLength));
			text_buffer += corupted_characters.charAt(Math.floor(Math.random() * corupted_haractersLength));
			text_buffer += "A"
			text_buffer += "OS"
			text_buffer += "<br>"
			text_buffer += "The OS that empowers creativity<br>"
			text_buffer += "<br>"
			text_buffer += "<br>"
			text_buffer += "Loading Graphics Drivers<br>"
			break;
		case 190:
			text_buffer = "Booting into "
			text_buffer += "A"
			text_buffer += corupted_characters.charAt(Math.floor(Math.random() * corupted_haractersLength));
			text_buffer += corupted_characters.charAt(Math.floor(Math.random() * corupted_haractersLength));
			text_buffer += "A"
			text_buffer += "OS"
			text_buffer += "<br>"
			text_buffer += "The OS that empowers creativity<br>"
			text_buffer += "<br>"
			text_buffer += "<br>"
			text_buffer += "Loading Graphics Drivers<br>"
			break;
		case 195:
			text_buffer = "Booting into "
			text_buffer += corupted_characters.charAt(Math.floor(Math.random() * corupted_haractersLength));
			text_buffer += corupted_characters.charAt(Math.floor(Math.random() * corupted_haractersLength));
			text_buffer += "E"
			text_buffer += "A"
			text_buffer += "OS"
			text_buffer += "<br>"
			text_buffer += "The OS that empowers creativity<br>"
			text_buffer += "<br>"
			text_buffer += "<br>"
			text_buffer += "Loading Graphics Drivers<br>"
			break;
		case 200:
			text_buffer = "Booting into "
			text_buffer += corupted_characters.charAt(Math.floor(Math.random() * corupted_haractersLength));
			text_buffer += corupted_characters.charAt(Math.floor(Math.random() * corupted_haractersLength));
			text_buffer += "E"
			text_buffer += "J"
			text_buffer += "OS"
			text_buffer += "<br>"
			text_buffer += "The OS that empowers creativity<br>"
			text_buffer += "<br>"
			text_buffer += "<br>"
			text_buffer += "Starting Services<br>"
			text_buffer += "<br>"
			text_buffer += "<br>"
			text_buffer += "<div class=\"green\">     /\\   _    </div><br>"
			text_buffer += "<div class=\"green\">    /  \\ | |   </div>  ___   ___ <br>"
			text_buffer += "<div class=\"green\">   / /\\ \\| |   </div> / _ \\ / __|<br>"
			text_buffer += "<div class=\"green\">  / ____ | |__ </div>| (_) |\\__ \\<br>"
			text_buffer += "<div class=\"green\"> /_/    \\_____|</div> \\___/ |___/<br>"
			break;
		case 205:
			text_buffer = "Booting into "
			text_buffer += corupted_characters.charAt(Math.floor(Math.random() * corupted_haractersLength));
			text_buffer += corupted_characters.charAt(Math.floor(Math.random() * corupted_haractersLength));
			text_buffer += "E"
			text_buffer += "K"
			text_buffer += "OS"
			text_buffer += "<br>"
			text_buffer += "The OS that empowers creativity<br>"
			text_buffer += "<br>"
			text_buffer += "<br>"
			text_buffer += "Starting Services.<br>"
			text_buffer += "<br>"
			text_buffer += "<br>"
			text_buffer += "<div class=\"green\">     /\\   _    </div><br>"
			text_buffer += "<div class=\"green\">    /  \\ | |   </div>  ___   ___ <br>"
			text_buffer += "<div class=\"green\">   / /\\ \\| |   </div> / _ \\ / __|<br>"
			text_buffer += "<div class=\"green\">  / ____ | |__ </div>| (_) |\\__ \\<br>"
			text_buffer += "<div class=\"green\"> /_/    \\_____|</div> \\___/ |___/<br>"
			break;
		case 210:
			text_buffer = "Booting into "
			text_buffer += "A"
			text_buffer += corupted_characters.charAt(Math.floor(Math.random() * corupted_haractersLength));
			text_buffer += "E"
			text_buffer += corupted_characters.charAt(Math.floor(Math.random() * corupted_haractersLength));
			text_buffer += "OS"
			text_buffer += "<br>"
			text_buffer += "The OS that empowers creativity<br>"
			text_buffer += "<br>"
			text_buffer += "<br>"
			text_buffer += "Starting Services..<br>"
			text_buffer += "<br>"
			text_buffer += "<br>"
			text_buffer += "<div class=\"green\">     /\\   _    </div><br>"
			text_buffer += "<div class=\"green\">    /  \\ | |   </div>  ___   ___ <br>"
			text_buffer += "<div class=\"green\">   / /\\ \\| |   </div> / _ \\ / __|<br>"
			text_buffer += "<div class=\"green\">  / ____ | |__ </div>| (_) |\\__ \\<br>"
			text_buffer += "<div class=\"green\"> /_/    \\_____|</div> \\___/ |___/<br>"
			break;
		case 215:
			text_buffer = "Booting into "
			text_buffer += "A"
			text_buffer += corupted_characters.charAt(Math.floor(Math.random() * corupted_haractersLength));
			text_buffer += "F"
			text_buffer += corupted_characters.charAt(Math.floor(Math.random() * corupted_haractersLength));
			text_buffer += "OS"
			text_buffer += "<br>"
			text_buffer += "The OS that empowers creativity<br>"
			text_buffer += "<br>"
			text_buffer += "<br>"
			text_buffer += "Last Preperations<br>"
			text_buffer += "<br>"
			text_buffer += "<br>"
			text_buffer += "<div class=\"green\">     /\\   _    </div><br>"
			text_buffer += "<div class=\"green\">    /  \\ | |   </div>  ___   ___ <br>"
			text_buffer += "<div class=\"green\">   / /\\ \\| |   </div> / _ \\ / __|<br>"
			text_buffer += "<div class=\"green\">  / ____ | |__ </div>| (_) |\\__ \\<br>"
			text_buffer += "<div class=\"green\"> /_/    \\_____|</div> \\___/ |___/<br>"
			break;
		case 220:
			text_buffer = "Booting into "
			text_buffer += "A"
			text_buffer += corupted_characters.charAt(Math.floor(Math.random() * corupted_haractersLength));
			text_buffer += "F"
			text_buffer += corupted_characters.charAt(Math.floor(Math.random() * corupted_haractersLength));
			text_buffer += "OS"
			text_buffer += "<br>"
			text_buffer += "The OS that empowers creativity<br>"
			text_buffer += "<br>"
			text_buffer += "<br>"
			text_buffer += "Starting Login Service<br>"
			text_buffer += "<br>"
			text_buffer += "<br>"
			text_buffer += "<div class=\"green\">     /\\   _    </div><br>"
			text_buffer += "<div class=\"green\">    /  \\ | |   </div>  ___   ___ <br>"
			text_buffer += "<div class=\"green\">   / /\\ \\| |   </div> / _ \\ / __|<br>"
			text_buffer += "<div class=\"green\">  / ____ | |__ </div>| (_) |\\__ \\<br>"
			text_buffer += "<div class=\"green\"> /_/    \\_____|</div> \\___/ |___/<br>"
			break;
	}
	if(frame > 60 && frame <= 102){
		animation_cout1 += 6241;
		text_buffer = "Amethist Small BIOS v1.0.0, small and reliable <br>"
		text_buffer += "Copiright © 1994, Amethist Software Industries"
		text_buffer += "<br>"
		text_buffer += "Custom Build Verstion PowerPC32-X233<br>"
		text_buffer += "<br>"
		text_buffer += "CPU: Unknown (PowerPC at 450Mhz)<br>"
		text_buffer += "Memory test  :  " + animation_cout1 + "K OK<br>"
	}
}