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
client.on('message', message => {
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Stranger Spam** ${x}`)
          .then(m => {
            count++;
          })
          
        }
      }
});
client.on('ready', async() => {
var server = "500241063001194507"; 
var channel = "509204678207209472";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**Stranger Spam , Stranger Spam , Stranger Spam , Stranger Spam , Stranger Spam , Stranger Spam , Stranger Spam , Stranger Spam , Stranger Spam , Stranger Spam , Stranger Spam , Stranger Spam , Stranger Spam , Stranger Spam , Stranger Spam , Stranger Spam , Stranger Spam , Stranger Spam , **')
    },305);
})



client.login(process.env.BOT_TOKEN); 
