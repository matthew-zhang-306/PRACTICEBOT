const Discord = require('discord.js');
const bot = new Discord.Client();

let prefix = 'p!';

const eightball = ["According to Wikipedia, yes.","So it seems.","Of course! :CheerfulOsha:",
    "YEAH BOI!","Def1n1tely.","Sure, whatever that means.","Uh, *obviously*.","Was that even a question?",
    "Yeah. I thought you asked this already.","About as certain as Miyolophone's next chips victory!",
    "...I didn't get that, what?","Dude, not now... please...","Ask me when I care, you fart.","Hmmmmm :thonk:",
    "I don't care, dude.","Well, what do *YOU* think the answer is?","Ehhhhhhhh probably not.",
    "Def1n1tely not.","Doesn't seem like it.","No. I thought you asked this already.","NAH BRUH.",
    "That wouldn't even make sense.","All the flatearthers say so. So no.","Nononononononono",
    "Ahhh, sorry. :SadOsha:","You can count on it not being that."];



bot.on('message', (message) => {
    
    if (message.content.startsWith(prefix)) {
        
        let input = message.content.substr(prefix.length);
        let tokens = input.split(" ");

        // get command
        let command = tokens[0];

        switch (command) {
            // !HELP
            case 'help':
                message.channel.send('dm capabilities coming soon');
                break;
            // !ING
            case 'ing':
                message.channel.send(input.substring(command.length).split('ing').join('ong'));
                break;
            // !ROLL
            case 'roll':
                if (!isNaN(tokens[1])) {
                    let rand = Math.random();
                    message.channel.send(`You rolled ${Math.floor(rand*tokens[1])+1}`);
                } else {
                    message.channel.send("Error: argument must be an integer");
                }
                break;
            // !FLIP
            case 'flip':
                message.channel.send(Math.random() >= 0.5 ? 'Heads!' : 'Tails!');
                break;
            // !8BALL
            case '8ball':
                let rand = Math.floor(Math.random() * eightball.length);
                message.channel.send(eightball[rand]);
                break;
            // !DEFAULT
            default:
                message.channel.send('Error: unknown command.');
        }
    }


});

bot.login('MzY4NTEyNjIxMjc3NjA5OTg3.DMP7mA.uz_3v0eiSQNwqXy-Pep66M0Xkfs');