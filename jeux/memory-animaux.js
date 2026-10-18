// jeux/memory-animaux.js - Memory des animaux du Congo (version relue)

// =============================================
// 🐘 LES ANIMAUX (10 animaux : à chaque partie, on en tire au hasard)
// =============================================
const TOUS_LES_ANIMAUX = [
    { nom: "Éléphant",     emoji: "🐘", fait: "L'éléphant de forêt aide la forêt à repousser : il transporte des graines dans ses crottes !" },
    { nom: "Gorille",      emoji: "🦍", fait: "Le gorille vit en famille, protégée par un grand mâle au dos argenté." },
    { nom: "Pangolin",     emoji: "🦔", fait: "Le pangolin se roule en boule quand il a peur. Il est protégé car on le chasse trop !" },
    { nom: "Chimpanzé",    emoji: "🐒", fait: "Le chimpanzé est l'un de nos plus proches cousins : il sait utiliser des outils." },
    { nom: "Buffle",       emoji: "🐃", fait: "Le buffle de forêt est plus petit et plus roux que celui de la savane." },
    { nom: "Perroquet",    emoji: "🦜", fait: "Le perroquet gris de nos forêts sait imiter la voix des humains." },
    { nom: "Léopard",      emoji: "🐆", fait: "Le léopard est un chasseur discret : il se repose dans les arbres." },
    { nom: "Crocodile",    emoji: "🐊", fait: "Le crocodile vit dans les fleuves et les marais, et il reste très longtemps sous l'eau." },
    { nom: "Hippopotame",  emoji: "🦛", fait: "L'hippopotame passe ses journées dans l'eau et sort la nuit pour brouter." },
    { nom: "Tortue",       emoji: "🐢", fait: "La tortue luth, la plus grande tortue marine, vient pondre sur le littoral congolais." }
];

const NB_NIVEAUX = 4;   // niveau 1 = 2 paires, niveau 2 = 4, niveau 3 = 6, niveau 4 = 8

// =============================================
// 📦 VARIABLES
// =============================================
let niveauActuel = 1;
let cartes = [];
let cartesRetournees = [];
let cartesTrouvees = [];
let coups = 0;
let coupsTotal = 0;
let peutJouer = true;
let sonActive = true;
let delaiMessage = null;

const gridEl = document.getElementById('memory-grid');
const niveauEl = document.getElementById('niveau-display');
const coupsEl = document.getElementById('coups');
const messageEl = document.getElementById('messageFelicitations');
const messageTexteEl = document.getElementById('messageTexte');
const btnNouveau = document.getElementById('btn-nouveau');
const btnSuivant = document.getElementById('btn-niveau-suivant');
const modeSonCheckbox = document.getElementById('mode-son');

// =============================================
// 🔊 SONS (fabriqués par le navigateur : aucun fichier à charger)
// =============================================
let ctxAudio = null;
const MELODIES = {
    flip:   [[520, 0]],
    ok:     [[660, 0], [880, 0.1]],
    non:    [[220, 0], [170, 0.12]],
    niveau: [[523, 0], [659, 0.12], [784, 0.24], [1047, 0.36]]
};

function son(nom) {
    if (!sonActive) return;
    try {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return;
        ctxAudio = ctxAudio || new AC();
        if (ctxAudio.state === 'suspended') ctxAudio.resume();
        MELODIES[nom].forEach(([freq, delai]) => {
            const t = ctxAudio.currentTime + delai;
            const o = ctxAudio.createOscillator();
            const g = ctxAudio.createGain();
            o.type = nom === 'non' ? 'sawtooth' : 'triangle';
            o.frequency.setValueAtTime(freq, t);
            g.gain.setValueAtTime(0.0001, t);
            g.gain.exponentialRampToValueAtTime(0.18, t + 0.02);
            g.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
            o.connect(g);
            g.connect(ctxAudio.destination);
            o.start(t);
            o.stop(t + 0.2);
        });
    } catch (e) { /* pas de son, ce n'est pas grave */ }
}

// =============================================
// 🛠️ OUTILS
// =============================================
// Vrai mélange (l'ancien .sort(() => Math.random() - 0.5) mélangeait mal)
function melanger(tab) {
    const t = [...tab];
    for (let i = t.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [t[i], t[j]] = [t[j], t[i]];
    }
    return t;
}

function montrerMessage(texte, duree) {
    clearTimeout(delaiMessage);
    messageTexteEl.textContent = texte;
    messageEl.style.display = 'block';
    if (duree > 0) {
        delaiMessage = setTimeout(() => { messageEl.style.display = 'none'; }, duree);
    }
}

