const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'play.bananasmp.net',
    port: 25565,
    username: 'Kythox_',
    auth: 'offline',
    version: false,
    hideErrors: false
  });

  bot.on('login', () => console.log('Bot logged in!'));

  bot.on('spawn', () => {
    console.log('Spawned!');
    setTimeout(() => {
      bot.chat('/login hassan123pass0');
      console.log('Sent login!');
    }, 2000);
    setTimeout(() => {
      bot.chat('/server randomkits');
      console.log('Joined RandomKits!');
    }, 5000);
  });

  setInterval(() => {
    bot.setControlState('sneak', true);
    setTimeout(() => bot.setControlState('sneak', false), 1000);
  }, 30000);

  bot.on('kicked', (reason) => {
    console.log('Kicked:', reason);
    setTimeout(createBot, 300000); // 5 minutes
  });
  bot.on('error', (err) => {
    console.log('Error:', err.message);
    setTimeout(createBot, 300000); // 5 minutes
  });
  bot.on('end', () => setTimeout(createBot, 300000)); // 5 minutes
}

createBot();
