let database = require("quick.db")
let ayarlar = require("../ayarlar.json")//Bu Bot Zego Share Tarafından Kodlanmıştır zekiarda.xyz 



exports.run = async(client, message) => {
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.reply('Bu komutu kullanmak için yetkin yetersiz')
  
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send(`Aboneleri Verecek Rolü Etiketlemen Lazım`)
  
  //Bu Bot Zego Share Tarafından Kodlanmıştır zekiarda.xyz 
  database.set(`abonesorumlusu.${message.guild.id}`, rol.id)
  message.channel.send(`Abone Sorumlusunu ${rol} Olarak Ayarladım!`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-sorumlusu'],//Bu Bot Zego Share Tarafından Kodlanmıştır zekiarda.xyz 
  perm: 0
}
exports.help = {
  name: 'abone-sorumlusu'
}

exports.play = {
  kullanım: 'abone-sorumlusu @rol',//Bu Bot Zego Share Tarafından Kodlanmıştır zekiarda.xyz 
  açıklama: 'Abone Sorumlusu Rolünü Ayarlarsınız',
  kategori: 'Abone'
}