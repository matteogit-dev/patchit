export const games = [
  {
    id: 'dear-esther',
    title: 'Dear Esther: Landmark Edition',
    code: 'DE',
    status: 'complete',
    version: 'v1.0.1',
    updatedDate: '2026-08-01',
    progress: 100,
    stringsTranslated: 354,
    downloadUrl: 'https://github.com/matteogit-dev/patchit/releases/download/dear-esther-v1.0.1/Dear-Esther-Landmark-Edition-ITA-v1.0.1.zip',
    releaseTag: 'dear-esther-v1.0.1',
    coverImage: 'games/dear-esther/cover.jpg',
    steamUrl: 'https://store.steampowered.com/app/203810/Dear_Esther_Landmark_Edition/',
    description: 'Traduzione amatoriale completa dei sottotitoli e dei testi di Dear Esther: Landmark Edition.',
    instructions: [
      'Scarica ed estrai lo zip della traduzione.',
      'Copia i file estratti nella cartella di installazione del gioco steamapps/common/Dear Esther Landmark Edition/DearEsther_Data/StreamingAssets.',
      'Sovrascrivi il file quando richiesto.',
      'Avvia il gioco e seleziona la lingua Inglese dal menu impostazioni.',
    ],
    changelog: [
      { version: 'v1.0', date: '2026-08-01', note: 'Prima versione completa della traduzione.' },
      { version: 'v1.0.1', date: '2026-08-01', note: 'Correzione di alcune stringhe di traduzione.' }
    ],
  },
  {
    id: '112-operator',
    title: '112 Operator',
    code: '112',
    status: 'complete',
    version: 'v1.0.3',
    updatedDate: '2024-04-27',
    progress: 100,
    stringsTranslated: 10876,
    downloadUrl: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2800116835',
    releaseTag: null,
    coverImage: 'games/112-operator/cover.jpg',
    steamUrl: 'https://store.steampowered.com/app/793460/112_Operator/',
    description: 'Traduzione amatoriale completa dei sottotitoli e dei testi di 112 Operator.',
    instructions: [
      'Premi sul pulsante Scarica patch, verrai reindirizzato su Steam .',
      'Premi il tasto Sottoscrivi.',
      'Avvia il gioco e seleziona la lingua Italiana dal menu impostazioni.',
    ],
    changelog: [      
      { version: 'v1.0', date: '2023-04-18', note: 'Prima versione completa della traduzione.' },
      { version: 'v1.0.1', date: '2023-04-18', note: 'Tradotti 6 consigli visibili nel precaricamento di una partita' },
      { version: 'v1.0.2', date: '2023-04-20', note: 'Tradotti tutti i consigli visibili nel precaricamento di una partita.' },
      { version: 'v1.0.3', date: '2024-04-27', note: 'Corretto un errore di traduzione.' }
    ],
  },
  {
    id: 'wwi',
    title: 'World War I',
    code: 'wwi',
    status: 'progress',
    version: 'v1.0',
    updatedDate: null,
    progress: 0,
    stringsTranslated: 0, //2732 stringhe
    downloadUrl: null,
    releaseTag: null,
    coverImage: 'games/world-war-i/cover.jpg',
    steamUrl: 'https://store.steampowered.com/app/361380/World_War_I/',
    description: '',
    instructions: [
    ],
    changelog: [
    ],
  },
]