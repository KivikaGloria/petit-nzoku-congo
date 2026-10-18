// jeux/nettoye-fleuve.js - Nettoie le fleuve Congo (version relue)

// =============================================
// ⚙️ CONFIGURATION
// =============================================
const CONFIG = {
    niveaux: [
        { nom: "Débutant",      dechets: 4,  temps: 60, vitesse: 1 },
        { nom: "Intermédiaire", dechets: 6,  temps: 55, vitesse: 1.3 },
        { nom: "Expert",        dechets: 8,  temps: 50, vitesse: 1.6 },
        { nom: "Champion",      dechets: 10, temps: 45, vitesse: 2 }
    ]
};

const TYPES_DECHETS = [
    { emoji: "🧴",
      degradation: "Une bouteille en plastique peut mettre de 100 à 1 000 ans à se dégrader !",
      conseil: "Ne la jette jamais dans l'eau : mets-la à la poubelle ou au recyclage." },
    { emoji: "🛍️",
      degradation: "Un sac plastique met environ 450 ans à se dégrader !",
      conseil: "Il peut étouffer les poissons et les tortues. Utilise un sac réutilisable !" },
    { emoji: "🥫",
      degradation: "Une canette en métal met de 100 à 200 ans à se dégrader !",
      conseil: "Elle se recycle : mets-la dans le bon bac !" },
    { emoji: "🔋",
      degradation: "Une pile peut polluer l'eau et le sol pendant des centaines d'années !",
      conseil: "Elle contient des produits toxiques : rapporte-la dans un point de collecte." },
    { emoji: "🍾",
      degradation: "Une bouteille en verre met environ 4 000 ans à disparaître !",
      conseil: "Le verre se recycle, mais il peut couper : ne le laisse jamais traîner !" }
];

// =============================================
// 📦 VARIABLES
// =============================================
let canvas, ctx;
let dechets = [];
let collectes = 0;      // déchets ramassés dans CE niveau
let scoreTotal = 0;     // déchets ramassés depuis le début
let tempsRestant = 60;
let niveauActuel = 0;
let jeuActif = true;
let timer;
let offsetVagues = 0;
let xPirogue = -40;
let sonActive = true;
let delaiMessage = null;

const scoreEl = document.getElementById('score');
const totalDechetsEl = document.getElementById('total-dechets');
const tempsEl = document.getElementById('temps');
const niveauEl = document.getElementById('niveau');
const messageEducatif = document.getElementById('messageEducatif');
const messageTexte = document.getElementById('messageTexte');
const btnRecommencer = document.getElementById('btn-recommencer');
const btnNiveauSuivant = document.getElementById('btn-niveau-suivant');
const conseilEl = document.getElementById('conseil');
const modeSonCheckbox = document.getElementById('mode-son');

const TEXTE_CONSEIL_DEPART = "Clique sur les déchets pour nettoyer le fleuve !";

// =============================================
// 🔊 SONS (fichiers dans ../sons/, sinon sons fabriqués par le navigateur)
// =============================================
const sons = {};
const fichierManquant = {};
let ctxAudio = null;

function chargerSons() {
    ['plouf', 'bravo', 'niveau'].forEach((nom) => {
        try {
            const a = new Audio('../sons/' + nom + '.mp3');
            a.addEventListener('error', () => { fichierManquant[nom] = true; });
            sons[nom] = a;
        } catch (e) { fichierManquant[nom] = true; }
    });
}

function synthese(nom) {
    try {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return;
        ctxAudio = ctxAudio || new AC();
        if (ctxAudio.state === 'suspended') ctxAudio.resume();
        const notes = nom === 'plouf' ? [[620, 0], [260, 0.08]]
            : nom === 'niveau' ? [[523, 0], [659, 0.12], [784, 0.24]]
            : [[523, 0], [659, 0.12], [784, 0.24], [1047, 0.36]];
        notes.forEach(([freq, delai]) => {
            const t = ctxAudio.currentTime + delai;
            const o = ctxAudio.createOscillator();
            const g = ctxAudio.createGain();
            o.type = nom === 'plouf' ? 'sine' : 'triangle';
            o.frequency.setValueAtTime(freq, t);
            g.gain.setValueAtTime(0.0001, t);
            g.gain.exponentialRampToValueAtTime(0.2, t + 0.02);
            g.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
            o.connect(g);
            g.connect(ctxAudio.destination);
            o.start(t);
            o.stop(t + 0.2);
        });
    } catch (e) { /* pas de son, ce n'est pas grave */ }
}

