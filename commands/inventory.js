const db = require("quick.db");
const Discord = require("discord.js");

module.exports = {
  async run(client, message, args) {
    let items = await db.fetch(message.author.id);
    if (items === null) items = "Nothing";

    const Embed = new Discord.MessageEmbed().addField("Inventory", items);

    message.channel.send(Embed);
  }
};

module.exports.help = {
  name: "inventory",
  description: "view your inventory",
  aliases: ["inv"]
};