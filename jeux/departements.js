// jeux/departements.js - Version avec les CHEFS-LIEUX

// =============================================
// 🗺️ LES 15 DÉPARTEMENTS DU CONGO - CHEFS-LIEUX
// =============================================

// Données des 15 départements (selon la réforme de 2024)
const DEPARTEMENTS = [
    {
        nom: "de Brazzaville",
        chefLieu: "Brazzaville",
        superficie: "263 km²",
        population: "2,5 millions",
        position: { x: 45, y: 75 } // Position sur la carte (en %)
    },
    {
        nom: "de Pointe-Noire",
        chefLieu: "Pointe-Noire",
        superficie: "44 km²",
        population: "1,4 million",
        position: { x: 20, y: 60 }
    },
    {
        nom: "de la Bouenza",
        chefLieu: "Madingou",
        superficie: "12 265 km²",
        population: "400 000",
        position: { x: 35, y: 50 }
    },
    {
        nom: "du Congo-Oubangui",
        chefLieu: "Impfondo",
        superficie: "45 000 km²",
        population: "150 000",
        position: { x: 80, y: 20 }
    },
    {
        nom: "de la Cuvette",
        chefLieu: "Owando",
        superficie: "48 250 km²",
        population: "300 000",
        position: { x: 65, y: 35 }
    },
    {
        nom: "de la Cuvette-Ouest",
        chefLieu: "Ewo",
        superficie: "26 600 km²",
        population: "100 000",
        position: { x: 55, y: 30 }
    },
    {
        nom: "du Djoué-Léfini",
        chefLieu: "Ngabé",
        superficie: "20 000 km²",
        population: "120 000",
        position: { x: 50, y: 55 }
    },
    {
        nom: "du Kouilou",
        chefLieu: "Loango",
        superficie: "13 650 km²",
        population: "250 000",
        position: { x: 25, y: 55 }
    },
    {
        nom: "de la Lékoumou",
        chefLieu: "Sibiti",
        superficie: "20 950 km²",
        population: "150 000",
        position: { x: 40, y: 45 }
    },
    {
        nom: "de la Likouala",
        chefLieu: "Impfondo",
        superficie: "66 044 km²",
        population: "180 000",
        position: { x: 85, y: 15 }
    },
    {
        nom: "du Niari",
        chefLieu: "Dolisie",
        superficie: "25 942 km²",
        population: "350 000",
        position: { x: 30, y: 40 }
    },
    {
        nom: "de la Nkéni-Alima",
        chefLieu: "Gamboma",
        superficie: "23 000 km²",
        population: "140 000",
        position: { x: 60, y: 45 }
    },
    {
        nom: "des Plateaux",
        chefLieu: "Djambala",
        superficie: "38 400 km²",
        population: "280 000",
        position: { x: 55, y: 50 }
    },
    {
        nom: "du Pool",
        chefLieu: "Kinkala",
        superficie: "33 955 km²",
        population: "500 000",
        position: { x: 45, y: 65 }
    },
    {
        nom: "de la Sangha",
        chefLieu: "Ouesso",
        superficie: "55 800 km²",
        population: "210 000",
        position: { x: 70, y: 20 }
    }
];

// Variables du jeu
let departementsRestants = [];
let departementActuel = null;
let score = 0;
let questionActuelle = 0;
let tempsRestant = 60;
let jeuActif = true;
let timer;
let sonActive = true;

// Éléments DOM
const scoreEl = document.getElementById('score');
const totalQuestionsEl = document.getElementById('total-questions');
const tempsEl = document.getElementById('temps');
const questionActuelleEl = document.getElementById('question-actuelle');
const questionEl = document.getElementById('question');
const nomDepartementEl = document.getElementById('nom-departement');
const reponsesEl = document.getElementById('reponses');
const feedbackEl = document.getElementById('feedback');
const feedbackMessage = document.getElementById('feedback-message');
const chefLieuEl = document.getElementById('chef-lieu');
const superficieEl = document.getElementById('superficie');
const populationEl = document.getElementById('population');
const btnSuivant = document.getElementById('btn-suivant');
const btnRecommencer = document.getElementById('btn-recommencer');
const modeSonCheckbox = document.getElementById('mode-son');
const carteImage = document.getElementById('carte-congo');
const highlightEl = document.getElementById('highlight');

// =============================================
// 🔊 FONCTIONS AUDIO
// =============================================

