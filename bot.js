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
    if(message.content === '2h4'){
        message.channel.send('#daily')
    }
});
client.on('message', message => {
    if(message.content === '2h4'){
        message.channel.send('#credits')
    }
});
client.on('message', message => {
    if(message.content === '2h4'){
        message.channel.send('#rep <@446020555808964619>')
    }
});
    client.on('message', message => {
        var prefix = "!";
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;
      
        let command = message.content.split(" ")[0];
        command = command.slice(prefix.length);
      
      
      let args = message.content.split(" ").slice(1);
      let x = args.join(" ")
        if(message.content.startsWith(prefix + 'say')) {
            message.channel.send(''+x);
                message.delete(999)
        }
        
       
      });
client.on('ready', async() => {
var server = "500241063001194507"; // ايدي السررفر
var channel = "`507560225772011521`,`503970977722531840`,`503970988136857610`,`507561247030378506`,`505260225360822274`,`507898167925407757`,`507898179493036033`,`507898193560993802`,`507898203274870815`,`507898218194010113`,`507939183759720448``507939195504033804`";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('** 1, 2, 3, 4, 5, 6, 7, 8, 9,  10,  11,  12,  13,  14,  15, **')
    },305);
})



client.login(process.env.BOT_TOKEN); 
