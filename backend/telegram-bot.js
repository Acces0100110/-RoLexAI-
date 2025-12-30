// Telegram Bot pentru RoLexAI
const { Telegraf } = require('telegraf');
const axios = require('axios');
require('dotenv').config();

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);
const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:5001';

// Stocăm conversațiile utilizatorilor
const userConversations = new Map();

// Comenzi
bot.start((ctx) => {
  ctx.reply(
    '🇷🇴 *Bine ai venit la RoLexAI!* ⚖️\n\n' +
    'Sunt asistentul tău juridic AI pentru legislația română.\n\n' +
    '💡 *Cum mă poți folosi:*\n' +
    '• Întreabă orice despre legi românești\n' +
    '• Explică termeni juridici\n' +
    '• Înțelege OUG-uri și ordonanțe\n' +
    '• Informații despre Codul Penal\n\n' +
    '*Comenzi disponibile:*\n' +
    '/help - Ajutor\n' +
    '/clear - Șterge conversația\n' +
    '/examples - Exemple de întrebări\n\n' +
    '✨ Powered by Groq Llama 3.3 70B',
    { parse_mode: 'Markdown' }
  );
});

bot.help((ctx) => {
  ctx.reply(
    '🆘 *Ghid de utilizare RoLexAI*\n\n' +
    '1️⃣ Trimite-mi orice întrebare despre legislația română\n' +
    '2️⃣ Voi analiza și îți voi răspunde instant\n' +
    '3️⃣ Conversația ta este păstrată pentru context\n\n' +
    '*Exemple:*\n' +
    '• "Ce este o OUG?"\n' +
    '• "Explică Codul Civil"\n' +
    '• "Cum funcționează recursul?"\n' +
    '• "Când se aplică prescripția?"\n\n' +
    '/clear - Pentru o conversație nouă',
    { parse_mode: 'Markdown' }
  );
});

bot.command('examples', (ctx) => {
  ctx.reply(
    '💡 *Exemple de întrebări:*\n\n' +
    '📋 *Legislație generală:*\n' +
    '• Ce este o Ordonanță de Urgență?\n' +
    '• Care e diferența între lege și ordonanță?\n' +
    '• Cum se adoptă o lege în România?\n\n' +
    '⚖️ *Drept penal:*\n' +
    '• Ce pedepse există în Codul Penal?\n' +
    '• Ce înseamnă circumstanțe atenuante?\n' +
    '• Când se prescrie o infracțiune?\n\n' +
    '🏛️ *Drept civil:*\n' +
    '• Ce este capacitatea civilă?\n' +
    '• Cum funcționează moștenirea?\n' +
    '• Ce drepturi am ca consumator?\n\n' +
    'Trimite-mi întrebarea ta! 🚀',
    { parse_mode: 'Markdown' }
  );
});

bot.command('clear', (ctx) => {
  const userId = ctx.from.id;
  userConversations.delete(userId);
  ctx.reply('✅ Conversație ștearsă! Hai să începem cu o întrebare nouă.');
});

// Procesare mesaje
bot.on('text', async (ctx) => {
  const userId = ctx.from.id;
  const userMessage = ctx.message.text;
  
  // Ignoră comenzile
  if (userMessage.startsWith('/')) return;
  
  // Trimite indicator de typing
  await ctx.sendChatAction('typing');
  
  try {
    // Obține sau inițializează conversația
    if (!userConversations.has(userId)) {
      userConversations.set(userId, []);
    }
    
    const conversation = userConversations.get(userId);
    conversation.push({ role: 'user', content: userMessage });
    
    // Limitează la ultimele 10 mesaje pentru context
    if (conversation.length > 20) {
      conversation.splice(0, conversation.length - 20);
    }
    
    // Apelează backend-ul
    const response = await axios.post(`${BACKEND_URL}/api/chat`, {
      messages: conversation
    });
    
    const reply = response.data.reply;
    
    // Salvează răspunsul în conversație
    conversation.push({ role: 'assistant', content: reply });
    
    // Trimite răspuns (split dacă e prea lung)
    if (reply.length > 4096) {
      const parts = reply.match(/[\s\S]{1,4096}/g) || [];
      for (const part of parts) {
        await ctx.reply(part);
      }
    } else {
      await ctx.reply(reply);
    }
    
  } catch (error) {
    console.error('Telegram bot error:', error);
    ctx.reply(
      '❌ Scuze, am întâmpinat o eroare.\n\n' +
      'Te rog verifică că backend-ul RoLexAI rulează și încearcă din nou.\n\n' +
      'Dacă problema persistă, folosește /clear pentru a reseta conversația.'
    );
  }
});

// Error handling
bot.catch((err, ctx) => {
  console.error(`Error for ${ctx.updateType}:`, err);
  ctx.reply('❌ A apărut o eroare. Te rog încearcă din nou.');
});

// Pornire bot
bot.launch().then(() => {
  console.log('\n========================================');
  console.log('🤖 RoLexAI Telegram Bot pornit!');
  console.log('========================================');
  console.log('✅ Botul așteaptă mesaje...');
  console.log('📱 Caută botul pe Telegram și începe să îl folosești!');
  console.log('========================================\n');
});

// Graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

module.exports = bot;
