const isLinkTik = /tiktok.com/i // tambahin sendiri
const isLinkYt = /youtube.com|youtu.be/i // tambahin sendiri
const isLinkTel = /t.me/i // tambahin sendiri
const isLinkFb = /facebook.com|fb.me/i // tambahin sendiri
const isLinkIg = /instagram.com/i // tambahin sendiri
const isLinkHttp = /http|https/i // tambahin sendiri
const isLinkGrub = /chat.whatsapp.com/i
const isLinkWa = /wa.me/i

export async function before(m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin, isOwner }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isAntiLinkTik = isLinkTik.exec(m.text)
    const isAntiLinkYt = isLinkYt.exec(m.text)
    const isAntiLinkTel = isLinkTel.exec(m.text)
    const isAntiLinkFb = isLinkFb.exec(m.text)
    const isAntiLinkIg = isLinkIg.exec(m.text)
    const isAntiLinkHttp = isLinkHttp.exec(m.text)
    const isAntiLinkGrub = isLinkGrub.exec(m.text)
    const isAntiLinkWa = isLinkWa.exec(m.text)
    
    let hapus = m.key.participant
    let bang = m.key.id
    
    let key = {}
 try {
 	key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
	key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
	key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
 	key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
 } catch (e) {
 	console.error(e)
 }
    
    
    if (chat.antiLinkTik && isAntiLinkTik && !isAdmin && !isOwner) {
        await conn.sendButton(m.chat, `*Link Terdeteksi!* ${isBotAdmin ? '' : '\n\n_Bot bukan atmin_ Tidak bisa hapus Link'}`, author, ['Off AntilinkTT', '/disable antilinktik'], m)
        if (isBotAdmin) {
    global.db.data.users[m.sender].warn += 1
    global.db.data.users[m.sender].banned = true
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
        } else if (!bot.restrict) return m.reply('Semoga harimu suram!')
    }
    
    if (chat.antiLinkYt && isAntiLinkYt && !isAdmin && !isOwner) {
        await conn.sendButton(m.chat, `*Link Terdeteksi!* ${isBotAdmin ? '' : '\n\n_Bot bukan atmin_ Tidak bisa hapus Link'}`, author, ['Off AntilinkYT', '/disable antilinkyt'], m)
        if (isBotAdmin) {
    global.db.data.users[m.sender].warn += 1
    global.db.data.users[m.sender].banned = true
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
        } else if (!bot.restrict) return m.reply('Semoga harimu suram!')
    }
    
    if (chat.antiLinkTel && isAntiLinkTel && !isAdmin && !isOwner) {
        await conn.sendButton(m.chat, `*Link Terdeteksi!* ${isBotAdmin ? '' : '\n\n_Bot bukan atmin_ Tidak bisa hapus Link'}`, author, ['Off AntilinkTele', '/disable antilinktel'], m)
        if (isBotAdmin && bot.restrict) {
    global.db.data.users[m.sender].warn += 1
    global.db.data.users[m.sender].banned = true
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
        } else if (!bot.restrict) return m.reply('Semoga harimu suram!')
    }
    
    if (chat.antiLinkFb && isAntiLinkFb && !isAdmin && !isOwner) {
        await conn.sendButton(m.chat, `*Link Terdeteksi!* ${isBotAdmin ? '' : '\n\n_Bot bukan atmin_ Tidak bisa hapus Link'}`, author, ['Off AntilinkFB', '/disable antilinkfb'], m)
        if (isBotAdmin) {
    global.db.data.users[m.sender].warn += 1
    global.db.data.users[m.sender].banned = true
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
        } else if (!bot.restrict) return m.reply('Semoga harimu suram!')
    }
    
    if (chat.antiLinkIg && isAntiLinkIg && !isAdmin && !isOwner) {
        await conn.sendButton(m.chat, `*Link Terdeteksi!* ${isBotAdmin ? '' : '\n\n_Bot bukan atmin_ Tidak bisa hapus Link'}`, author, ['Off AntilinkIG', '/disable antilinkig'], m)
        if (isBotAdmin) {
    global.db.data.users[m.sender].warn += 1
    global.db.data.users[m.sender].banned = true
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
        } else if (!bot.restrict) return m.reply('Semoga harimu suram!')
    }
    
    if (chat.antiLinkWa && isAntiLinkWa && !isAdmin && !isOwner) {
        await conn.sendButton(m.chat, `*Link Terdeteksi!* ${isBotAdmin ? '' : '\n\n_Bot bukan atmin_ Tidak bisa hapus Link'}`, author, ['Off AntilinkWA', '/disable antilinkwa'], m)
        if (isBotAdmin) {
    global.db.data.users[m.sender].warn += 1
    global.db.data.users[m.sender].banned = true
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
        } else if (!bot.restrict) return m.reply('Semoga harimu suram!')
    }
    
    if (chat.antiLinkGrub && isAntiLinkGrub && !isAdmin && !isOwner) {
    const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
            if (m.text.includes(linkThisGroup)) return !0
        await conn.sendButton(m.chat, `*Link Terdeteksi!* ${isBotAdmin ? '' : '\n\n_Bot bukan atmin_ Tidak bisa hapus Link'}`, author, ['Off AntilinkGrub', '/disable antilinkgrub'], m)
        if (isBotAdmin && linkThisGroup) {
    global.db.data.users[m.sender].warn += 1
    global.db.data.users[m.sender].banned = true
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
        } else if (!linkThisGroup) return conn.sendMessage(m.chat, { null: { remoteJid: m.chat, fromMe: null, id: bang, participant: hapus }})
    }
    
    if (chat.antiLinkHttp && isAntiLinkHttp && !isAdmin && !isOwner) {
        await conn.sendButton(m.chat, `*Link Terdeteksi!* ${isBotAdmin ? '' : '\n\n_Bot bukan atmin_ Tidak bisa hapus Link'}`, author, ['Off AntiHTTP', '/disable antihatetepe'], m)
        if (isBotAdmin) {
    global.db.data.users[m.sender].warn += 1
    global.db.data.users[m.sender].banned = true
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
        } else if (!bot.restrict) return m.reply('Semoga harimu suram!')
    }
    return !0
}



/*let handler = function (m) {
 let key = {}
 try {
 	key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
	key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
	key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
 	key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
 } catch (e) {
 	console.error(e)
 }
 conn.sendMessage(m.chat, { delete: key })
}
handler.help = ['delete']
handler.tags = ['info']
handler.command = /^(del|delete|unsend?)$/i
handler.limit = false
handler.admin = true

export default handler*/