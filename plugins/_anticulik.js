import fs from 'fs'
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat')) && !m.isBaileys && !m.isGroup) {
    let teks = `「 Lɪsᴛ sᴇᴡᴀ Gʀᴜʙ & Uᴘ Pʀᴇᴍ 」

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
    
    ╭━━━━「 BOT FREE 」
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
    
    ▌│█║▌║▌║║▌║▌║█│▌
    
    _©️ 𝐒𝐞𝐜𝐮𝐫𝐢𝐭𝐲𝐁𝐎𝐓－ＭＤ_`
    this.reply(m.chat, teks, m)
    //const data = global.owner.filter(([id, isCreator]) => id && isCreator)
    //this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
    }
}

export default handler
