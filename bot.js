const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjU3MTUyODEwNDA3OTUyMzk0.XftDpQ.BhF-_t-p2pFAzGxfSCclj0cJg-U';

const PREFIX = '-';

bot.on('Ready', () =>{
    console.log('Bot is Online!');  
})

bot.on('message', message=>{
    if(message.content ===  "hi"){
        message.reply('Hello Friend how are you Today : )');
    }
    
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.sendMessage('Pong!')
            break;
        case 'youtube':
            message.channel.sendMessage('https://cutt.ly/urwReKP')
            break;
        case 'clear':
            if(!args[1]) return message.reply('Please define second arg')
            message.channel.bulkDelete(args[1]);
            break;      
    }

    }
)

bot.login(token);