function jouerSon(type) {
    if (!sonActive) return;
    
    // ✅ CHEMINS CORRIGÉS (avec / au lieu de \)
    const sons = {
        correct: '../sons/correct.mp3',
        incorrect: '../sons/incorrect.mp3',
        bravo: '../sons/bravo.mp3'
    };
    
    try {
        const audio = new Audio(sons[type]);
        audio.volume = 0.3;
        audio.play().catch(e => console.log("Erreur son:", e));
    } catch (e) {
        console.log("Erreur chargement son:", e);
    }
}

// =============================================
// 🎮 INITIALISATION
// =============================================

function melangerDepartements() {
    // Mélanger les départements
    departementsRestants = [...DEPARTEMENTS].sort(() => Math.random() - 0.5);
}

function nouvelleQuestion() {
    if (departementsRestants.length === 0) {
        finDuJeu();
        return;
    }
    
    // Prendre un département aléatoire
    departementActuel = departementsRestants.pop();
    
    // Mettre à jour l'affichage
    questionActuelle++;
    questionActuelleEl.textContent = questionActuelle;
    
    // ✅ NOUVELLE FORMULATION DE LA QUESTION
    questionEl.textContent = `Quel est le chef-lieu du département ${departementActuel.nom} ?`;
    
    
    // Générer les options (le bon chef-lieu + 3 faux)
    const options = genererOptions(departementActuel);
    
    // Afficher les options
    afficherOptions(options);
    
    // Cacher le feedback
    feedbackEl.style.display = 'none';
    btnSuivant.style.display = 'none';
    
    // Enlever le surlignage
    highlightEl.style.display = 'none';
}

function genererOptions(departementCorrect) {
    // Le bon chef-lieu
    const bonChefLieu = departementCorrect.chefLieu;
    
    // Prendre 3 autres chefs-lieux aléatoires (différents)
    let autresChefsLieux = DEPARTEMENTS
        .filter(d => d.chefLieu !== bonChefLieu)
        .map(d => d.chefLieu);
    
    // Enlever les doublons (cas où deux départements ont le même chef-lieu)
    autresChefsLieux = [...new Set(autresChefsLieux)];
    
    // Mélanger et prendre 3
    autresChefsLieux = autresChefsLieux
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
    
    // Créer les options
    let options = [
        { nom: bonChefLieu, correct: true },
        ...autresChefsLieux.map(chefLieu => ({ nom: chefLieu, correct: false }))
    ];
    
    // Mélanger les options
    return options.sort(() => Math.random() - 0.5);
}

function afficherOptions(options) {
    reponsesEl.innerHTML = '';
    
    options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'btn-reponse';
        btn.textContent = option.nom;
        btn.dataset.correct = option.correct;
        btn.addEventListener('click', (e) => verifierReponse(option.correct, e));
        reponsesEl.appendChild(btn);
    });
}

// =============================================
// ✅ VÉRIFICATION
// =============================================

function verifierReponse(correct, event) {
    if (!jeuActif) return;
    
    const boutons = document.querySelectorAll('.btn-reponse');
    boutons.forEach(btn => btn.disabled = true);
    
    // Mettre en évidence la bonne réponse
    boutons.forEach(btn => {
        if (btn.dataset.correct === 'true') {
            btn.classList.add('correct');
        }
    });
    
    if (correct) {
        score++;
        scoreEl.textContent = score;
        feedbackMessage.textContent = `🎉 BRAVO ! Le chef-lieu du ${departementActuel.nom} est bien ${departementActuel.chefLieu} !`;
        feedbackMessage.className = 'bonne';
        jouerSon('correct');
        
        // Afficher le surlignage sur la carte
        afficherSurlignage(departementActuel.position);
    } else {
        // Marquer le bouton cliqué comme incorrect
        event.target.classList.add('incorrect');
        feedbackMessage.textContent = `😓 La bonne réponse était ${departementActuel.chefLieu}, le chef-lieu du ${departementActuel.nom}.`;
        feedbackMessage.className = 'mauvaise';
        jouerSon('incorrect');
        
        // Afficher quand même le bon département sur la carte
        afficherSurlignage(departementActuel.position);
    }
    
    // Afficher les informations
    chefLieuEl.textContent = `🏛️ Chef-lieu : ${departementActuel.chefLieu}`;
    superficieEl.textContent = `📏 Superficie : ${departementActuel.superficie}`;
    populationEl.textContent = `👥 Population : ${departementActuel.population}`;
    
    // Afficher le feedback
    feedbackEl.style.display = 'block';
    btnSuivant.style.display = 'inline-block';
}

