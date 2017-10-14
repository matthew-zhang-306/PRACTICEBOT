const Discord = require('discord.js');
const bot = new Discord.Client();

let prefix = 'p!';

bot.on('message', (message) => {
    
    if (message.content.startsWith(prefix)) {
        
        let input = message.content.substr(prefix.length);
        let tokens = input.split(" ");

        // get command
        let command = tokens[0];

        // !HELP
        if (command === 'help') {
            message.channel.send('type "p![a phrase containing "ing"]" and i\'ll return the same phrase containing "ong" instead');
        }
        // !ING
        else if (command === 'ing') {
            message.channel.send(input.substring(command.length).split('ing').join('ong'));
        }
        // !ROLL
        else if (command === 'roll') {
            if (!isNaN(tokens[1])) {
                let rand = Math.random(0,tokens[1]-1);
                message.channel.send(`You rolled ${Math.floor(rand*tokens[1])+1}`);
            } else {
                message.channel.send("Error: argument must be an integer");
            }
        }
        // !DEFAULT
        else {
            message.channel.send('Use p!help');
        }
    }


});

bot.login('MzY4NTEyNjIxMjc3NjA5OTg3.DMP7mA.uz_3v0eiSQNwqXy-Pep66M0Xkfs');