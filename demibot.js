
const Discord = require('discord.js');
const token = 'xxxxx';
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Boy deployed!');
    

    client.channels.find(x => x.name === 'dxxxxx').send('Logging in (⌐■_■)');
});

client.login("token");

/* New Member Greet */
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'xxxxx');
  if (!channel) return;
  channel.send(`Welcome to the League, ${member}`);
});




/* Hi DemiBot! */
client.on('message', msg => {
  if (msg.content.toLowerCase().startsWith('hi demibot')) {
    msg.reply('Hello, friend!');
  };
    

  if (msg.content.toLowerCase().startsWith('hello demibot')) {
    msg.reply('Hello, friend!');
  };
    

    /* Thanks DemiBot! */
  if (msg.content.toLowerCase().startsWith('thanks demibot')) {
    msg.reply("You're welcome!");
  };
    
    /* Face Pls */
  if (msg.content.toLowerCase().startsWith('facepls')) {
      
      var result = (rando);
      var rando = Math.floor(Math.random() * 5);

     if (rando === 0) {
        result = "OuO";
    }
    else if (rando === 1) {
        result = "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧";
    }
   else if (rando === 2) {
        result = "ʕノ•ᴥ•ʔノ ︵ ┻━┻";
    }
    else if (rando === 3) {
        result = "UwU";
    }
    else {
        result = "(✿◠‿◠)"
    }
      
      msg.channel.send(result);
  }
    
/* Meme Pls */
   
  if (msg.content.toLowerCase().startsWith("memepls")) {
    
      var rando2 = Math.floor(Math.random() * 9);

     if (rando2 === 0) {
        msg.channel.send ("Here's a meme!", {files: ["images/img01.jpeg"]})
    }
    else if (rando2 === 1) {
        msg.channel.send ("Here's a meme!", {files: ["images/img02.jpg"]})
    }
   else if (rando2 === 2) {
        msg.channel.send ("Here's a meme!", {files: ["images/img03.png"]})
    }
    else if (rando2 === 3) {
        msg.channel.send ("Here's a meme!", {files: ["images/img04.jpg"]})
    }
      else if (rando2 === 4) {
        msg.channel.send ("Here's a meme!", {files: ["images/img06.jpg"]})
    }
           else if (rando2 === 5) {
        msg.channel.send ("Here's a meme!", {files: ["images/img07.jpg"]})
    }
       else if (rando2 === 6) {
        msg.channel.send ("Here's a meme!", {files: ["images/img08.jpg"]})
    }
      else if (rando2 === 7) {
        msg.channel.send ("Here's a meme!", {files: ["images/img09.jpeg"]})
    }
      else if (rando2 === 8) {
        msg.channel.send ("Here's a meme!", {files: ["images/img10.jpg"]})
    }
    else {
        msg.channel.send ("Here's a meme!", {files: ["images/img05.jpg"]})
    }
    
    

  }
    
});





client.login(token);