// scraping/legisRo.js
// Modul pentru scraping legis.ro
const axios = require('axios');
const cheerio = require('cheerio');

async function getLatestLegisRoLaws() {
  try {
    const { data } = await axios.get('https://legis.ro/');
    const $ = cheerio.load(data);
    // Exemplu: extrage titluri de legi recente (ajustează selectorii după structură)
    const laws = [];
    $('.news-list .news-title').each((i, el) => {
      laws.push({
        title: $(el).text().trim(),
        link: $(el).find('a').attr('href')
      });
    });
    return laws;
  } catch (error) {
    console.error('Scraping legis.ro error:', error.message);
    return [];
  }
}

module.exports = { getLatestLegisRoLaws };
