const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: 'Henrix04.aternos.me',
    port: 43508,
    username: 'mcbot',
    auth: 'offline', // 👈 IMPORTANT
    version: false
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
