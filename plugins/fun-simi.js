import fetch from 'node-fetch'
let handler = async (m, {text, args}) => {
  if (!args[0]) throw `Use example .beb halo`
  let api = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=id`)
  let res = await api.json()
  m.reply(res.success)
}
handler.command = ['beb']
handler.tags = ['fun']
handler.help = ['beb']

export default handler