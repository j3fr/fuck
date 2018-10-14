const fs = require('fs')
const Canvas = require('canvas')
const jimp = require('jimp')
const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment')
const prefix = '#';


client.on('message', message => {
    let args = message.content.split(" ").slice(1);
if (message.content.startsWith(prefix + 'clear')) {
                  if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.sendMessage('انت لا تمتلك الصلاحيات اللازمة لهذا الامر')

 let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 100) return message.reply(" يجب ان يكون عدد المسح أقل من 100 .").then(messages => messages.delete(5000))
    if (!messagecount) return message.reply(" أختر كميه الرسائل المراد مسحها .").then(messages => messages.delete(5000))
    message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
    message.channel.send(`\`${args}\` : عدد الرسائل التي تم مسحها `).then(messages => messages.delete(5000));
  }
  });
client.on('message',function(message) {
    let messageArray = message.content.split(' ');
    let muteRole = message.guild.roles.get('501055487861587988') || message.guild.roles.find('name', 'Muted');
    let muteMember = message.mentions.members.first();
    let muteReason = messageArray[2];
    let muteDuration = messageArray[3];
   if(message.content.startsWith(prefix + "mute")) {
       if(!muteRole) return message.guild.createRole({name: 'Muted'}).then(message.guild.channels.forEach(chan => chan.overwritePermissions(muteRole, {SEND_MESSAGES:false,ADD_REACTIONS:false})));
       if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.channel.send('انت لا تمتلك الصلاحيات اللازمة لهذا الامر');
       if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send('انت لا تمتلك الصلاحيات اللازمة لهذا الامر');
       if(!muteMember) return message.channel.send('منشن شخص');
       if(!muteReason) return message.channel.send('حدد سبباّ');
       if(!muteDuration) return message.channel.send('حدد وقت زمني');
       if(!muteDuration.match(/[1-7][s,m,h,d,w]/g)) return message.channel.send('حدد وقت زمني صحيح');
       message.channel.send(`:white_check_mark: تم اعطاء العضو ميوت : ${muteMember}`);
       muteMember.addRole(muteRole);
       muteMember.setMute(true)
       .then(() => { setTimeout(() => {
           muteMember.removeRole(muteRole)
           muteMember.setMute(false)
       }, mmss(muteDuration));
       });
   } 
});
client.on('message', message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
    if(message.content.toLowerCase().startsWith(prefix + "uptime")) {
      let upTime = process.uptime();
  
      let days = Math.floor(upTime / 86400);
      upTime %= 86400;
  
      let hrs = Math.floor(upTime / 3600);
      upTime %= 3600;
  
      let min = Math.floor(upTime / 60);
      let sec = Math.floor(upTime % 60);
  
      message.channel.send(`\`${days} days, ${hrs} hrs, ${min} min, ${sec} sec\``);
    }
});
     client.on("message", message => {
    if (message.author.bot) return;
    
    let command = message.content.split(" ")[0];
  
    if (command === prefix + "unmute") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("انت لا تمتلك الصلاحيات اللازمة لهذا الامر").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("انت لا تمتلك الصلاحيات اللازمة لهذا الامر").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('#unmute منشن الشخص').catch(console.error);
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('الأستعمال:', 'اتكلم')
      .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
  
    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** ⚠ | `[MANAGE_ROLES_OR_PERMISSIONS]`لا يوجد لديك صلاحية **').catch(console.error);
  
    if (message.guild.member(user).removeRole(muteRole.id)) {
  return message.reply("**:speaker: تم فك الميوت عن الشخص **").catch(console.error);
  } else {
      message.guild.member(user).removeRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: تم فك الميوت عن الشخص **").catch(console.error);
  });
    }
  
  };
  
  });
const arraySort = require('array-sort'),
table = require('table');

client.on('message' , async (message) => {

    if(message.content.startsWith(prefix + "topinvite")) {

  let invites = await message.guild.fetchInvites();

    invites = invites.array();

    arraySort(invites, 'uses', { reverse: true });

    let possibleInvites = [['الدعوات', 'الاشخاص']];
    invites.forEach(i => {
      possibleInvites.push([i.inviter.username , i.uses]);
    })
    const embed = new Discord.RichEmbed()
    .setColor(0x7289da)
    .setTitle("دعوات السيرفر")
    .addField(' المتصدرين' , `${table.table(possibleInvites)}`)

    message.channel.send(embed)
    }
});
client.on("message", message => {
    if (message.author.bot || !message.guild) return; 
    let score;
    
    if (message.guild) {
      score = client.getScore.get(message.author.id, message.guild.id);
      if (!score) {
        score = { id: `${message.guild.id}-${message.author.id}`, user: message.author.id, guild: message.guild.id, points: 0, level: 1 };
      }
      score.points++;
      const curLevel = Math.floor(0.1 * Math.sqrt(score.points));
      client.setScore.run(score);
    }
    if (message.content.indexOf(prefix) !== 0) return;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    if(command === "points") {
      return message.reply(`You currently have ${score.points} points and are level ${score.level}!`);
    }
    
    if(command === "give") {
      if(!message.author.id === message.guild.owner) return message.reply("You're not the boss of me, you can't do that!");
      const user = message.mentions.users.first() || client.users.get(args[0]);
      if(!user) return message.reply("You must mention someone or give their ID!");
      const pointsToAdd = parseInt(args[1], 10);
      if(!pointsToAdd) return message.reply("You didn't tell me how many points to give...");
          let userscore = client.getScore.get(user.id, message.guild.id);      
      if (!userscore) {
        userscore = { id: `${message.guild.id}-${user.id}`, user: user.id, guild: message.guild.id, points: 0, level: 1 };
      }
      userscore.points += pointsToAdd;
      let userLevel = Math.floor(0.1 * Math.sqrt(score.points));
      userscore.level = userLevel;
      client.setScore.run(userscore);
    
      return message.channel.send(`${user.tag} has received ${pointsToAdd} points and now stands at ${userscore.points} points.`);
    }
    
    if(command === "leaderboard") {
      const top10 = sql.prepare("SELECT * FROM scores WHERE guild = ? ORDER BY points DESC LIMIT 10;").all(message.guild.id);
      const embed = new Discord.RichEmbed()
        .setTitle("**TOP 10 TEXT** :speech_balloon:")
        .setAuthor('📋 Guild Score Leaderboards', message.guild.iconURL)
        .setColor(0x00AE86);
  
      for(const data of top10) {
        embed.addField(client.users.get(data.user).tag, `XP: \`${data.points}\` | LVL: \`${data.level}\``);
      }
      return message.channel.send({embed});
    }
    
  });
client.on('message', ( message ) => {
  if(message.author.bot) return;

  if(message.channel.id !== '500341901363380225') return;

  let types = [
    'jpg',
    'jpeg',
    'png',
    'gif',
    'mp4',
    'avi',
    'mkv',
    'mpeg'
  ]

  if (message.attachments.size <= 0) {
    message.delete();
    message.channel.send(`${message.author}, هذا الروم مخصص للصور و الفديوهات فقط `)
    .then(msg => {
      setTimeout(() => {
        msg.delete();
      }, 5000)
  })
  return;
}

  if(message.attachments.size >= 1) {
    let filename = message.attachments.first().filename
    console.log(filename);
    if(!types.some( type => filename.endsWith(type) )) {
      message.delete();
      message.channel.send(`${message.author}, هذا الروم مخصص للصور و الفديوهات فقط`)
      .then(msg => {
        setTimeout(() => {
          msg.delete();
        }, 5000)
      })
    }
  }

})
client.login(process.env.BOT_TOKEN);
