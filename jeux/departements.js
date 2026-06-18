// =============================================
// 🗺️ BANQUE DE QUESTIONS
// =============================================
const QUESTIONS_DEPARTEMENTS = [
    {
        question: "Combien de départements compte la République du Congo aujourd'hui ?",
        options: ["12 départements", "10 départements", "15 départements", "16 départements"],
        correct: 2,
        explication: "Le Congo compte désormais 15 départements ! Les 3 nouveaux sont le Congo-Oubangui, le Djoué-Léfini et le Nkéni-Alima.\nSuperficie : 342 000 km²\nPopulation : plus de 6 millions d'habitants",
        image: "", 
        pictos: ["1️⃣2️⃣", "1️⃣0️⃣", "1️⃣5️⃣", "1️⃣6️⃣"]
    },
    {
        question: "Quel est le chef-lieu du département du Niari ?",
        options: ["Dolisie", "Sibiti", "Madingou", "Kinkala"],
        correct: 0,
        explication: "Chef-lieu : Dolisie\nSuperficie : 25 942 km²\nPopulation : environ 335 000 habitants",
        image: "", 
        pictos: ["🏙️", "🏡", "🏘️", "🧱"]
    },
    {
        question: "Quel est le chef-lieu du département de la Sangha ?",
        options: ["Ouesso", "Impfondo", "Owando", "Ewo"],
        correct: 0,
        explication: "Chef-lieu : Ouesso\nSuperficie : 55 800 km²\nPopulation : environ 115 000 habitants",
        image: "", 
        pictos: ["🪵", "🐆", "🌲", "🛶"]
    },
    {
        question: "Quel est le chef-lieu du département du Pool ?",
        options: ["Kinkala", "Mindouli", "Kindamba", "Kalamu"],
        correct: 0,
        explication: "Chef-lieu : Kinkala\nSuperficie : 33 955 km²\nPopulation : environ 330 000 habitants",
        image: "", 
        pictos: ["🏡", "🌾", "🧱", "🗺️"]
    },
    {
        question: "Quel est le chef-lieu du département de la Bouenza ?",
        options: ["Sibiti", "Madingou", "Owando", "Nkayi"],
        correct: 1,
        explication: "Chef-lieu : Madingou\nSuperficie : 12 265 km²\nPopulation : environ 440 000 habitants",
        image: "", 
        pictos: ["🏢", "🏛️", "🏠", "🚜"]
    },
    {
        question: "Quel est le chef-lieu du département de la Cuvette ?",
        options: ["Oyo", "Owando", "Makoua", "Mossaka"],
        correct: 1,
        explication: "Chef-lieu : Owando\nSuperficie : 48 250 km²\nPopulation : environ 230 000 habitants",
        image: "", 
        pictos: ["🛶", "🌊", "🐟", "🐊"]
    },
    {
        question: "Quel est le chef-lieu du département du Kouilou ?",
        options: ["Pointe-Noire", "Loango", "Diosso", "Madingo-Kayes"],
        correct: 1,
        explication: "Chef-lieu : Loango\nSuperficie : 13 650 km²\nPopulation : près de 120 000 habitants",
        image: "", 
        pictos: ["🚢", "👑", "🌊", "🏖️"]
    },
    {
        question: "Quel est le chef-lieu du département de la Likouala ?",
        options: ["La Sangha", "Impfondo", "La Cuvette", "Le Congo-Oubangui"],
        correct: 1,
        explication: "Chef-lieu : Impfondo\nSuperficie : 66 044 km²\nPopulation : environ 220 000 habitants",
        image: "", 
        pictos: ["🧭", "🛶", "🐊", "🌲"]
    },
    {
        question: "Quel est le chef-lieu du département de la Lékoumou ?",
        options: ["Sibiti", "Djambala", "Ewo", "Oyo"],
        correct: 0,
        explication: "Chef-lieu : Sibiti\nSuperficie : 20 950 km²\nPopulation : environ 125 000 habitants",
        image: "", 
        pictos: ["🏡", "🌳", "🪵", "🌿"]
    },
    {
        question: "Quel est le chef-lieu du département des Plateaux ?",
        options: ["Gamboma", "Ngo", "Djambala", "Lékana"],
        correct: 2,
        explication: "Chef-lieu : Djambala\nSuperficie : 38 400 km²\nPopulation : environ 290 000 habitants",
        image: "", 
        pictos: ["🌾", "🏘️", "🏡", "🥔"]
    },
    {
        question: "Quel est le chef-lieu du département de la Cuvette-Ouest ?",
        options: ["Ewo", "Kéllé", "Etoumbi", "Okoyo"],
        correct: 0,
        explication: "Chef-lieu : Ewo\nSuperficie : 26 600 km²\nPopulation : environ 105 000 habitants",
        image: "", 
        pictos: ["🐆", "🛶", "🌳", "🪵"]
    }
];

