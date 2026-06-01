const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'bananasmp.net',
    port: 25565,
    username: 'Kythox_',
    auth: 'offline',
    version: false,        // auto detect version
    hideErrors: false
  });

  bot.on('login', () => console.log('Bot logged in!'));

  bot.on('spawn', () => {
    console.log('Spawned!');
    setTimeout(() => {
      bot.chat('/server randomkits');
    }, 3000);
  });

  setInterval(() => {
    bot.setControlState('sneak', true);
    setTimeout(() => bot.setControlState('sneak', false), 1000);
  }, 30000);

  bot.on('kicked', (reason) => {
    console.log('Kicked:', reason);
    setTimeout(createBot, 5000);
  });
  bot.on('error', (err) => {
    console.log('Error:', err.message);
    setTimeout(createBot, 5000);
  });
  bot.on('end', () => setTimeout(createBot, 5000));
}

createBot();
