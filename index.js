// ================= START BOT CODE ===================
const Discord = require('discord.js');
// const adapter { createDiscordJSAdapter } = require('./adapter');
// const client = new Discord.Client();
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_VOICE_STATES"], permissions: ["CREATE_PUBLIC_THREADS"] });
let connection, channel;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (msg) => {
  if (msg.content == 'ping') {
	  msg.reply('pong!');
  }
  else if (msg.content == 'join') {
    const { joinVoiceChannel } = require("@discordjs/voice");
		channel = msg.member.voice.channel;

    connection = joinVoiceChannel({
      channelId: channel.id,
      guildId: channel.guild.id,
      adapterCreator: channel.guild.voiceAdapterCreator,
    });
  }
	else if (msg.content == 'leave') {
		connection.disconnect();
	}
	else if (msg.content == '.aqui') {
    	channel = msg.member.text.channel;
		const thread = msg.ThreadManager.channel.threads.create({
      name: 'food-talk',
      autoArchiveDuration: 60,
      reason: 'Needed a separate thread for food',
    })
    .then(threadChannel => console.log(threadChannel))
    .catch(console.error);
	}
});
client.login(process.env.TOKEN);
/*const Discord = require('discord.js');
// const client = new Discord.Client();
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on('ready', () => console.log(`Logged in as ${client.user.tag}.`))

client.on("messageCreate",msg => {
  if(msg.content === "pong"){
    msg.reply("ping")
  }
})
*/

