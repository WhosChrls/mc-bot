const mineflayer = require('mineflayer')

// 👇 Fake web server for Render
require('http').createServer((req, res) => {
  res.end('Bot is running')
}).listen(3000)

function createBot() {
  const bot = mineflayer.createBot({
    host: 'Henrix04.aternos.me:43508',
    port: 43508,
    username: 'Bot123',
    auth: 'offline',
    version: false
  })

  bot.on('spawn', () => {
    console.log('✅ Bot joined')

    setInterval(() => {
      bot.setControlState('jump', true)
      setTimeout(() => bot.setControlState('jump', false), 500)
    }, 10000)
  })

  bot.on('end', () => {
    console.log('🔁 Reconnecting...')
    setTimeout(createBot, 5000)
  })

  bot.on('error', err => console.log(err))
}

createBot()
