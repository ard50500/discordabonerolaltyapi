
const Discord = require('discord.js'); 
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix
//Bu Bot Zego Share Tarafından Kodlanmıştır zekiarda.xyz 
module.exports.run = async(client, message, args) => {
 
 let sayfalar = [`
      > :lock: [${prefix}abone](https://www.zekiarda.xyz)
      > **• Abone Rolu Verirsiniz.**
      > :lock: [${prefix}abone-mesaj](https://www.zekiarda.xyz) 
      > **• Abone Mesajinin Nereye Gitceğini Belirlersiniz.**
      > :lock: [${prefix}abone-sorumlusu @rol](https://www.zekiarda.xyz) 
      > **• Abone Sorumlusunun Rolunu Ayarlayabilirsin.**
      > :lock: [${prefix}abone-rol @rol](https://www.zekiarda.xyz)
      > **• Abone Rolunu Ayarlarsınız.**`]; 
  let page = 1; 
 
  const embed = new Discord.MessageEmbed()
    .setTitle("Abone Rol Bot") //Bu Bot Zego Share Tarafından Kodlanmıştır zekiarda.xyz 
    .setTitle("Abone Rol Bot") 
    .setColor("#501c67")
    .setFooter(`Sayfa ${page} - ${sayfalar.length}`) 
    .setDescription(sayfalar[page-1])
    .setTimestamp()
   .setImage('https://media.discordapp.net/attachments/821496896492273695/821692252442460170/Baslksz-1.jpg')
 
  message.channel.send(embed).then(msg => { 
   
     
     
      
      
      
     
   
    })// Bu Bot Zego Share Tarafından Kodlanmıştır zekiarda.xyz 
 

 // Bu Bot Zego Share Tarafından Kodlanmıştır zekiarda.xyz 
}// Bu Bot Zego Share Tarafından Kodlanmıştır zekiarda.xyz 

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım-youtube","youtube",],
  permLevel: 0
};

module.exports.help = {
  name: 'sunucu',
  description: 'Sunucu komutlarını gösterir.',
  usage: 'youtube'
};