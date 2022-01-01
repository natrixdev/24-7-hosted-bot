const Math = require("math");
const config = require("./config.json")
const Eris = require("eris");
const bot = new Eris.Client(process.env.TOKEN, {
  intents: ["guilds", "guildMessages", "guildBans"],
});

let xp = Math.floor(Math.random() * 156) + 15;
bot.on("ready", () => {
  console.log("Ready! - natrix meilleur dev ya tout qui marche");
});
bot.on("ready", async () => {
  console.log(`Logged in as ${bot.user.username}#${bot.user.discriminator} in ${bot.guilds.size} guilds.`);
  bot.editStatus("online", {
    type: 1,
    name: "Protector",
    url: "https://twitch.tv/discord-protector",
  });
});


memberList = guild.members

bot.on("messageCreate", (msg) => {
  if(msg.content === "members") {
    bot.createMessage(msg.channel.id, memberList);
  }
});

bot.connect();
