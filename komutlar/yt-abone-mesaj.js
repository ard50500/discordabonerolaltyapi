let database = require("quick.db")//Bu Bot Zego Share Tarafından Kodlanmıştır zekiarda.xyz 
let ayarlar = require("../ayarlar.json")


//Bu Bot Zego Share Tarafından Kodlanmıştır zekiarda.xyz 
exports.run = async(client, message) => {
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.reply('Bu komutu kullanmak için yetkin yetersiz')
  
  let mesaj = message.mentions.channels.first()
  if(!mesaj) return message.channel.send(`Kanal etiketlemen gerekmekte örnek: ${ayarlar.prefix}abonemesaj #kanal`)
  
  //Bu Bot Zego Share Tarafından Kodlanmıştır zekiarda.xyz 
  database.set(`abonemesaj.${message.guild.id}`, mesaj.id)
  message.channel.send(`Abone kanalı başarıyla ${mesaj} olarak ayarlandı.`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-mesaj'],
  perm: 0//Bu Bot Zego Share Tarafından Kodlanmıştır zekiarda.xyz 
}
exports.help = {
  name: 'abone-mesaj'
}

exports.play = {
  kullanım: 'abone-mesaj #kanal',
  açıklama: 'Abone Logunu Ayarlarsınız',
  kategori: 'Abone'
}