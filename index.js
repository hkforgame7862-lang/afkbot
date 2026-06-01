const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'bananasmp.net',
    port: 25565,
    username: 'Kythox_',
    auth: 'offline',
    version: '1.8.9'
  });

  bot.on('spawn', () => {
    setTimeout(() => {
      bot.chat('/server randomkits');
      console.log('Joined RandomKits!');
    }, 3000);
  });

  setInterval(() => {
    bot.setControlState('sneak', true);
    setTimeout(() => bot.setControlState('sneak', false), 1000);
  }, 30000);

  bot.on('kicked', () => setTimeout(createBot, 5000));
  bot.on('error', () => setTimeout(createBot, 5000));
  bot.on('end', () => setTimeout(createBot, 5000));
}

createBot();
