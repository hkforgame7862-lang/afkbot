const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'bananasmp.net',
    port: 25565,
    username: 'Kythox_',
    auth: 'offline',
    version: false,
    hideErrors: false
  });

  bot.on('login', () => console.log('Bot logged in!'));

  bot.on('spawn', () => {
    console.log('Spawned!');

    // Auto login
    setTimeout(() => {
      bot.chat('/login hassan123pass0');
      console.log('Logged in!');
    }, 2000);

    // Join randomkits
    setTimeout(() => {
      bot.chat('/server randomkits');
      console.log('Joined RandomKits!');
    }, 5000);
  });

  // Anti-AFK
  setInterval(() => {
    bot.setControlState('sneak', true);
    setTimeout(() => bot.setControlState('sneak', false), 1000);
  }, 30000);

  bot.on('kicked', (reason) => {
    console.log('Kicked:', reason);
    setTimeout(createBot, 30000);
  });
  bot.on('error', (err) => {
    console.log('Error:', err.message);
    setTimeout(createBot, 30000);
  });
  bot.on('end', () => setTimeout(createBot, 30000));
}

createBot();
