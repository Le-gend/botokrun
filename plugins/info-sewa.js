let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '10'
let sn = '30'
let ss = '60'
let sp = '75'
let sv = '80'
//premium
let ph = '15'
let pn = '40'
let pp = '70'
let pv = '100'
let ppm = '150'
let info = `
「 Lɪsᴛ sᴇᴡᴀ Gʀᴜʙ & Uᴘ Pʀᴇᴍ 」

    ╭━━━━「 SEWA 」
    ┊⫹⫺ Hemat: 10k/grup (1 minggu)
    ┊⫹⫺ Normal: 30k/grup (1 bulan)
    ┊⫹⫺ Fast: 60k/grup (1 bulan)
    ┊⫹⫺ Pro: 75k/grup (1 bulan)                                                      
    ┊⫹⫺ Vip: = 80k/grup (1 bulan)
    ╰═┅═━––––––๑
    
    ╭━━━━「 UP PREMIUM 」
    ┊⫹⫺ Hemat: 15k (1 minggu)
    ┊⫹⫺ Normal: 40k (1 bulan)
    ┊⫹⫺ Pro: 70k (1 bulan)
    ┊⫹⫺ Vip: 100k (1 bulan)                                               
    ┊⫹⫺ Permanent: = 150k (Unlimited)
    ╰═┅═━––––––๑
    
    ╭━━━━「 FREE 」
    ┊⫹⫺ Chat Owner
    ┊⫹⫺ S & K Berlaku
    ┊⫹⫺ Anda Senang
    ┊⫹⫺ Owner Suka                                                   
    ╰═┅═━––––––๑
    
    ⫹⫺ PAYMENT:
    • Pulsa Axis : [083180588257]
    • Voucer Data : [083180588257]
    
    Note : Silakan Chat Ke Owner Sebelum Tf/Transaksi
    
    Nomor Owner :
    wa.me/6283180588257
    
–––––– *🐾 Kebijakan* ––––––
🗣️: Kak, Kok harganya mahal banget?
💬: Mau tawar menawar? boleh, silahkan chat owner aja

🗣️: Scam ga nih kak?
💬: Enggalah, Owner 100% Tepati janji #STAYHALAL

▌│█║▌║▌║║▌║▌║█│▌
    
    _©️ 𝐒𝐞𝐜𝐮𝐫𝐢𝐭𝐲𝐁𝐎𝐓－ＭＤ_
`
const sections = [
   {
	title: `${htjava} SEWA ✦-------`,
	rows: [
	    {title: "🔖 HEMAT", rowId: '.order *Paket:* HEMAT • Sewa', description: 'PRICE: ' + sh + 'k (1 minggu)' },
	    {title: "🔖 NORMAL", rowId: '.order *Paket:* NORMAL • Sewa', description: 'PRICE: ' + sn + 'k (1 bulan)' },
	{title: "🔖 STANDAR", rowId: '.order *Paket:* STANDAR • Sewa', description: 'PRICE: ' + ss + 'k (2 bulan)' },
	{title: "🔖 PRO", rowId: '.order *Paket:* PRO • Sewa', description: 'PRICE: ' + sp + 'k (4 bulan)' },
	{title: "🔖 VIP", rowId: '.order *Paket:* VIP • Sewa', description: 'PRICE: ' + sv + 'k (12 bulan)' },
	]
    }, {
    title: `${htjava} PREMIUM ✦-------`,
	rows: [
	    {title: "🌟 HEMAT", rowId: '.order *Paket:* HEMAT • Premium', description: 'PRICE: ' + ph + 'k (1 minggu)' },
	    {title: "🌟 NORMAL", rowId: '.order *Paket:* NORMAL • Premium', description: 'PRICE: ' + pn + 'k (1 bulan)' },
	{title: "🌟 PRO", rowId: '.order *Paket:* PRO • Premium', description: 'PRICE: ' + pp + 'k (4 bulan)' },
	{title: "🌟 VIP", rowId: '.order *Paket:* VIP • Premium', description: 'PRICE: ' + pv + 'k (8 bulan)' },
	{title: "🌟 PERMANENT", rowId: '.order *Paket:* PERMANENT • Premium', description: 'PRICE: ' + ppm + 'k (UNLIMITED)' },
	]
    },
]

const listMessage = {
  text: info,
  footer: `${botdate}\nRuntime : ⚠️ ${uptime}`,
  title: null,
  buttonText: "Click Here!",
  sections
}
return conn.sendMessage(m.chat, listMessage, {quoted: fakes})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler
