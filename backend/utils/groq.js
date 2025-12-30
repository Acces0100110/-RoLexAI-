// utils/groq.js
// Modul pentru integrarea cu Groq GPT
const axios = require('axios');

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const GROQ_API_KEY = process.env.GROQ_API_KEY;

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

    // Combină system prompt cu mesajele utilizatorului
    const messagesWithSystem = [systemPrompt, ...messages];

    const response = await axios.post(
      GROQ_API_URL,
      {
        model: 'llama-3.3-70b-versatile',
        messages: messagesWithSystem,
        temperature: 0.3, // Mai puțin creativ, mai precis
        max_tokens: 2000,
      },
      {
        headers: {
          'Authorization': `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Groq GPT error:', error.response?.data || error.message);
    return 'Eroare la comunicarea cu Groq GPT. Te rog verifică conexiunea și încearcă din nou.';
  }
}

module.exports = { chatWithGroq };
