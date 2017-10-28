const Discord = require('discord.js');
const bot = new Discord.Client();

let prefix = 'p!';

const eightball = ["According to Wikipedia, yes.","So it seems.","Of course! <:CheerfulOsha:364561567104106498>",
    "YEAH BOI!","Def1n1tely.","Sure, whatever that means.","Uh, *obviously*.","Was that even a question?",
    "Yeah. I thought you asked this already.","About as certain as Miyolophone's next chips victory!",
    "...I didn't get that, what?","Dude, not now... please...","Ask me when I care, you fart.","Hmmmmm <:thonk:364561417497477120>",
    "I don't care, dude.","Well, what do *YOU* think the answer is?","Ehhhhhhhh probably not.",
    "Def1n1tely not.","Doesn't seem like it.","No. I thought you asked this already.","NAH BRUH.",
    "That wouldn't even make sense.","All the flatearthers say so. So no.","Nononononononono",
    "Ahhh, sorry. <:SadOsha:364561567032803328>","You can count on it not being that."];

const tictac = {
    board: [[" "," "," "],[" "," "," "],[" "," "," "]]
}
let manageTictac = function(input) {
    let tokens = input.split(' ');
    let command = tokens[0];
    if ((command === 'playO' || command === 'playX') && tokens[1] != undefined && tokens[2] != undefined) {
        if (tokens[1].isNaN || tokens[2].isNaN || tokens[1] >= 3 || tokens[2] >= 3 || tokens[1] != parseInt(tokens[1], 10) || tokens[2] != parseInt(tokens[2], 10))
            return 'Error: Must specify valid play locations';
        if (tictac.board[tokens[1]][tokens[2]] != " ")
            return 'Error: Must play in an empty location';
        tictac.board[tokens[1]][tokens[2]] = command.substring(4); 
        return command.substring(4) + ' played.';
    }
    else if (command === 'reset') {
        for (let i = 0; i < tictac.board.length; i++) {
            tictac.board[i] = tictac.board[i].map(item => " ");
        }
        return 'Game reset.';
    }
    else if (command === 'print') {
        let out = '```\n  0   1   2\n';
        for (let i = 0; i < tictac.board.length; i++) {
            out += i + ' ' + tictac.board[i][0] + ' | ' + tictac.board[i][1] + ' | ' + tictac.board[i][2] + '\n';
            out += (i < tictac.board.length-1 ? '  ---------\n' : '');
        }
        return out + '```';
    }
    else {
        return 'Error: not a valid tictactoe command.';
    }
}


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
                message.channel.send(input.substring(command.length).split('ing').join('ong').split('ING').join('ONG'));
                break;
            // !EMOJI
            case 'emoji':
                let toEmoji = input.substring(command.length);
                let result = toEmoji.replace(/[a-z]/g,':regional_indicator_$&:');
                message.channel.send(result);
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
            
            // TICTACTOE
            case 'tictac':
                let ping = manageTictac(input.substring(command.length+1));
                let out = manageTictac('print');
                message.channel.send(ping);
                message.channel.send(out);
                break;

            // !DEFAULT
            default:
                message.channel.send('Error: unknown command.');
        }
    }


});

bot.login('MzY4NTEyNjIxMjc3NjA5OTg3.DMP7mA.uz_3v0eiSQNwqXy-Pep66M0Xkfs');