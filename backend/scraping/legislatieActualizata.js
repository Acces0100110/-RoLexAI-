// Scraper îmbunătățit pentru legislația română
// Sursă oficială: Legislație.just.ro
const axios = require('axios');
const cheerio = require('cheerio');

// Coduri importante din legislația română
const CODURI_PRINCIPALE = [
  { nume: 'Codul Penal', url: 'https://legislatie.just.ro/Public/DetaliiDocument/109855' },
  { nume: 'Codul Civil', url: 'https://legislatie.just.ro/Public/DetaliiDocument/109884' },
  { nume: 'Codul de Procedură Penală', url: 'https://legislatie.just.ro/Public/DetaliiDocument/148826' },
  { nume: 'Codul de Procedură Civilă', url: 'https://legislatie.just.ro/Public/DetaliiDocument/134092' },
  { nume: 'Codul Muncii', url: 'https://legislatie.just.ro/Public/DetaliiDocument/32007' },
  { nume: 'Codul Fiscal', url: 'https://legislatie.just.ro/Public/DetaliiDocument/259021' },
  { nume: 'Constituția României', url: 'https://legislatie.just.ro/Public/DetaliiDocument/151969' }
];

/**
 * Extrage text complet dintr-o lege de pe legislatie.just.ro
 */
async function scrapeLegeOficiala(url) {
  try {
    console.log(`📜 Scraping: ${url}`);
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      timeout: 30000
    });

    const $ = cheerio.load(response.data);
    
    // Extrage titlul actului normativ
    const titlu = $('.panel-title').first().text().trim();
    
    // Extrage conținutul legislativ
    const continut = [];
    
    // Caută toate articolele
    $('.article').each((i, elem) => {
      const numarArticol = $(elem).find('.article-number').text().trim();
      const textArticol = $(elem).find('.article-text').text().trim();
      
      if (numarArticol && textArticol) {
        continut.push({
          articol: numarArticol,
          text: textArticol
        });
      }
    });
    
    // Dacă nu găsește .article, încearcă altă structură
    if (continut.length === 0) {
      $('#content-text').find('p, div').each((i, elem) => {
        const text = $(elem).text().trim();
        if (text && text.length > 20) {
          continut.push({
            articol: `Secțiune ${i + 1}`,
            text: text
          });
        }
      });
    }

    return {
      titlu,
      url,
      articole: continut,
      dataActualizare: new Date().toISOString(),
      sursa: 'legislatie.just.ro'
    };
  } catch (error) {
    console.error(`❌ Eroare scraping ${url}:`, error.message);
    return null;
  }
}

/**
 * Actualizează toate codurile principale
 */
async function actualizeazaToateCodele() {
  console.log('🔄 START: Actualizare legislație...\n');
  
  const rezultate = [];
  
  for (const cod of CODURI_PRINCIPALE) {
    console.log(`\n📖 Procesez: ${cod.nume}`);
    const data = await scrapeLegeOficiala(cod.url);
    
    if (data) {
      rezultate.push({
        nume: cod.nume,
        ...data
      });
      console.log(`✅ ${cod.nume}: ${data.articole.length} articole extrase`);
    } else {
      console.log(`⚠️ ${cod.nume}: Scraping eșuat`);
    }
    
    // Pauză între requests pentru a nu supraîncărca serverul
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  console.log('\n✅ FINALIZAT: Actualizare legislație completă');
  return rezultate;
}

/**
 * Caută în legislație după cuvinte cheie
 */
function cautaInLegislatie(legi, cuvinteCheie) {
  const rezultate = [];
  
  for (const lege of legi) {
    for (const articol of lege.articole) {
      const textLower = articol.text.toLowerCase();
      const gasit = cuvinteCheie.some(cuv => textLower.includes(cuv.toLowerCase()));
      
      if (gasit) {
        rezultate.push({
          lege: lege.nume,
          articol: articol.articol,
          text: articol.text,
          relevanta: calculeazaRelevanta(articol.text, cuvinteCheie)
        });
      }
    }
  }
  
  // Sortează după relevanță
  return rezultate.sort((a, b) => b.relevanta - a.relevanta);
}

function calculeazaRelevanta(text, cuvinteCheie) {
  let scor = 0;
  const textLower = text.toLowerCase();
  
  for (const cuv of cuvinteCheie) {
    const matches = (textLower.match(new RegExp(cuv.toLowerCase(), 'g')) || []).length;
    scor += matches;
  }
  
  return scor;
}

module.exports = {
  scrapeLegeOficiala,
  actualizeazaToateCodele,
  cautaInLegislatie,
  CODURI_PRINCIPALE
};
