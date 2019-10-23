// Install Discord.js Master Version : npm install discordjs/discord.js
const { Client, MessageEmbed } = require("discord.js");
const client = new Client({
  disableEveryone: true
});

/* eslint-disable no-inline-comments */
const EmiliaAPI = require("../index"); // Change this with require('emilia-api.js');
const emilia = new EmiliaAPI("Your Emilia-api access token");

client.on("ready", () => console.log("The bot is ready."));

client.on("message", async message => {
  const prefix = "Bot prefix should be here";
  const args = message.content
    .substring(prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();

  if (command === "achievement") {
    const text = args.join(" ");
    if (!text) return message.reply("Please provide a text!"); // Return if no text provided by user;
    const image = emilia.generators.achievement(message.author.displayAvatarURL({ format: "png", size: 1024 }), text);
    const embed = new MessageEmbed()
      .attachFiles({ attachment: image, name: "achievement.png" })
      .setImage("attachment://achievement.png");
    message.channel.send({ embed });
  }
});

client.login("Your Bot Token.").catch(console.error);
