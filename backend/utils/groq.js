// utils/groq.js
// Modul pentru integrarea cu OpenRouter - modele gratuite
const axios = require('axios');

// OpenRouter oferă acces gratuit la mai multe modele
const API_URL = 'https://openrouter.ai/api/v1/chat/completions';
const API_KEY = process.env.OPENROUTER_API_KEY || 'sk-or-v1-free'; // API key gratuit

async function chatWithGroq(messages) {
  try {
    console.log('🤖 Sending to OpenRouter...');
    
    // System prompt pentru legislație română
    const systemPrompt = {
      role: 'system',
      content: 'Ești RoLexAI, un asistent juridic specializat în legislația din România. Răspunde clar și profesional despre legi românești, OUG-uri, coduri și acte normative. Citează articole când este posibil.'
    };

    // Construiește mesajele
    const chatMessages = [systemPrompt, ...messages];

    const response = await axios.post(
      API_URL,
      {
        model: 'google/gemini-flash-1.5', // Model gratuit și rapid de la Google
        messages: chatMessages,
        temperature: 0.5,
        max_tokens: 800,
      },
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'HTTP-Referer': 'https://ro-lex-ai.vercel.app',
          'X-Title': 'RoLexAI',
          'Content-Type': 'application/json',
        },
        timeout: 30000,
      }
    );

    console.log('✅ Response from OpenRouter');
    
    const reply = response.data?.choices?.[0]?.message?.content;
    
    if (reply) {
      return reply.trim();
    } else {
      throw new Error('No response content');
    }

  } catch (error) {
    console.error('❌ OpenRouter error:', error.response?.data || error.message);
    
    // Fallback simplu
    const userMsg = messages[messages.length - 1]?.content || '';
    
    if (userMsg.toLowerCase().includes('oug')) {
      return 'O OUG (Ordonanță de Urgență a Guvernului) este un act normativ adoptat de Guvernul României în situații extraordinare, conform Art. 115 din Constituția României. OUG-urile intră în vigoare imediat dar trebuie aprobate ulterior de Parlament.';
    }
    
    if (userMsg.toLowerCase().includes('cod penal')) {
      return 'Codul Penal al României (Legea nr. 286/2009) reglementează infracțiunile și pedepsele în România. Poți consulta textul integral pe legislatie.just.ro.';
    }
    
    return 'Bună! Sunt RoLexAI. Te pot ajuta cu întrebări despre legislația românească - OUG-uri, Codul Penal, Codul Civil, Codul Muncii și alte acte normative din România. Întreabă-mă orice!';
  }
}

module.exports = { chatWithGroq };
