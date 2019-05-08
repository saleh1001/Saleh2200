const Discord = require('discord.js');
const Client = new Discord.Client();

client.on('message', message => {
    var PREFIX = "*"
    if (!message.content.startsWith(PREFIX)) return;
    var args = message.content.split(' ').slice(1);
    var argresult = args.join(' ');
    if (message.author.id !== "574309422051098634") return;
  
  if (message.content.startsWith(PREFIX + 'setgame')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`Playing: **${argresult}**`)
  } 
  
  if (message.content.startsWith(PREFIX + 'setstream')) {
    client.user.setGame(argresult, "https://www.twitch.tv/mrmnaq");
       console.log('test' + argresult);
      message.channel.sendMessage(`Streaming: **${argresult}**`)
  } 
  
  if (message.content.startsWith(PREFIX + 'setname')) {
    client.user.setUsername(argresult).then
        message.channel.sendMessage(`Username Changed To **${argresult}**`)
    return message.reply("You Can change the username 2 times per hour");
  } 
  if (message.content.startsWith(PREFIX + 'setavatar')) {
    client.user.setAvatar(argresult);
     message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
  }
  });

client.login("NTc0MzA5NDIyMDUxMDk4NjM0.XNDRzw.d2tjogtqculpz6HW6z4zXXnK_Z4")
