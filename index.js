const { Client, Intents, MessageEmbed } = require ("discord.js")
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_MEMBERS]});
client.once("ready", () => {
    console.log(`${client.user.tag} is now online!`)
})
client.on("messageCreate", async message =>{
    if (message.content.startsWith("!ping"))
    {
        message.channel.send(`The client websocet latency is ${client.ws.ping}ms (values in milliseconds)`)
    }
});

var welcomeEmbed = new MessageEmbed()
.setTitle(`Welcome to FEMBOY HOOTERS`)
.setDescription(` Heylo and welcome. Feel free to grab some roles that apply to you in <#897645568048889882> and introduce yourself in <#898229022570455110>, If you want some positivity then check out <#907341170986848306>, got any nature photo's you'd like to share? then please post them in <#905765568097972234>  (we'd love to see them) ofc please be respectful to all members 🙂 If you've got any questions feel free to message either <@352870172760997889>, <@741065489832214558> or <@845957937544560650> `)
//Image on the right: *.setThumbnail()*
.setColor(`DARK_VIVID_PINK`)
.setFooter(`FEMBOY HOOTERS`)
.setTimestamp();


client.on("guildMemberAdd", async (member) => {
  const channel = await member.guild.channels.fetch("897647924610211841");
  channel.send({embeds: [welcomeEmbed]});
});

client.login("")