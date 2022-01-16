const Discord = require('discord.js');
// const client = new Discord.Client();
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on('ready', () => console.log(`Logged in as ${client.user.tag}.`))

client.on("messageCreate",msg => {
  if(msg.content === "pong"){
    msg.reply("ping")
  }
})
client.login(process.env.TOKEN);

