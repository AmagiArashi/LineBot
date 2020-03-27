var express = require('express');
var router = express.Router();

console.log('webhook.js is working');
// linebot module
var linebot = require('linebot');

// linebot information
var bot = linebot({
channelId: '1653999902',
channelSecret: '10ff82e50387eb88633c08378a58afa4',
channelAccessToken: 'PPY2Q0PpHptFRP3iXoW7roMSvRoAa70ypwUi50UXHL6eIPu02yQlH1EUXdHaiAn5Day0ep+6viGUByp1UH7xxHD7Q6/Ieko5iAHYE8Rx4QyGmXFdSer8CtADR0uDFjY086tA9gXiAaPKGaCiXEUTNAdB04t89/1O/w1cDnyilFU='
});

// linebot message event
bot.on('message', function (event) {
var userInput = event.message.text;
var botReply = '你剛剛說了: ' + userInput;

// reply to user
event.reply(botReply).then(data => {
// if reply success
console.log('Reply: ', message);
}).catch(error => {
// if something went wrong
console.log('Error: ', error)
});
});

var linebotParser = bot.parser();
router.post('/', linebotParser);

module.exports = router;