// =============================================
// 🎮 LOGIQUE INTERNE DU JEU
// =============================================

let questions_du_jeu = [];
let indexQuestion = 0;
let score = 0;
let modePicto = false;
let sonActive = true;
const sons = { correct: null, incorrect: null, bravo: null };

// Variables du Chronomètre Global
let chrono; 
let tempsRestant = 60; 

// Éléments DOM
const questionEl = document.getElementById('question');
const reponsesEl = document.getElementById('reponses');
const feedbackEl = document.getElementById('feedback');
const feedbackMessage = document.getElementById('feedback-message');
const explicationEl = document.getElementById('explication');
const btnSuivant = document.getElementById('btn-suivant');
const scoreEl = document.getElementById('score');
const etoilesEl = document.getElementById('etoiles');
const questionActuelleEl = document.getElementById('question-actuelle');
const totalQuestionsEls = document.querySelectorAll('#total-questions, #total-questions2');
const imageQuestion = document.getElementById('image-question');
const modePictoCheckbox = document.getElementById('mode-picto');
const modeSonCheckbox = document.getElementById('mode-son');
const btnLire = document.getElementById('btn-lire');
const tempsEl = document.getElementById('temps');
const chronoConteneur = document.getElementById('chrono-conteneur'); 

function initSons() {
    try {
        sons.correct = new Audio('../sons/correct.mp3');
        sons.incorrect = new Audio('../sons/incorrect.mp3');
        sons.bravo = new Audio('../sons/bravo.mp3');
    } catch (e) {
        console.log("Audio non chargé.");
    }
}

function jouerSon(type) {
    if (!sonActive) return;
    if (sons[type]) {
        sons[type].currentTime = 0;
        sons[type].play().catch(e => console.log("Erreur audio :", e));
    }
}

function selectionnerQuestions(nbQuestions = 5) {
    let stock = [...QUESTIONS_DEPARTEMENTS];
    for (let i = stock.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [stock[i], stock[j]] = [stock[j], stock[i]];
    }
    return stock.slice(0, Math.min(nbQuestions, stock.length));
}

function lancerChronoGlobal() {
    clearInterval(chrono); 
    tempsRestant = 60; 
    if (tempsEl) tempsEl.textContent = tempsRestant;
    
    if (chronoConteneur) chronoConteneur.classList.remove('alerte-rouge');
    if (tempsEl) tempsEl.style.color = ''; 

    chrono = setInterval(() => {
        tempsRestant--;
        if (tempsEl) tempsEl.textContent = tempsRestant;

        if (tempsRestant <= 10 && tempsEl) {
            tempsEl.style.color = 'red';
        }

        if (tempsRestant <= 0) {
            clearInterval(chrono);
            gererTempsEcouleGlobal();
        }
    }, 1000);
}

function gererTempsEcouleGlobal() {
    const tousLesBoutons = document.querySelectorAll('.btn-reponse');
    tousLesBoutons.forEach(btn => btn.disabled = true);
    afficherResultatsFinaux(true);
}

function initialiserJeu(nb = 5) {
    questions_du_jeu = selectionnerQuestions(nb);
    indexQuestion = 0;
    score = 0;
    
    if (scoreEl) scoreEl.textContent = "0";
    if (totalQuestionsEls) {
        totalQuestionsEls.forEach(el => el.textContent = questions_du_jeu.length);
    }
    
    mettreAJourEtoiles();
    chargerQuestion();
    lancerChronoGlobal(); 
}

function chargerQuestion() {
    if (feedbackEl) feedbackEl.style.display = 'none';
    if (btnSuivant) btnSuivant.style.display = 'none';
    
    if (questions_du_jeu.length === 0) return;
    
    let qActuelle = questions_du_jeu[indexQuestion];
    
    if (questionActuelleEl) questionActuelleEl.textContent = indexQuestion + 1;
    if (questionEl) questionEl.textContent = qActuelle.question;
    
    if (imageQuestion) {
        if (qActuelle.image) {
            imageQuestion.src = qActuelle.image;
            imageQuestion.style.display = 'inline-block';
        } else {
            imageQuestion.style.display = 'none';
        }
    }
    
    if (reponsesEl) {
        reponsesEl.innerHTML = '';
        qActuelle.options.forEach((option, i) => {
            const btn = document.createElement('button');
            btn.className = 'btn-reponse';
            
            let prefixe = (modePicto && qActuelle.pictos && qActuelle.pictos[i]) ? `<span class="picto">${qActuelle.pictos[i]}</span> ` : '';
            btn.innerHTML = `${prefixe}${option}`;
            
            btn.addEventListener('click', () => validerChoix(i, btn));
            reponsesEl.appendChild(btn);
        });
    }
}

