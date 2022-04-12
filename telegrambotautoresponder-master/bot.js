require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

// ---------- LOGGIN FEATURES ----------
var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/debug.log', { flags: 'a' });
var log_stdout = process.stdout;

console.log = function (d) { //
	log_file.write(util.format(d) + '\n');
	log_stdout.write(util.format(d) + '\n');
};
// ---------- LOGGIN FEATURES END ----------

console.log("[DEBUG] Bot is starting...");


bot.on('message', (msg) => {
	if (msg.text != null) {
          const chatId = msg.chat.id;
          bot.sendPhoto(chatId, "./media/images/" + msg.text + ".jpg");
	}
});
