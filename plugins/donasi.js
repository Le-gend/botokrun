let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
┌─「 *Payment ↓* 」
│• Pulsa Axis: [${global.ppulsa}]
│• Voucer Axis: [${global.ppulsa}]
│• Arigatouu 👍😇
❏────

┌─「 Donasi • Traktir Kopi 」
│ Gampang kok jan skip iklan nya cma beberapa detik
│• Link : https://ponselharian.com/TBqv41
│• Arigatouu 👍😇
❏────

┌─「 Donasi • Subrek YT 」
│ Subrek, Like dan Share 
│• Link : ${global.snh}
│• Arigatouu 👍😇
❏────
`.trim()
  m.reply(text)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler

