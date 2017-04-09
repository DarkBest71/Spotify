exports.action = function(data, callback, config, SARAH) {
  
var exec = require('child_process').exec;
 
switch(data.val) {

 	case "runSpotify": // ouvre le logiciel skype
	var process = '%CD%/plugins/Spotify/bin/runSpotify.bat';
	var Txt = new Array; 
	Txt[0] = " Spotify vas souvrire";
    break;  	
	  
	case "closeSpotify":// ferme le logiciel skype
	var process = '%CD%/plugins/Spotify/bin/closeSpotify.bat';
	var Txt = new Array; 
	Txt[0] = " Spotify et en coure de férmeture";
    break; 
	
	 var child = exec(process,
 function (error, stdout, stderr) {
    console.log(process);
   });
Choix = Math.floor(Math.random() * Txt.length); 
callback({'tts': Txt[Choix]});
}