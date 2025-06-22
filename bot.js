const { Telegraf } = require('telegraf');
const express = require('express');
const app = express();

const BOT_TOKEN = '8121608942:AAE2pmnJnPNw2KNhiDYnie78EfMfNRWujj8';
const DOMAIN = 'https://temporary-number-bot.onrender.com';
const PORT = process.env.PORT || 3000;

const bot = new Telegraf(BOT_TOKEN);

// أمر البداية
bot.start((ctx) => {
  ctx.reply('✅ أهلاً بك! البوت يعمل الآن. أرسل /help للمزيد.');
});

// إعداد Webhook
bot.telegram.setWebhook(`${DOMAIN}/bot${BOT_TOKEN}`);
app.use(bot.webhookCallback(`/bot${BOT_TOKEN}`));

// صفحة فحص
app.get('/', (req, res) => {
  res.send('✅ البوت يعمل من Render!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