// =============================================
// 🎮 JEU
// =============================================
function initJeu() {
    const nbPaires = niveauActuel * 2;
    const choix = melanger(TOUS_LES_ANIMAUX).slice(0, nbPaires);   // animaux différents à chaque partie

    const paires = [];
    choix.forEach((animal, id) => {
        paires.push({ id, ...animal }, { id, ...animal });
    });
    cartes = melanger(paires);

    cartesRetournees = [];
    cartesTrouvees = [];
    coups = 0;
    peutJouer = true;
    clearTimeout(delaiMessage);

    niveauEl.textContent = 'Niveau ' + niveauActuel + ' / ' + NB_NIVEAUX;
    coupsEl.textContent = coups;
    messageEl.style.display = 'none';
    btnSuivant.style.display = 'none';
    gridEl.style.gridTemplateColumns = niveauActuel === 1 ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)';

    afficherCartes();
}

function afficherCartes() {
    gridEl.innerHTML = '';
    cartes.forEach((carte, index) => {
        const trouvee = cartesTrouvees.includes(index);
        const visible = trouvee || cartesRetournees.includes(index);

        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'carte' + (trouvee ? ' trouvee' : '') + (visible && !trouvee ? ' retournee' : '');
        b.setAttribute('aria-label', visible ? carte.nom : 'Carte cachée numéro ' + (index + 1));
        b.innerHTML = visible
            ? '<span class="carte-emoji">' + carte.emoji + '</span>' + (trouvee ? '<span class="carte-nom">' + carte.nom + '</span>' : '')
            : '❓';
        if (trouvee) b.disabled = true;
        b.addEventListener('click', () => cliquerCarte(index));
        gridEl.appendChild(b);
    });
}

function cliquerCarte(index) {
    if (!peutJouer || cartesTrouvees.includes(index) || cartesRetournees.includes(index)) return;

    son('flip');
    cartesRetournees.push(index);
    afficherCartes();
    if (gridEl.children[index]) gridEl.children[index].focus({ preventScroll: true });  // le clavier garde sa place

    if (cartesRetournees.length < 2) return;

    coups++;
    coupsEl.textContent = coups;
    peutJouer = false;
    const [i1, i2] = cartesRetournees;

    if (cartes[i1].id === cartes[i2].id) {
        cartesTrouvees.push(i1, i2);
        cartesRetournees = [];
        peutJouer = true;
        son('ok');
        afficherCartes();

        if (cartesTrouvees.length === cartes.length) {
            setTimeout(niveauTermine, 700);
        } else {
            const a = cartes[i1];
            montrerMessage(a.emoji + ' ' + a.nom + ' : ' + a.fait, 5000);
        }
    } else {
        son('non');
        setTimeout(() => {
            cartesRetournees = [];
            peutJouer = true;
            afficherCartes();
        }, 1000);
    }
}

function niveauTermine() {
    coupsTotal += coups;
    const nbPaires = cartes.length / 2;
    const etoiles = coups <= nbPaires + 2 ? 3 : coups <= nbPaires * 2 ? 2 : 1;
    const dernier = cartes[cartesTrouvees[cartesTrouvees.length - 1]];
    son('niveau');

    if (niveauActuel < NB_NIVEAUX) {
        montrerMessage(dernier.emoji + ' ' + dernier.fait + '  🌟 Niveau ' + niveauActuel + ' terminé en ' + coups +
            ' coups ! ' + '⭐'.repeat(etoiles), 0);
        btnSuivant.style.display = 'inline-block';
    } else {
        finirJeuTotal();
    }
}

function finirJeuTotal() {
    const container = document.querySelector('.memory-container');
    container.innerHTML = `
        <div class="resultats-final">
            <div class="resultats-card">
                <h2>🏆 CHAMPION !</h2>
                <div class="grand-score">${NB_NIVEAUX}/${NB_NIVEAUX}</div>
                <p>Tu as terminé les ${NB_NIVEAUX} niveaux en ${coupsTotal} coups !</p>
                <button id="btn-rejouer" type="button" class="bouton-action principal">🔁 Recommencer tout</button>
            </div>
        </div>`;
    document.getElementById('btn-rejouer').addEventListener('click', () => location.reload());
}

// =============================================
// 🚀 DÉMARRAGE
// =============================================
window.addEventListener('load', () => {
    btnSuivant.addEventListener('click', () => {
        niveauActuel++;
        initJeu();
    });
    btnNouveau.addEventListener('click', () => {
        niveauActuel = 1;
        coupsTotal = 0;
        initJeu();
    });
    if (modeSonCheckbox) {
        modeSonCheckbox.addEventListener('change', (e) => { sonActive = e.target.checked; });
    }
    initJeu();
});
