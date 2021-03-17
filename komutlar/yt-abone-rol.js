let database = require("quick.db")//Bu Bot Zego Share Tarafından Kodlanmıştır zekiarda.xyz 
let ayarlar = require("../ayarlar.json")



exports.run = async(client, message) => {//Bu Bot Zego Share Tarafından Kodlanmıştır zekiarda.xyz 
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.reply('Bu komutu kullanmak için yetkin yetersiz')
  
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send(`Rol etiketlemen gerekmekte örnek: ${ayarlar.prefix}abonerol @rol`)
  
  
  database.set(`abonerol.${message.guild.id}`, rol.id)
  message.channel.send(`Abone rolü başarıyla ${rol} olarak ayarlandı.`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-rol'],//Bu Bot Zego Share Tarafından Kodlanmıştır zekiarda.xyz 
  perm: 0
}
exports.help = {
  name: 'abone-rol'
}

exports.play = {
  kullanım: 'abone-rol @rol',
  açıklama: 'Abone Rolünü Ayarlarsınız',
  kategori: 'Abone'
}