// Scheduler pentru actualizare automată a legislației
// Rulează zilnic la ora 2:00 AM
const cron = require('node-cron');
const fs = require('fs').promises;
const path = require('path');
const { actualizeazaToateCodele } = require('../scraping/legislatieActualizata');

const LEGISLATION_DB_PATH = path.join(__dirname, '..', 'data', 'legislation.json');

/**
 * Salvează legislația în fișier JSON local (backup dacă nu ai MongoDB)
 */
async function salveazaLegislatie(legi) {
  try {
    const dataDir = path.join(__dirname, '..', 'data');
    
    // Creează directorul dacă nu există
    try {
      await fs.mkdir(dataDir, { recursive: true });
    } catch (err) {
      // Directorul există deja
    }
    
    await fs.writeFile(
      LEGISLATION_DB_PATH,
      JSON.stringify(legi, null, 2),
      'utf8'
    );
    
    console.log(`✅ Legislație salvată: ${LEGISLATION_DB_PATH}`);
    return true;
  } catch (error) {
    console.error('❌ Eroare salvare legislație:', error);
    return false;
  }
}

/**
 * Încarcă legislația din fișierul local
 */
async function incarcaLegislatie() {
  try {
    const data = await fs.readFile(LEGISLATION_DB_PATH, 'utf8');
    const legi = JSON.parse(data);
    console.log(`📚 Legislație încărcată: ${legi.length} coduri`);
    return legi;
  } catch (error) {
    console.log('⚠️ Nu există legislație salvată, va fi descărcată la primul update');
    return [];
  }
}

/**
 * Task de actualizare automată
 */
async function taskActualizareLegislatie() {
  console.log('\n🔄 [CRON] START: Actualizare automată legislație...');
  console.log(`⏰ Data: ${new Date().toLocaleString('ro-RO')}`);
  
  try {
    // Descarcă legislația actualizată
    const legiActualizate = await actualizeazaToateCodele();
    
    // Salvează local
    await salveazaLegislatie(legiActualizate);
    
    console.log('✅ [CRON] Actualizare legislație completă!\n');
  } catch (error) {
    console.error('❌ [CRON] Eroare actualizare:', error);
  }
}

/**
 * Pornește scheduler-ul pentru actualizare automată
 * Rulează zilnic la 02:00 AM
 */
function startScheduler() {
  console.log('🕐 Scheduler legislație pornit!');
  console.log('📅 Program: Zilnic la 02:00 AM');
  
  // Cron pattern: '0 2 * * *' = La ora 02:00 în fiecare zi
  // Pentru testing: '*/5 * * * *' = La fiecare 5 minute
  cron.schedule('0 2 * * *', taskActualizareLegislatie);
  
  console.log('✅ Scheduler activ!\n');
}

/**
 * Actualizare manuală (rulează instant)
 */
async function actualizareaManuala() {
  console.log('🔄 Actualizare manuală declanșată...');
  await taskActualizareLegislatie();
}

module.exports = {
  startScheduler,
  actualizareaManuala,
  incarcaLegislatie,
  salveazaLegislatie
};
