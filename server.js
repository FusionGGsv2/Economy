const discord = require('discord.js');
const client = new discord.Client({disableEveryone: true});
const token = process.env.token;

const fs = require('fs');
client.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if(jsfile.length <= 0){
        console.log("Couldn't find commands.");
        return;
    }

    jsfile.forEach((f, i) =>{
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        client.commands.set(props.help.name, props);
    });
});


client.on("ready", async => {
client.user.setActivity("coded by FusionGGs!")
console.log("Client is online!")
})

client.login(process.env.token)