function afficherSurlignage(position) {
    if (!carteImage.complete) return;
    
    const rect = carteImage.getBoundingClientRect();
    
    // Calculer la position relative à la carte
    const x = (position.x / 100) * carteImage.width;
    const y = (position.y / 100) * carteImage.height;
    
    highlightEl.style.display = 'block';
    highlightEl.style.left = x + 'px';
    highlightEl.style.top = y + 'px';
    highlightEl.style.width = '40px';
    highlightEl.style.height = '40px';
    highlightEl.style.transform = 'translate(-50%, -50%)';
}

// =============================================
// ➡️ SUIVANT
// =============================================

function questionSuivante() {
    if (departementsRestants.length > 0) {
        nouvelleQuestion();
    } else {
        finDuJeu();
    }
}

// =============================================
// 🏁 FIN DU JEU
// =============================================
function finDuJeu() {
    jeuActif = false;
    clearInterval(timer);
    jouerSon('bravo');
    
    const pourcentage = Math.round((score / DEPARTEMENTS.length) * 100);
    
    // On cible le container principal
    const container = document.querySelector('.departements-container');
    
    // On injecte le HTML avec le style DIRECTEMENT dedans (Inline Style) 
    // pour être SÛR que ça s'affiche, même si le CSS bug.
    container.innerHTML = `
        <div style="display: flex; justify-content: center; align-items: center; min-height: 400px; font-family: sans-serif;">
            <div style="background: white; padding: 40px; border-radius: 25px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); text-align: center; width: 100%; max-width: 500px; border-bottom: 8px solid #009639;">
                <h2 style="color: #333; margin-bottom: 20px;">🏆 Quiz terminé !</h2>
                
                <div style="background-color: #e3211c; color: white; display: inline-block; padding: 20px 40px; border-radius: 15px; font-size: 4rem; font-weight: 900; margin-bottom: 15px; box-shadow: 0 6px 0 #b31a16;">
                    ${score} / ${DEPARTEMENTS.length}
                </div>

                <div style="background: #fbde4a; color: #333; padding: 8px 20px; border-radius: 50px; font-weight: bold; margin-bottom: 30px; display: inline-block;">
                    ${pourcentage}% de réussite
                </div>

                <div style="display: flex; gap: 15px; justify-content: center; margin-top: 20px;">
                    <button onclick="location.reload()" style="background: #009639; color: white; border: none; padding: 15px 25px; border-radius: 12px; font-weight: bold; cursor: pointer; flex: 1;">
                        🔁 Rejouer
                    </button>
                    <a href="../index.html" style="background: #ecf0f1; color: #333; border: none; padding: 15px 25px; border-radius: 12px; font-weight: bold; text-decoration: none; flex: 1; display: flex; align-items: center; justify-content: center;">
                        🏠 Accueil
                    </a>
                </div>
            </div>
        </div>
    `;
}

// =============================================
// ⏱️ TIMER
// =============================================

function demarrerTimer() {
    timer = setInterval(() => {
        if (!jeuActif) return;
        
        tempsRestant--;
        tempsEl.textContent = tempsRestant;
        
        if (tempsRestant <= 10) {
            tempsEl.parentElement.style.backgroundColor = '#f44336';
        }
        
        if (tempsRestant <= 0) {
            jeuActif = false;
            clearInterval(timer);
            finDuJeu();
        }
    }, 1000);
}

// =============================================
// 🔄 RECOMMENCER
// =============================================

function recommencer() {
    score = 0;
    questionActuelle = 0;
    tempsRestant = 60;
    jeuActif = true;
    
    scoreEl.textContent = "0";
    tempsEl.textContent = "60";
    tempsEl.parentElement.style.backgroundColor = '#e3211c';
    
    melangerDepartements();
    nouvelleQuestion();
    
    clearInterval(timer);
    demarrerTimer();
}

// =============================================
// 🚀 DÉMARRAGE
// =============================================

window.addEventListener('load', () => {
    totalQuestionsEl.textContent = DEPARTEMENTS.length;
    melangerDepartements();
    nouvelleQuestion();
    demarrerTimer();
    
    // Gestion du son
    if (modeSonCheckbox) {
        modeSonCheckbox.addEventListener('change', (e) => {
            sonActive = e.target.checked;
        });
    }
    
    // Boutons
    btnRecommencer.addEventListener('click', recommencer);
    btnSuivant.addEventListener('click', questionSuivante);
});