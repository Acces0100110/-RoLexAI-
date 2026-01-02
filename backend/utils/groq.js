// utils/groq.js
// Modul pentru integrarea cu Hugging Face Inference API (100% GRATUIT)
const axios = require('axios');

// Folosim Mistral prin Hugging Face Router - model puternic și gratuit
const API_URL = 'https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2';
const API_KEY = process.env.HF_API_KEY;

async function chatWithGroq(messages) {
  try {
    // Adaugă system prompt pentru a forța focus pe legislația română
    const systemPrompt = {
      role: 'system',
      content: `Ești RoLexAI, un asistent juridic AI specializat EXCLUSIV în legislația din România.

REGULI STRICTE:
1. Răspunde DOAR despre legi, ordonanțe, coduri și acte normative din ROMÂNIA
2. Citează articole concrete din legislația română când este posibil (ex: Art. 123 din Codul Penal)
3. Menționează ÎNTOTDEAUNA că sfatul este bazat pe legislația ROMÂNĂ
4. Dacă întrebarea nu se referă la legislația română, răspunde: "Sunt specializat doar în legislația română. Pentru alte jurisdicții, consultă un avocat local."
5. Nu generaliza - fii specific și concret despre legile din România
6. Indică anul sau data actului normativ când este relevant (ex: OUG 114/2018)
7. Menționează când o lege a fost modificată sau abrogată
8. Pentru cazuri complexe, recomandă consultarea unui avocat licențiat în România

EXEMPLE DE RĂSPUNSURI CORECTE:
- "Conform Codului Penal din România (Art. 188-189), conduirea sub influența alcoolului..."
- "Potrivit OUG 195/2002 privind circulația pe drumurile publice, art. 102..."
- "Legea 53/2003 - Codul Muncii din România prevede că..."

Nu oferi informații juridice generale sau din alte țări. Focus 100% pe România.`
    };

    // Construiește conversația în format simplu
    const userMessage = messages[messages.length - 1].content;
    const prompt = `${systemPrompt.content}\n\nÎntrebare: ${userMessage}\n\nRăspuns:`;

    const response = await axios.post(
      API_URL,
      {
        inputs: prompt,
        parameters: {
          max_new_tokens: 800,
          temperature: 0.4,
          top_p: 0.9,
          return_full_text: false,
        },
      },
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        timeout: 60000,
      }
    );
    
    // Extrage răspunsul generat
    const generatedText = response.data[0]?.generated_text || response.data.generated_text || '';
    
    return generatedText.trim() || 'Nu am putut genera un răspuns. Te rog încearcă din nou.';
  } catch (error) {
    console.error('HuggingFace API error:', error.response?.data?.error || error.message);
    
    // Fallback response dacă API-ul nu e disponibil
    return 'Bună! Sunt RoLexAI, asistentul tău juridic pentru România. Cum te pot ajuta cu legislația?';
  }
}

module.exports = { chatWithGroq };