function jouerSon(nom) {
    if (!sonActive) return;
    const a = sons[nom];
    if (!a || fichierManquant[nom]) { synthese(nom); return; }
    a.currentTime = 0;
    a.play().catch(() => synthese(nom));
}

// =============================================
// 💬 MESSAGES
// =============================================
function afficherMessage(texte, duree) {
    clearTimeout(delaiMessage);  // évite qu'un ancien message efface le nouveau
    messageTexte.textContent = texte;
    messageEducatif.style.display = 'block';
    if (duree > 0) {
        delaiMessage = setTimeout(() => { messageEducatif.style.display = 'none'; }, duree);
    }
}

function cacherMessage() {
    clearTimeout(delaiMessage);
    messageEducatif.style.display = 'none';
}

// =============================================
// 🎮 NIVEAUX
// =============================================
function initCanvas() {
    canvas = document.getElementById('jeuCanvas');
    ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 400;
    canvas.addEventListener('click', clicSurCanvas);
}

function creerDechets() {
    const cfg = CONFIG.niveaux[niveauActuel];
    dechets = [];
    totalDechetsEl.textContent = cfg.dechets;
    for (let i = 0; i < cfg.dechets; i++) {
        dechets.push({
            type: Math.floor(Math.random() * TYPES_DECHETS.length),
            x: 60 + Math.random() * (canvas.width - 120),
            y: 170 + Math.random() * (canvas.height - 230),
            vx: (Math.random() - 0.5) * 2 * cfg.vitesse,
            vy: (Math.random() - 0.5) * 2 * cfg.vitesse
        });
    }
}

function demarrerChrono() {
    clearInterval(timer);
    timer = setInterval(() => {
        if (!jeuActif) return;
        tempsRestant--;
        tempsEl.textContent = tempsRestant;
        if (tempsRestant <= 0) tempsEcoule();
    }, 1000);
}

function tempsEcoule() {
    jeuActif = false;
    clearInterval(timer);
    afficherMessage("⏰ Temps écoulé ! Tu as ramassé " + scoreTotal + " déchets. Essaie encore !", 0);
}

function lancerNiveau() {
    const cfg = CONFIG.niveaux[niveauActuel];
    collectes = 0;
    scoreEl.textContent = 0;
    niveauEl.textContent = niveauActuel + 1;
    tempsRestant = cfg.temps;
    tempsEl.textContent = tempsRestant;
    creerDechets();
    jeuActif = true;
    demarrerChrono();
}

