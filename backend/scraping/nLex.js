// scraping/nLex.js
// Modul pentru scraping n-lex.europa.eu
const axios = require('axios');
const cheerio = require('cheerio');

async function getLatestNlexLaws() {
  try {
    const { data } = await axios.get('https://n-lex.europa.eu/n-lex/info/info-ro/index?lang=ro');
    const $ = cheerio.load(data);
    // Exemplu: extrage titluri de legi recente (ajustează selectorii după structură)
    const laws = [];
    $('a').each((i, el) => {
      const text = $(el).text().trim();
      const href = $(el).attr('href');
      if (text && href && href.startsWith('https://n-lex.europa.eu/')) {
        laws.push({ title: text, link: href });
      }
    });
    return laws;
  } catch (error) {
    console.error('Scraping n-lex.europa.eu error:', error.message);
    return [];
  }
}

module.exports = { getLatestNlexLaws };
