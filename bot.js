
const Discord = require('discord.js'),
    bot = new Discord.Client({sisableEveryone: true})
    console.log("muuuuute,");
const client = new Discord.Client();




 const devs = ['311603535466856458' , '459494280193507338' , ''];
const adminprefix = "a";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**  ${argresult} ply .. :white_check_mark:**`)
  } else 
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**  ${argresult} wt .. :white_check_mark:**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**  ${argresult} ls .. :white_check_mark:**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/By_Adam");
      message.channel.sendMessage(`**  ${argresult} st .. :white_check_mark:**`)
    }
  if (message.content.startsWith(adminprefix + 'us')) {
  client.user.setUsername(argresult).then
      message.channel.send(`**us ..**${argresult}** `)
  } else
  if (message.content.startsWith(adminprefix + 'av')) {
  client.user.setAvatar(argresult);
    message.channel.send(`**avatar ... :** `);
  }
  });
client.login("NDU5NDk0MjgwMTkzNTA3MzM4.Dv5sOA.LLLTZhUdevvfP9DPqkpstmZpYbw")
