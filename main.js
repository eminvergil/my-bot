var Twit = require('twit');
let config = require('./config');

var T = new Twit(config);

//processing-java --sketch="C:\Users\PC\Documents\GitHub\my-bot\blabla" --run

var exec =  require('child_process').exec;
var fs = require('fs');



tweetIt();
setInterval(tweetIt,1000*60*30);

function tweetIt(){
	var cmd ='processing-java --sketch="https://github.com/emocanmimocan/my-bot/tree/master/blabla" --run';
	
	exec(cmd,processing);
	
	function processing(){
		let filename = 'https://github.com/emocanmimocan/my-bot/tree/master/blabla/output.png';
		let params = {
			encoding: 'base64'
		}
		var b64content = fs.readFileSync(filename, params);
		T.post('media/upload', { media_data: b64content },uploaded); 
		function uploaded(err,data,response){
			  //this is tweetnig part

			 var id = data.media_id_string
			 let tweet = {
			 	status : '',
			 	media_ids:[id]
			 }
			 T.post('statuses/update',tweet,tweeted);
			 function tweeted(){
			 	console.log("done");
			 }
		}
	}


}
// var tweet = {
// 	status:"blabla"
// }
// T.post('statuses/update',tweet,tweeted);
// function tweeted(err,data,response) {
// 	console.log(data);
// }