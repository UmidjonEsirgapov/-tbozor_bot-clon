const TelegramBot = require('node-telegram-bot-api');
const token = '1090907768:AAHzs7V-w7c6aaLJ55am7_tfWZeyq_ZtzqQ';
const bot = new TelegramBot(token, { polling: true });

// take contact 
bot.onText(/\/start/, function(msg, match) {
    let option = {
        "parese_mode": "HTML",
        "reply_markup": {
            "one_time_keyboard": true,
            "keyboard": [
                [{
                    text: "Telefon raqamni yuborish",
                    request_contact: true
                }]
            ]
        }
    }

    bot.sendMessage(msg.chat.id, 'Assalomu Alaykum ' + msg.from.first_name + ' TBozor ga xush kebilsiz!', option);

});