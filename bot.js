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
client.on('ready', async() => {
var server = ""; 
var channel = "";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**Stranger Spam , Stranger Spam , Stranger Spam , Stranger Spam , Stranger Spam , Stranger Spam , Stranger Spam , Stranger Spam , Stranger Spam , Stranger Spam , Stranger Spam , Stranger Spam , Stranger Spam , Stranger Spam , Stranger Spam , Stranger Spam , Stranger Spam , **')
    },305);
})
client.login(process.env.BOT_TOKEN); 
