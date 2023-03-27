let handler = async(m, { conn, args, usedPrefix }) => {

let __waktutionskh = (new Date - global.db.data.users[m.sender].lastlink)
let _waktutionskh = (86800000 - __waktutionskh)
let waktutionskh = clockString(_waktutionskh)
if (new Date - global.db.data.users[m.sender].lastlink > 86800000) {
global.db.data.users[m.sender].lastlink = new Date * 1
let codeh = ['736390','882910','882010','715611','002819','562622','432282','322929','662522','443321','937100','762837','028393','625529','727638','992719','092739','727269','629461','239210']
let getRandom = codeh[Math.floor(Math.random() * codeh.length)]
conn.reply(m.chat, `
https://cararegistrasi.com/iwtv0LEd
Link ini *AMAN 100%* tidak ada phising, +18, virus, dll
Link ini hanya untuk membantu owner.,
Mendapatkan penghasilan 🤗

Cara dapatkan:
1. Klik link di atas
2. Tunggu 10 Detik 
3. Klik tombol *Im not a robot*
4. Lanjut klik *Click continue here*
5. Setelah muncul link yg baru, baru tekan tombol kembali pada hp nya 
6. Pilih *Get Link*🎉
7. Setelah link baru muncul tekan lagi tombol kembali pada hp nya
8. Kembali ke proses 1 -7
9. Kalau sudah muncul ke channel YT Owner Kaliaj boleh langsung tutup, boleh juga nonton boleh juga subrek alangkah baik nya subrek buat donasi biar owner semakin semangat 😊😊
9. Selesai

Lalu tunggu beberapa menit
Proses hadiah limit, money, exp, tabungan.
Akan kalian dapatkan..`, m)
setTimeout(() => {
      conn.reply(m.chat, `Selamat kamu mendapatkan hadiah 🎉\nMasukan *${usedPrefix}codeshortlink ${getRandom}*\n\n\n*-Owner*\nTerima kasih udah di kasih jajan.. 😅`, m)
}, 600000)
} else m.reply(`Kamu sudah mengambil gethadiah\nHarap tunggu ${waktutionskh} lagi`)
}
handler.help = ['gethadiah']
handler.tags = ['main']
handler.command = /^(gethadiah)$/i
handler.limit = false
handler.private = false

export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

