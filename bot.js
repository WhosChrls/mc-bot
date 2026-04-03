const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: 'YOUR_SERVER_IP',
    port: 25565,
    username: 'Bot123'
  })

  bot.on('spawn', () => {
    console.log('✅ Bot joined')

    // Anti-AFK
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