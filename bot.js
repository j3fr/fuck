const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('======================================')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('=======================================')
});





client.on('message', message => {
    if(message.content === '.'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === '.'){
        message.channel.send('#credits')
    }
});


client.on('message', message => {
    if(message.content === '.'){
        message.channel.send('#rep <@446020555808964619>')
    }
});

client.on('message', message => {
    if(message.content === '.'){
        message.channel.send('#rep <@446020555808964619>')
    }
});

client.on('message', message => {
    if(message.content === '.'){
        message.channel.send('#rep <@446020555808964619>')
    }
});



client.on('message', message => {
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`iwihusalikbdaiubdja ${x}`)
          .then(m => {
            count++;
          })
          
        }
      }
});

const prefix = ['.']
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "say" ) {
let rank = message.guild.member(message.author).roles.find('name', '.');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client.login(process.env.BOT_TOKEN); 