// =============================================
// 🎨 DESSIN
// =============================================
function dessiner() {
    // Ciel
    ctx.fillStyle = '#87CEEB';
    ctx.fillRect(0, 0, canvas.width, 120);

    // Soleil
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(700, 70, 40, 0, Math.PI * 2);
    ctx.fill();

    // Nuages
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.beginPath();
    ctx.arc(150, 50, 30, 0, Math.PI * 2);
    ctx.arc(180, 40, 25, 0, Math.PI * 2);
    ctx.arc(120, 40, 25, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(400, 80, 35, 0, Math.PI * 2);
    ctx.arc(430, 70, 30, 0, Math.PI * 2);
    ctx.arc(370, 70, 30, 0, Math.PI * 2);
    ctx.fill();

    // Eau du fleuve
    ctx.fillStyle = '#1E90FF';
    ctx.fillRect(0, 120, canvas.width, canvas.height - 120);

    // Vagues
    for (let i = 0; i < 5; i++) {
        const y = 180 + i * 40;
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(255,255,255,0.4)';
        ctx.lineWidth = 3;
        for (let x = 0; x < canvas.width; x += 30) {
            const yy = y + Math.sin(x * 0.02 + offsetVagues) * 8;
            if (x === 0) ctx.moveTo(x, yy); else ctx.lineTo(x, yy);
        }
        ctx.stroke();
    }

    // Rives
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(0, 110, canvas.width, 15);
    ctx.fillStyle = '#228B22';
    ctx.fillRect(0, 100, canvas.width, 12);

    // Arbres
    [[50, 55], [700, 705]].forEach(([tronc, cime]) => {
        ctx.fillStyle = '#8B4513';
        ctx.fillRect(tronc, 40, 10, 50);
        ctx.fillStyle = '#228B22';
        ctx.beginPath();
        ctx.arc(cime, 30, 15, 0, Math.PI * 2);
        ctx.fill();
    });

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Une pirogue qui traverse le fleuve (décor, on ne peut pas cliquer dessus)
    ctx.font = '40px Arial';
    ctx.fillText('🛶', xPirogue, 140);

    // Déchets : l'emoji est dessiné AU CENTRE de la zone où l'on clique
    ctx.font = '48px Arial';
    dechets.forEach((d) => {
        ctx.strokeStyle = 'rgba(255,255,255,0.5)';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(d.x, d.y, 34, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fillText(TYPES_DECHETS[d.type].emoji, d.x, d.y + 2);
    });
}

function animation() {
    offsetVagues += 0.05;
    xPirogue += 0.6;
    if (xPirogue > canvas.width + 40) xPirogue = -40;

    if (jeuActif) {
        dechets.forEach((d) => {
            d.x += d.vx;
            d.y += d.vy;
            if (d.x < 40 || d.x > canvas.width - 40) d.vx *= -1;
            if (d.y < 160 || d.y > canvas.height - 40) d.vy *= -1;
        });
    }

    dessiner();
    requestAnimationFrame(animation);
}

// =============================================
// 👆 CLIC / TOUCHER
// =============================================
function clicSurCanvas(e) {
    if (!jeuActif) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) * (canvas.width / rect.width);
    const mouseY = (e.clientY - rect.top) * (canvas.height / rect.height);

    for (let i = 0; i < dechets.length; i++) {
        const d = dechets[i];
        if (Math.hypot(mouseX - d.x, mouseY - d.y) < 40) {  // grande zone : facile pour les petits doigts
            ramasser(i);
            return;
        }
    }
}

function ramasser(i) {
    const d = dechets.splice(i, 1)[0];
    jouerSon('plouf');
    collectes++;
    scoreTotal++;
    scoreEl.textContent = collectes;

    const info = TYPES_DECHETS[d.type];
    // Chaque texte n'apparaît qu'UNE fois :
    // - la durée de dégradation dans le message sous le jeu
    // - le conseil dans « Le savais-tu ? »
    conseilEl.textContent = info.emoji + " " + info.conseil;

    if (dechets.length === 0) {
        finDeNiveau(info.emoji + " " + info.degradation);
    } else {
        afficherMessage(info.emoji + " " + info.degradation, 5000);
    }
}

// =============================================
// 🏁 FIN DE NIVEAU, SUITE, RECOMMENCER
// =============================================
function finDeNiveau(detail) {
    jeuActif = false;
    clearInterval(timer);
    jouerSon('bravo');

    if (niveauActuel < CONFIG.niveaux.length - 1) {
        btnNiveauSuivant.style.display = 'inline-block';
        afficherMessage(detail + " 🎉 Niveau " + (niveauActuel + 1) + " terminé ! Clique sur « Niveau suivant ».", 0);
    } else {
        btnNiveauSuivant.style.display = 'none';
        afficherMessage(detail + " 🏆 FÉLICITATIONS ! Le fleuve est propre : tu as ramassé " + scoreTotal + " déchets !", 0);
    }
}

function niveauSuivant() {
    jouerSon('niveau');
    btnNiveauSuivant.style.display = 'none';
    niveauActuel++;
    lancerNiveau();
    afficherMessage("Niveau " + (niveauActuel + 1) + " : " + CONFIG.niveaux[niveauActuel].nom + " !", 2000);
}

function recommencer() {
    niveauActuel = 0;
    scoreTotal = 0;
    btnNiveauSuivant.style.display = 'none';
    conseilEl.textContent = TEXTE_CONSEIL_DEPART;
    cacherMessage();
    lancerNiveau();
}

// =============================================
// 🚀 DÉMARRAGE
// =============================================
window.addEventListener('load', () => {
    initCanvas();
    chargerSons();
    recommencer();
    animation();

    if (modeSonCheckbox) {
        modeSonCheckbox.addEventListener('change', (e) => { sonActive = e.target.checked; });
    }
    btnRecommencer.onclick = recommencer;
    btnNiveauSuivant.onclick = niveauSuivant;
});
