counst Discord = require('discord.js');
counst client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot is Online!');
    });

client.on('message', message => {
    if (message.content === 'hi'){
      message.reply('Hi How are you today');
      }
});

//THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
