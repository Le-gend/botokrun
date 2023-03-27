
import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => thumbs.getRandom())
let name = await conn.getName(who)
let tqto = `*${htki} Intip SC Omm  ${htka}*

❏ Ciee Intipp esce nihh, Cari YT aja Banyaak kokkk, ini esce campur aduk, kek hati yg baca :v;p

Ini pitur untuk donlod aplikasi mod android

note: tonton video cara download nya jika tidak mengerti
link nya ada paling bawah
Untuk password ny chat ke saya S&K berlaku

1. CapCut Tanpa Watermark
♧ Dengan Password : 
https://www.mediafire.com/file/wp58rq0hlfpnwte/CapCut_MOD_v.5.5.0.zip/file

♧ Tanpa Password : 
https://cararegistrasi.com/XHDdSC

2. Am Premium
♧ Dengan Password :
https://www.mediafire.com/download/5tm97urtwsir0cp

♧ Tanpa Password :
https://cararegistrasi.com/7d5o

3. Vn Editor Premium
♧ Dengan Password : 
https://www.mediafire.com/download/rwxf15czbmkei1f

♧ Tanpa Password : 
https://cararegistrasi.com/VBNqVQzl

4. Ibis Paint Premium
♧ Dengan Password : 
https://www.mediafire.com/download/96sj576ozj5qss2

♧ Tanpa Password : 
https://cararegistrasi.com/w7zz7SoCxCry


*Tutor Download*

Tutorial Dengan Password : 

https://youtu.be/gE-asHaytOw

Tutorial Tanpa Password :

https://youtu.be/Y0xgBMes_f0
`
conn.sendButton(m.chat, tqto, wm, await(await fetch(logo)).buffer(), [['🎀 Menu', '/menu']], m, { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: {
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 1,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgh
     }}
  })
}
handler.command = /^(sc|esce|script)$/i
export default handler
