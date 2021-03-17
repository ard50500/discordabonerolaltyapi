const Discord = require("discord.js");
const client = new Discord.Client();
const jimp = require("jimp");
const ayarlar = require("./ayarlar.json"); 
const chalk = require("chalk");
const db = require("quick.db");
const fs = require("fs");
client.login(ayarlar.token);// Bu Bot Zego Share Tarafından Kodlanmıştır zekiarda.xyz 
const moment = require("moment");
require("./util/eventLoader")(client);


client.on("ready", async () => {
  client.appInfo = await client.fetchApplication();// Bu Bot Zego Share Tarafından Kodlanmıştır zekiarda.xyz 
  setInterval(async () => {
    client.appInfo = await client.fetchApplication();
  }, 600);
});
// Bu Bot Zego Share Tarafından Kodlanmıştır zekiarda.xyz 
const log = message => {
  console.log(` ${message}`);
};
require("./util/eventLoader.js")(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});// Bu Bot Zego Share Tarafından Kodlanmıştır zekiarda.xyz 
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {

      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.load = command => {
  return new Promise((resolve, reject) => {
    try {// Bu Bot Zego Share Tarafından Kodlanmıştır zekiarda.xyz 
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e); // Bu Bot Zego Share Tarafından Kodlanmıştır zekiarda.xyz 
    }
  });
};
client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`); //lrowsxrd
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve(); 
    } catch (e) {
      reject(e);
    }
  });// Bu Bot Zego Share Tarafından Kodlanmıştır zekiarda.xyz 
};
client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0; 
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};











// BOTUN GİRECEĞİ SES KANALI

client.on("ready", () => {
  client.channels.cache.get("821496656855564314").join();
});// Bu Bot Zego Share Tarafından Kodlanmıştır zekiarda.xyz 