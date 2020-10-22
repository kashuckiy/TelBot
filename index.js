const TelegramBot = require('node-telegram-bot-api');
const TOKEN = '788420263:AAEV8NT2xeljfJxlCG4L2WI825OpM6dqW-Q';

const Bot = new TelegramBot(TOKEN, {
    polling: true
});

let fruits = ["Яблоко", "Апельсин", "Слива"];
let myArray = [
    "за то, что мы вместе",
    "за то,ты всегда мне поможешь",
    "за то, что, с тобой я искренне смеюсь",
    "за то, что, несмотря ни на что, мы вместе",
    "за то, что ты всегда на моей стороне",
    "потому что ты делаешь меня счастливой",
    "за то, что ты греешь мои ладони, когда они мерзнут",
    "за то, что ты смотришь на меня особенно",
    "за то, что что ты терпишь мой характер и капризы",
    "потому что рядом с тобой я в безопасности",
];

console.log(myArray.length);


Bot.on('message', (msg) => {
    let rand = myArray[Math.floor(Math.random() * myArray.length)];

    console.log(msg);
    console.log(msg.date.valueOf());
    // Bot.sendMessage(msg.chat.id, msg.chat.first_name + ', Я люблю тебя ' + rand);
    // Bot.sendPhoto(msg.chat.id, 'C://Users/Turbo_bot/Downloads/1+1medialogo2020.jpg');
    Bot.sendLocation(msg.chat.id, 50.42858534653207, 30.476398502469742);
    
});