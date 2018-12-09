const Discord = require('discord.js'),
    client = new Discord.Client({sisableEveryone: true})
    console.log("muuuuuuuuute,");
client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("521046158987100170");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`** Welcome To ToP Server :herb: :hearts:**`), 4000)        
}
});
client.login(process.env.TOKEN);