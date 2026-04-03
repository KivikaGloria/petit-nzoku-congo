// jeux/nettoye-fleuve.js - Version avec les belles vagues ET les sons

// =============================================
// 🌊 JEU : NETTOIE LE FLEUVE CONGO
// =============================================

// Configuration
const CONFIG = {
    niveaux: [
        { nom: "Débutant", dechets: 3, temps: 60 },
        { nom: "Intermédiaire", dechets: 4, temps: 50 },
        { nom: "Expert", dechets: 5, temps: 45 },
        { nom: "Champion", dechets: 6, temps: 40 }
    ]
};

// Types de déchets
const TYPES_DECHETS = [
    { emoji: "🧴", points: 1, conseil: "Les bouteilles plastique polluent beaucoup !" },
    { emoji: "🛍️", points: 1, conseil: "Utilise des sacs réutilisables !" },
    { emoji: "🥫", points: 1, conseil: "Les canettes se recyclent !" }
];

// Variables
let canvas, ctx;
let dechets = [];
let score = 0;
let tempsRestant = 60;
let niveauActuel = 0;
let jeuActif = true;
let timer;
let offsetVagues = 0;
let sonActive = true;
let sons = {};

// Éléments DOM
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

// =============================================
// 🔊 FONCTIONS AUDIO
// =============================================

function chargerSons() {
    try {
        // Mets le bon chemin selon où sont tes sons
        sons.plouf = new Audio('../sons/plouf.mp3');     // Si dans dossier sons/
        sons.bravo = new Audio('../sons/bravo.mp3');     // Si dans dossier sons/
        sons.niveau = new Audio('../sons/niveau.mp3');   // Si dans dossier sons/
        
        // Alternative si les sons sont dans le même dossier :
        // sons.plouf = new Audio('plouf.mp3');
        // sons.bravo = new Audio('bravo.mp3');
        // sons.niveau = new Audio('niveau.mp3');
        
        console.log("✅ Sons chargés");
    } catch (e) {
        console.log("❌ Erreur chargement sons:", e);
    }
}

function jouerSon(type) {
    if (!sonActive) return;
    if (sons[type]) {
        sons[type].currentTime = 0;
        sons[type].play().catch(e => console.log("Erreur son:", e));
    }
}

chargerSons();

// =============================================
// INITIALISATION
// =============================================

function initCanvas() {
    canvas = document.getElementById('jeuCanvas');
    ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 400;
    canvas.addEventListener('click', clicSurCanvas);
}

function creerDechets() {
    dechets = [];
    const nbDechets = CONFIG.niveaux[niveauActuel].dechets;
    totalDechetsEl.textContent = nbDechets;
    
    for (let i = 0; i < nbDechets; i++) {
        dechets.push({
            type: Math.floor(Math.random() * TYPES_DECHETS.length),
            x: 200 + Math.random() * 400,
            y: 150 + Math.random() * 200,
            vx: (Math.random() - 0.5) * 1,
            vy: (Math.random() - 0.5) * 1
        });
    }
}

// =============================================
// 🌊 DESSIN AVEC LES BELLES VAGUES
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
    
    // LES BELLES VAGUES
    for (let i = 0; i < 5; i++) {
        const y = 180 + i * 40;
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(255,255,255,0.4)';
        ctx.lineWidth = 3;
        
        for (let x = 0; x < canvas.width; x += 30) {
            if (x === 0) {
                ctx.moveTo(x, y + Math.sin(x * 0.02 + offsetVagues) * 8);
            } else {
                ctx.lineTo(x, y + Math.sin(x * 0.02 + offsetVagues) * 8);
            }
        }
        ctx.stroke();
    }
    
    // Rives
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(0, 110, canvas.width, 15);
    ctx.fillStyle = '#228B22';
    ctx.fillRect(0, 100, canvas.width, 12);
    
    // Arbres
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(50, 40, 10, 50);
    ctx.fillStyle = '#228B22';
    ctx.beginPath();
    ctx.arc(55, 30, 15, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(700, 40, 10, 50);
    ctx.fillStyle = '#228B22';
    ctx.beginPath();
    ctx.arc(705, 30, 15, 0, Math.PI * 2);
    ctx.fill();
    
    // Déchets
    dechets.forEach(d => {
        ctx.font = '50px Arial';
        ctx.fillText(TYPES_DECHETS[d.type].emoji, d.x - 20, d.y - 20);
        
        // Petit cercle d'aide
        ctx.strokeStyle = 'rgba(255,255,255,0.3)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(d.x, d.y - 20, 25, 0, Math.PI * 2);
        ctx.stroke();
    });
}

function animation() {
    offsetVagues += 0.05;
    
    if (jeuActif) {
        dechets.forEach(d => {
            d.x += d.vx;
            d.y += d.vy;
            
            if (d.x < 30 || d.x > canvas.width - 30) d.vx *= -1;
            if (d.y < 150 || d.y > canvas.height - 30) d.vy *= -1;
        });
    }
    
    dessiner();
    requestAnimationFrame(animation);
}

