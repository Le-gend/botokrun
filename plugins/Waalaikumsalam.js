
let handler = async (m) => {
let assalamualaikum = '`وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ\n_wa\'alaikumussalam wr.wb._'
conn.reply(m.chat, assalamualaikum, m)
await conn.sendMessage(m.chat, {
          react: {
            text: '🙏',
            key: m.key,
          }})
}

handler.customPrefix = /^(assalamualaikum|assallamualaikum|assalamu\'alaikum|as\'salamualaikum|Assalamu'alaikum)$/i
handler.command = new RegExp

export default handler