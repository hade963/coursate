const Telegraf = require("telegraf");
const axios = require("axios");

// API token from BotFather
require('dotenv').config();
const bot = new Telegraf(process.env.BOT_TOKEN);

// Welcome message
bot.start((ctx) =>
  ctx.reply("اهلا بكم الرجاء اختيار كورس", {
    keyboard: [["برمجة 2", "اسس كهربائية"]],
    oneTimeKeyboard: true,
  })
);


bot.command("برمجة 2", (ctx) => {
  ctx.replyWithMarkdown(
    `2تفاصيل كورس البرمجة :
    
الاستاذ: هادي الليلا
: 6-8 جلسات
المكان: خلف السكن الجامعي
السعر: 30 الف 
هل تريد الانضمام لغروب الكورس للتفاعل مع الطلاب الاخرين `,
    {
      parse_mode: "Markdown",
      reply_markup: {
        inline_keyboard: [
          [{ text: "نعم اريد الانضمام", callback_data: "add_to_python_group" }],
        ],
      },
    }
  );
});

// Add user to Python group
bot.action("add_to_python_group", (ctx) => {
  ctx.reply(
    "You have been added to the Python Programming course group! Welcome and all the best!"
  );
  // Make API call to add user to Python Telegram group
});

// Handle /data_science_course and add to group
// ...

// Help command
bot.command("help", (ctx) => {
  ctx.reply(
    "I am a bot that provides details about courses and can add you to the relevant Telegram groups.\n\nCommands available:\n/start - Start the bot\n/python_course - Get details about the Python Programming course\n/data_science_course - Get details about the Data Science 101 course\n/help - Display this help message"
  );
});

bot.launch(); // Launch the bot
