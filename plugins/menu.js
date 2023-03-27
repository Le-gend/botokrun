/*import fetch from 'node-fetch'
import fs from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import { promises, readFileSync } from 'fs'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let frep = { contextInfo: { externalAdReply: {title: global.wm, body: global.author, sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')}}}
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}
//let imgr = flaaa.getRandom()
let res = JSON.parse(readFileSync('./json/emoji.json'))
let em = res.emoji

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => thumbs.getRandom())
    let { exp, limit, level, role, money, lastclaim, lastweekly, registered, regTime, age, banned, pasangan } = global.db.data.users[who]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(who)
        if (typeof global.db.data.users[who] == "undefined") {
      global.db.data.users[who] = {
        exp: 0,
        limit: 10,
        lastclaim: 0,
        registered: false,
        name: conn.getName(m.sender),
        age: -1,
        regTime: -1,
        afk: -1,
        afkReason: '',
        banned: false,
        level: 0,
        lastweekly: 0,
        role: 'Warrior V',
        autolevelup: false,
        money: 0,
        pasangan: "",
      }
     }
     let math = max - xp
     let mim_ = ["application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/zip","application/pdf", "text/rtf"]
          let lin_ = ["https://youtube.com/channel/UCFc8f2h3qeS7hYm21Op275A", "https://instagram.com/nandd_.10"]
     
  let cap = `*${htki} Information ${htka}*
*👶️ Nama:* *(${name})*
*💲 Money:* *RP* ${money}
*👣 Level* ${level}
*👥 Role:* ${role}
*👨‍👩‍👧‍👧 Pasangan:* ${pasangan ? `@${pasangan.split("@")[0]}` : `Mbloo Nihh`}
*🗣 XP:* TOTAL ${exp} (${exp - min} / ${xp}) [${math <= 0 ? `Siap untuk *${usedPrefix}levelup*` : `${math} XP lagi untuk levelup`}]
*📨 Terdaftar:* ${registered ? 'Ya (' + new Date(regTime).toLocaleString() + ')' : 'Tidak'} ${lastclaim > 0 ? '\n*⏱️Terakhir Klaim:* ' + new Date(lastclaim).toLocaleString() : ''}\n\n Ketik ${usedPrefix}inv untuk melihat Inventory RPG`

let weem = `📮 *Note:* Jika menemukan bug, error atau kesulitan dalam penggunaan silahkan laporkan/tanyakan kepada Owner`

await conn.sendButton(m.chat, cap, weem, Buffer.alloc(0), [[em.getRandom() + ' All Menu', usedPrefix + 'allmenu'], [em.getRandom() + ' Donasi', usedPrefix + 'donasi']], m, { mimetype: mim_.getRandom(), fileName: ucapan, pageCount: fpagedoc, fileLength: fsizedoc, seconds: fsizedoc, jpegThumbnail: fs.readFileSync('./thumbnail.jpg'), contextInfo: {
          externalAdReply :{
          showAdAttribution: true,
    mediaUrl: sgc,
    mediaType: 1,
    description: wm, 
    title: 'Subscribe My Channel And Follow My Insta',
    body: botdate,
    thumbnail: fs.readFileSync('./thumbnail.jpg'),
    sourceUrl: lin_.getRandom()
     }}
  })

  /*let buttonMessage= {
'document': {'url': gcwangsaf},
'mimetype': mim_.getRandom(),
'fileName': 'Silahkan Pilih Menu Dibawah.',
'fileLength': fsizedoc,
'pageCount': fpagedoc,
'contextInfo': {
'externalAdReply': {
'showAdAttribution': true,
'mediaUrl': ngelink_.getRandom(),
'mediaType': 2,
'previewType': 'pdf',
'title': '👋 Hai, ' + name ,
'body': 'Role ' + role + ' bang',
'thumbnail': await( await fetch(pp)).buffer(),
'sourceUrl': skopi}},
'caption': cap,
'footer': weem,
'buttons': [
{'buttonId': '.allmenu','buttonText': {'displayText': `${emoj} All Menu`},'type': 1},
{'buttonId': '.donasi','buttonText': {'displayText': `${emoj} Donasi`},'type': 1}
],
'headerType': 6}
    await conn.sendMessage(m.chat, buttonMessage, adReply)*/
    
/*}

handler.help = ['menu', 'help']
handler.tags = ['main']
handler.command = /^(menu|help)$/i

export default handler

function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }*/
  
  
  /* import fetch from 'node-fetch'
import { promises, readFileSync } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let imgr = flaaa.getRandom()
let res = JSON.parse(readFileSync('./json/emoji.json'))
let em = res.emoji
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => thumbs.getRandom())
    let { exp, limit, level, role, money, lastclaim, lastweekly, registered, regTime, age, banned, pasangan } = global.db.data.users[who]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(who)
        if (typeof global.db.data.users[who] == "undefined") {
      global.db.data.users[who] = {
        exp: 0,
        limit: 10,
        lastclaim: 0,
        registered: false,
        name: conn.getName(m.sender),
        age: -1,
        regTime: -1,
        afk: -1,
        afkReason: '',
        banned: false,
        level: 0,
        lastweekly: 0,
        role: 'Warrior V',
        autolevelup: false,
        money: 0,
        pasangan: "",
      }
     }
     let math = max - xp
     let mim_ = ["application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document","text/rtf"]
     let lin_ = ["https://youtube.com/channel/UCFc8f2h3qeS7hYm21Op275A", "https://instagram.com/nandd_.10"]
  let cap = `*${htki} Information ${htka}*

*🏷️ Nama:* *${name}*
*💲 Money:* *RP* ${money}
*🏆 Level* ${level}
*🎋 Role:* ${role}
*👨‍👩‍👧‍👧 Pasangan:* ${pasangan ? `@${pasangan.split("@")[0]}` : `Mbloo Nihh`}
*🧬 XP:* TOTAL ${exp} (${exp - min} / ${xp}) [${math <= 0 ? `Siap untuk *${usedPrefix}levelup*` : `${math} XP lagi untuk levelup`}]
*📨 Terdaftar:* ${registered ? 'Ya (' + new Date(regTime).toLocaleString() + ')' : 'Tidak'} ${lastclaim > 0 ? '\n*⏱️Terakhir Klaim:* ' + new Date(lastclaim).toLocaleString() : ''}\n\n Ketik *${usedPrefix}inv* untuk melihat Inventory RPG
${cmenua}`

let weem = `📮 *Note:* Jika menemukan bug, error atau kesulitan dalam penggunaan silahkan laporkan/tanyakan kepada Owner`
    await conn.sendButton(m.chat, cap, weem, Buffer.alloc(0), [[em.getRandom() + ' All Menu', usedPrefix + 'allmenu'], [em.getRandom() + ' List Menu', usedPrefix + 'menulist']], m, { mimetype: mim_.getRandom(), fileName: ucapan, pageCount: fpagedoc, fileLength: fsizedoc, seconds: fsizedoc, jpegThumbnail: await( await fetch(thumbs.getRandom())).buffer(), contextInfo: {
          externalAdReply :{
          showAdAttribution: true,
    mediaUrl: sgc,
    mediaType: 2,
    description: wm, 
    title: 'Help Subscribe My Channel And Follow My Insta',
    body: botdate,
    thumbnail: await( await fetch(pp)).buffer(),
    sourceUrl: lin_.getRandom()
     }}
  })
}

handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i

handler.register = true

export default handler

function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }*/