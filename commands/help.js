const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    async run (client, message, args){

        //Sort your commands into categories, and make seperate embeds for each category

        const economy = new Discord.MessageEmbed()
        .setTitle('Economy!')
        .addField('`!bal`', 'gets the balance of a user')
        .addField('`!buy`', 'buy something from the shop')
        .addField('`!work`', 'work and earn money')
        .addField('`!store`', 'visit the store') 
        .addField('`!inventory`', 'sees what items you have bought')
        .setTimestamp()

        const utility = new Discord.MessageEmbed()
        .setTitle('Utility!')
        .addField('`!ping`', 'get the ping of the bot')
        .addField('`!uptime`', 'see how long the bots been up for')
        .setTimestamp()
    
    
    
    
    const pages = [
                economy,
                utility
              
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}




module.exports.help = {
  name: "help",
  description: "sends the help menu with all available commands!"
};
