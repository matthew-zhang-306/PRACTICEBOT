const Discord = require('discord.js');
const bot = new Discord.Client();

let prefix = 'p!';

bot.on('message', (message) => {
    
    if (message.content.startsWith(prefix)) {
        let command = message.content.substr(prefix.length);

        if (command === 'help') {
            message.channel.send('type "p![a phrase containing "ing"]" and i\'ll return the same phrase containing "ong" instead');
        }
        else if (command.indexOf('ing') >= 0) {
            message.channel.send(command.split('ing').join('ong'));
        }
        else {
            message.channel.send('Use p!help');
        }
    }


});

bot.login('MzY4NTEyNjIxMjc3NjA5OTg3.DMP7mA.uz_3v0eiSQNwqXy-Pep66M0Xkfs');