function validerChoix(indexChoisi, boutonClique) {
    const qActuelle = questions_du_jeu[indexQuestion];
    const tousLesBoutons = document.querySelectorAll('.btn-reponse');
    
    tousLesBoutons.forEach(btn => btn.disabled = true);
    
    if (indexChoisi === qActuelle.correct) {
        score++;
        if (scoreEl) scoreEl.textContent = score;
        if (boutonClique) boutonClique.classList.add('correct');
        if (feedbackMessage) feedbackMessage.innerHTML = `<span class="feedback-badge bonne">🎉 Correct !</span>`;
        jouerSon('correct');
    } else {
        if (boutonClique) boutonClique.classList.add('incorrect');
        
        if (tousLesBoutons[qActuelle.correct]) {
            tousLesBoutons[qActuelle.correct].classList.add('correct');
        }
        
        if (feedbackMessage) feedbackMessage.innerHTML = `<span class="feedback-badge mauvaise">❌ Oups !</span>`;
        jouerSon('incorrect');
    }
    
    if (explicationEl) explicationEl.textContent = qActuelle.explication;
    if (feedbackEl) feedbackEl.style.display = 'block';
    if (btnSuivant) btnSuivant.style.display = 'block';
    mettreAJourEtoiles();

    // ⬇️ SCROLL AUTO : L'écran descend sur l'explication et le bouton "Suivant"
    if (feedbackEl) {
        feedbackEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function mettreAJourEtoiles() {
    if (!etoilesEl) return;
    let etoilesGenerees = '';
    for (let i = 0; i < questions_du_jeu.length; i++) {
        etoilesGenerees += (i < score) ? '⭐' : '☆';
    }
    etoilesEl.textContent = etoilesGenerees;
}

function lireQuestionVocalement() {
    if ('speechSynthesis' in window && questions_du_jeu[indexQuestion]) {
        window.speechSynthesis.cancel();
        const texte = questions_du_jeu[indexQuestion].question;
        const énoncé = new SpeechSynthesisUtterance(texte);
        énoncé.lang = 'fr-FR';
        window.speechSynthesis.speak(énoncé);
    }
}

function afficherResultatsFinaux(parTempsEcoule = false) {
    clearInterval(chrono); 
    jouerSon('bravo');
    const conteneurPrincipal = document.querySelector('.quiz-container');
    if (!conteneurPrincipal) return;
    
    const ratio = score / questions_du_jeu.length;
    let messageFin = "Félicitations ! Continue d'explorer le quiz pour devenir incollable ! 🗺️";
    
    if (parTempsEcoule) {
        messageFin = "⏱️ Pas de chance ! Le temps global de 60 secondes est écoulé !";
    } else if (ratio === 1) {
        messageFin = "🏆 Parfait ! Les 15 départements n'ont plus aucun secret pour toi ! Champion !";
    } else if (ratio >= 0.6) {
        messageFin = "👏 Très bon score ! Ta connaissance de notre géographie est superbe !";
    }

    conteneurPrincipal.innerHTML = `
        <div class="resultats">
            <h2>🗺️ ${parTempsEcoule ? 'Temps Épuisé !' : 'Exploration Terminée !'}</h2>
            <p>Ton score final pour cette session :</p>
            <span class="grand-score">${score} / ${questions_du_jeu.length}</span>
            <div class="message-resultat">${messageFin}</div>
            <button class="bouton" onclick="location.reload()">🔁 Recommencer</button>
        </div>
    `;
    
    conteneurPrincipal.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

if (btnSuivant) {
    btnSuivant.addEventListener('click', () => {
        if (tempsRestant <= 0) {
            afficherResultatsFinaux(true);
            return;
        }

        indexQuestion++;
        if (indexQuestion < questions_du_jeu.length) {
            chargerQuestion();
            
            // ⬆️ SCROLL AUTO : L'écran remonte tout en haut pour la nouvelle question
            const conteneurQuiz = document.querySelector('.quiz-container');
            if (conteneurQuiz) {
                conteneurQuiz.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            afficherResultatsFinaux(false);
        }
    });
}

if (modePictoCheckbox) {
    modePictoCheckbox.addEventListener('change', (e) => {
        modePicto = e.target.checked;
        chargerQuestion();
    });
}

if (modeSonCheckbox) {
    modeSonCheckbox.addEventListener('change', (e) => { sonActive = e.target.checked; });
}

if (btnLire) {
    btnLire.addEventListener('click', lireQuestionVocalement);
}

document.querySelectorAll('.btn-nb').forEach(bouton => {
    bouton.addEventListener('click', (e) => {
        document.querySelectorAll('.btn-nb').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        initialiserJeu(parseInt(e.target.dataset.nb));
    });
});

window.addEventListener('DOMContentLoaded', () => {
    initSons();
    initialiserJeu(5);
});