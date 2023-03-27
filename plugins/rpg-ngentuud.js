const timeout = 1500000

//const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, MessageType, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
//let fs = require('fs')
let handler = async (m, { conn }) => {
    let __timers = (new Date - global.db.data.users[m.sender].lastngocok)
    let _timers = (1500000 - __timers)
    let timers = clockString(_timers) 
   let order = global.db.data.users[m.sender].korbanngocok
   let name = conn.getName(m.sender)
    let user = global.db.data.users[m.sender]  

    if (new Date - global.db.data.users[m.sender].lastngocok > 1500000) {
let randomaku1 = `${Math.floor(Math.random() * 10)}`
let randomaku2 = `${Math.floor(Math.random() * 10)}`
let randomaku4 = `${Math.floor(Math.random() * 5)}`
let randomaku3 = `${Math.floor(Math.random() * 10)}`
let randomaku5 = `${Math.floor(Math.random() * 10)}`

.trim()

let rbrb1 = (randomaku1 * 2)
let rbrb2 = (randomaku2 * 1) 
let rbrb3 = (randomaku3 * 1)
let rbrb4 = (randomaku4 * 1000)
let rbrb5 = (randomaku5 * 145)


var zero1 = `${rbrb1}`
var zero2 = `${rbrb2}`
var zero3 = `${rbrb3}`
var zero4 = `${rbrb4}`
var zero5 = `${rbrb5}`

var putrii = `✔️ Mendapatkan pelanggan via chat....
`

var putrii2 = `Mulai menggoyang 🛏 🛏...
Aaahhhh Sssthhhh Ayaankk Yang kenceng
`

var putrii3 = `ayankk mo keluar yankk, , > / / / <
*Crott.. *crott.. 💦🥵
Hufttt 
`

var putrii5 = `Ahhhh,,  > / / / < 🥵💦`

var putrii4 = `✔️ Menerima Upahh....
`
var hslya = `
*—[ Hasil OpenBo ${name} ]—*
 👤 *Pelanggan:* ${pickRandom(['Kuntilanak', 'Pocong'])}
 ➕ 💹 Uang = [ ${zero4} ]
 ➕ ✨ Exp = [ ${zero5} ] 		 
 ➕ 😍 Order Selesai = +1
 ➕ 💨 user.stamina -= 20
➕  📥Total Order Sebelumnya : ${order}
${wm}
`


global.db.data.users[m.sender].warn += 10
global.db.data.users[m.sender].money += 100000
global.db.data.users[m.sender].exp += rbrb5
global.db.data.users[m.sender].ojekk += 1

setTimeout(() => {
                     m.reply(`${hslya}`)
                     }, 35000) 
               
                     setTimeout(() => {
                     m.reply(`${putrii4}`)
                      }, 25000)
                
                     setTimeout(() => {
                     m.reply(`${putrii3}`)
                     }, 20000) 
                        
                     setTimeout(() => {
                     m.reply(`${putrii2}`)
                     }, 15000) 
                    
                     setTimeout(() => {
                     m.reply(`${putrii}`)
                     }, 10000) 
                     
                     setTimeout(() => {
                     m.reply('🔎 mencari pelanggan via ngechat')
                     }, 0) 
  user.lastngocok = new Date * 1
    } else conn.sendButton(m.chat, `Sepertinya Anda Sudah Kecapekan karna 5x keluar 🤭🤫 Silahkan Istirahat Dulu sekitar\n🕔 *${timers}*`, wm, null, [['inventory', '.inv']], m )
    setTimeout(() => {
					conn.reply(m.chat, `Yuk waktunya openbo lagi sayangg 😅`, m)
					}, timeout)
}
handler.help = ['mengoyo']
handler.tags = ['rpg']
handler.command = /^(ngeoyo|oyo)$/i
handler.register = true

export default handler
handler.premium = false
handler.limit = 30

function pickRandom(list) {
   return list[Math.floor(Math.random() * list.length)]
}

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}




/*let handler = async (m, { conn }) => {
    let __timers = (new Date - global.db.data.users[m.sender].lastngojek)
    let _timers = (300000 - __timers)
    let order = global.db.data.users[m.sender].ojekk
    let timers = clockString(_timers) 
let name = conn.getName(m.sender)
    let user = global.db.data.users[m.sender]
    
     if (new Date - global.db.data.users[m.sender].lastngojek > 300000) {
let randomaku1 = `${Math.floor(Math.random() * 10)}`
let randomaku2 = `${Math.floor(Math.random() * 10)}`
let randomaku4 = `${Math.floor(Math.random() * 5)}`
let randomaku3 = `${Math.floor(Math.random() * 10)}`
let randomaku5 = `${Math.floor(Math.random() * 10)}`

.trim()

let rbrb1 = (randomaku1 * 2)
let rbrb2 = (randomaku2 * 10) 
let rbrb3 = (randomaku3 * 1)
let rbrb4 = (randomaku4 * 15729)
let rbrb5 = (randomaku5 * 120)

var zero1 = `${rbrb1}`
var zero2 = `${rbrb2}`
var zero3 = `${rbrb3}`
var zero4 = `${rbrb4}`
var zero5 = `${rbrb5}`

var dimas = `
🚶⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️       🛵
✔️ Mendapatkan orderan....
`

var dimas2 = `
🚶🛵⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️       
➕ Mengantar ke tujuan....
`

var dimas3 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛🛵⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️       
➕ Sampai di tujuan....
`

var dimas4 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛🛵⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️ 🚶  
➕ 💹Menerima gaji....
`

var hsl = `
*—[ Hasil Ngojek ${name} ]—*
 ➕ 💹 Uang = [ ${zero4} ]
 ➕ ✨ Exp = [ ${zero5} ] 		 
 ➕ 😍 Order Selesai = +1
➕  📥Total Order Sebelumnya : ${order}
${wm}
`


global.db.data.users[m.sender].money += rbrb4
global.db.data.users[m.sender].exp += rbrb5
global.db.data.users[m.sender].ojekk += 1


setTimeout(() => {
                     m.reply(`${hsl}`)
                     }, 27000) 
               
                     setTimeout(() => {
                     m.reply(`${dimas4}`)
                      }, 25000)
                
                     setTimeout(() => {
                     m.reply(`${dimas3}`)
                     }, 20000) 
                        
                     setTimeout(() => {
                     m.reply(`${dimas2}`)
                     }, 15000) 
                    
                     setTimeout(() => {
                     m.reply(`${dimas}`)
                     }, 10000) 
                     
                     setTimeout(() => {
                     m.reply('🔍Mencari pelanggan.....')
                     }, 0) 
  user.lastngojek = new Date * 1
    } else conn.sendButton(m.chat, `Sepertinya Anda Sudah Kecapekan Silahkan Istirahat Dulu sekitar\n🕔 *${timers}*`, wm, null, [['inventory', '.inv']], m )
}
handler.help = ['ojek']
handler.tags = ['rpg']
handler.command = /^(ojek|ngojek|gojek|jadiojek)$/i
handler.register = true

export default handler


function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
*/