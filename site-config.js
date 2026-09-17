// ============================================================
// CONFIGURAZIONE DEL SITO — Claudio Belardo
// Questo file è condiviso da index.html e admin.html.
// Compila i valori qui sotto seguendo la guida ricevuta in chat.
// ============================================================

window.SITE_CONFIG = {

  // Email a cui arrivano i messaggi dal modulo di contatto.
  // La prima volta che qualcuno invia il modulo, FormSubmit ti
  // manda un'email di conferma: devi cliccare il link una sola volta
  // per attivare l'invio verso questo indirizzo.
  contactEmail: "claudiobelardo@gmail.com",

  // Chiavi del progetto Firebase (Console Firebase > Impostazioni progetto
  // > Le tue app > Configurazione SDK). Sostituisci i valori qui sotto
  // con quelli reali: finché iniziano con "INSERISCI", il sito userà
  // gli articoli di esempio e il pannello admin resterà bloccato.
  firebase: {
    apiKey: "AIzaSyBD2PY3CsImmcVBBfKFlXW-pDoilAlzZmE",
  authDomain: "sito-belardo.firebaseapp.com",
  projectId: "sito-belardo",
  storageBucket: "sito-belardo.firebasestorage.app",
  messagingSenderId: "1030310172407",
  appId: "1:1030310172407:web:540eef6b7cb8cdae3965f2"
  }
};