// =============================================
// 👆 CLIC
// =============================================

function clicSurCanvas(e) {
    if (!jeuActif) return;
    
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    const mouseX = (e.clientX - rect.left) * scaleX;
    const mouseY = (e.clientY - rect.top) * scaleY;
    
    for (let i = 0; i < dechets.length; i++) {
        const d = dechets[i];
        const distance = Math.sqrt((mouseX - d.x)**2 + (mouseY - (d.y - 20))**2);
        
        if (distance < 30) {
            jouerSon('plouf');
            
            score += TYPES_DECHETS[d.type].points;
            scoreEl.textContent = score;
            dechets.splice(i, 1);
            
            messageTexte.textContent = "💡 " + TYPES_DECHETS[d.type].conseil;
            messageEducatif.style.display = 'block';
            setTimeout(() => messageEducatif.style.display = 'none', 2000);
            
            if (dechets.length === 0) {
                finDeNiveau();
            }
            return;
        }
    }
}

// =============================================
// 🏁 FIN DE NIVEAU
// =============================================

function finDeNiveau() {
    jeuActif = false;
    clearInterval(timer);
    jouerSon('bravo');
    
    if (niveauActuel < CONFIG.niveaux.length - 1) {
        btnNiveauSuivant.style.display = 'inline-block';
        messageTexte.textContent = "🎉 Niveau terminé ! Clique sur 'Niveau suivant' !";
        messageEducatif.style.display = 'block';
    } else {
        messageTexte.textContent = "🏆 FÉLICITATIONS ! Tu as gagné !";
        messageEducatif.style.display = 'block';
        btnNiveauSuivant.style.display = 'none';
    }
}

// =============================================
// 🔄 NIVEAU SUIVANT
// =============================================

function niveauSuivant() {
    jouerSon('niveau');
    
    btnNiveauSuivant.style.display = 'none';
    niveauActuel++;
    
    niveauEl.textContent = niveauActuel + 1;
    tempsRestant = CONFIG.niveaux[niveauActuel].temps;
    tempsEl.textContent = tempsRestant;
    
    creerDechets();
    jeuActif = true;
    
    clearInterval(timer);
    timer = setInterval(() => {
        if (jeuActif) {
            tempsRestant--;
            tempsEl.textContent = tempsRestant;
            
            if (tempsRestant <= 0) {
                jeuActif = false;
                clearInterval(timer);
                messageTexte.textContent = "⏰ Temps écoulé !";
                messageEducatif.style.display = 'block';
            }
        }
    }, 1000);
    
    messageTexte.textContent = "Niveau " + (niveauActuel + 1) + " !";
    messageEducatif.style.display = 'block';
    setTimeout(() => messageEducatif.style.display = 'none', 2000);
}

// =============================================
// 🔄 RECOMMENCER
// =============================================

function recommencer() {
    niveauActuel = 0;
    score = 0;
    scoreEl.textContent = "0";
    niveauEl.textContent = "1";
    
    const config = CONFIG.niveaux[0];
    tempsRestant = config.temps;
    tempsEl.textContent = tempsRestant;
    
    btnNiveauSuivant.style.display = 'none';
    
    creerDechets();
    jeuActif = true;
    
    clearInterval(timer);
    timer = setInterval(() => {
        if (jeuActif) {
            tempsRestant--;
            tempsEl.textContent = tempsRestant;
            
            if (tempsRestant <= 0) {
                jeuActif = false;
                clearInterval(timer);
                messageTexte.textContent = "⏰ Temps écoulé !";
                messageEducatif.style.display = 'block';
            }
        }
    }, 1000);
}

// =============================================
// 🚀 DÉMARRAGE
// =============================================

window.addEventListener('load', () => {
    initCanvas();
    
    niveauActuel = 0;
    score = 0;
    scoreEl.textContent = "0";
    niveauEl.textContent = "1";
    
    const config = CONFIG.niveaux[0];
    tempsRestant = config.temps;
    tempsEl.textContent = tempsRestant;
    
    creerDechets();
    animation();
    
    timer = setInterval(() => {
        if (jeuActif) {
            tempsRestant--;
            tempsEl.textContent = tempsRestant;
            
            if (tempsRestant <= 0) {
                jeuActif = false;
                clearInterval(timer);
                messageTexte.textContent = "⏰ Temps écoulé !";
                messageEducatif.style.display = 'block';
            }
        }
    }, 1000);
    
    if (modeSonCheckbox) {
        modeSonCheckbox.addEventListener('change', (e) => {
            sonActive = e.target.checked;
        });
    }
    
    btnRecommencer.onclick = recommencer;
    btnNiveauSuivant.onclick = niveauSuivant;
});