// =============================================
// 🇨🇬 30 QUESTIONS SUR LE CONGO-BRAZZAVILLE
// =============================================

const TOUTES_LES_QUESTIONS = [ 
    // ====================================
    // 🌍 GÉOGRAPHIE & TERRITOIRE (1-5)
    // ====================================
    {
        question: "Quel est l'animal symbole du Congo-Brazzaville ?",
        options: ["L'éléphant", "Le lion", "Le léopard", "Le gorille"],
        correct: 0,
        explication: "L'éléphant (Nzoku) est l'animal emblématique du Congo ! C'est pour ça que notre jeu s'appelle Petit Nzoku 🐘",
        image: "elephant.jpg",
        pictos: ["🐘", "🦁", "🐆", "🦍"]
    },
    {
        question: "Quelle est la capitale de la République du Congo ?",
        options: ["Pointe-Noire", "Brazzaville", "Dolisie", "Ouesso"],
        correct: 1,
        explication: "Brazzaville est la capitale politique. Pointe-Noire est la capitale économique.",
        image: "brazzaville.jpg",
        pictos: ["🏖️", "🏛️", "🏘️", "🌲"]
    },
    {
        question: "Quel grand fleuve traverse Brazzaville ?",
        options: ["Le Niger", "Le Congo", "Le Nil", "Le Zambèze"],
        correct: 1,
        explication: "Le fleuve Congo est le deuxième plus long fleuve d'Afrique (4700 km) et le plus profond du monde !",
        image: "fleuve.jpg",
        pictos: ["🌊", "🌊", "🌊", "🌊"]
    },
    {
        question: "Combien de départements compte la République du Congo ?",
        options: ["8", "10", "15", "14"],
        correct: 2,
        explication: "La République Congo compte 15 départements depuis la réforme de 2024 : Brazzaville, Pointe-Noire, Bouenza, Congo-Oubangui, Cuvette, Cuvette-Ouest, Djoué-Léfini, Kouilou, Lékoumou, Likouala, Niari, Nkéni-Alima, Plateaux, Pool, Sangha.",
        image: "departement c.jpg",
        pictos: ["8️⃣", "1️⃣0️⃣", "1️⃣5️⃣", "1️⃣4️⃣"]
    },
    {
        question: "Comment surnomme-t-on Pointe-Noire ?",
        options: ["La ville océane", "La perle du Pool", "La capitale du Niari", "La cité du rail"],
        correct: 0,
        explication: "Pointe-Noire est surnommée 'La ville océane' car elle est située au bord de l'océan Atlantique.",
        image: "pointenoire.jpg",
        pictos: ["🌊", "🏙️", "🌆", "🏖️"]
    },
    // ====================================
    // 🏛️ HISTOIRE & POLITIQUE (6-10)
    // ====================================
    {
        question: "En quelle année la République Congo a-t-il obtenu son indépendance ?",
        options: ["1958", "1960", "1962", "1965"],
        correct: 1,
        explication: "Le Congo est devenu indépendant le 15 août 1960. Ce jour est la fête nationale !",
        image: "independance.jpg",
        pictos: ["1️⃣9️⃣5️⃣8️⃣", "1️⃣9️⃣6️⃣0️⃣", "1️⃣9️⃣6️⃣2️⃣", "1️⃣9️⃣6️⃣5️⃣"]
    },
    {
        question: "Qui a été le premier président du Congo indépendant ?",
        options: ["Fulbert Youlou", "Marien Ngouabi", "Pascal Lissouba", "Denis Sassou Nguesso"],
        correct: 0,
        explication: "Fulbert Youlou a été le premier président de 1960 à 1963. C'était aussi un prêtre catholique !",
        image: "FulbertYoulou.jpeg",
        pictos: ["👨‍💼", "👨‍✈️", "👨‍🎓", "👨‍⚕️"]
    },
    {
        question: "Qui a dirigé le Congo de 1969 à 1977 ?",
        options: ["Fulbert Youlou", "Marien Ngouabi", "Joachim Yhombi-Opango", "Denis Sassou Nguesso"],
        correct: 1,
        explication: "Marien Ngouabi a proclamé la République populaire du Congo en 1969. L'université de Brazzaville porte son nom.",
        image: "MarienNgouabi.jpg",
        pictos: ["👨‍✈️", "👨‍🎓", "👨‍💼", "👨‍⚖️"]
    },
    {
        question: "Quand célèbre-t-on la fête nationale au Congo ?",
        options: ["30 juin", "15 août", "14 juillet", "1er mai"],
        correct: 1,
        explication: "Le 15 août est notre fête nationale, jour de l'indépendance en 1960.",
        image: "fetenationale.jpg",
        pictos: ["📅", "🎉", "🇨🇬", "🎊"]
    },
    {
        question: "Quelle est la devise de la République du Congo ?",
        options: ["Unité, Travail, Progrès", "Liberté, Égalité, Fraternité", "Justice, Paix, Travail", "Dieu, Patrie, Famille"],
        correct: 0,
        explication: "La devise du Congo est 'Unité, Travail, Progrès'. On la trouve sur les armoiries nationales.",
        image: "devise.jpg",
        pictos: ["🤝", "🔨", "📈", "🇨🇬"]
    },
    // ====================================
    // 🎵 CULTURE & MUSIQUE (11-15)
    // ====================================
    {
        question: "Quelle danse est célèbre au Congo-Brazzaville ?",
        options: ["Le soukous", "Le ndombolo", "Le kuduro", "Le coupé-décalé"],
        correct: 0,
        explication: "Le soukous (ou rumba congolaise) est connu dans toute l'Afrique ! Des artistes comme Papa Wemba ou Koffi Olomidé l'ont rendu célèbre.",
        image: "sekous.jpg",
        pictos: ["💃", "🕺", "🎵", "🎶"]
    },
    {
        question: "Quel est le groupe mythique des années 60-70 au Congo ?",
        options: ["Les Bantous de la capitale", "OK Jazz", "Zaïko Langa-Langa", "Wenge Musica"],
        correct: 0,
        explication: "Les Bantous de la capitale sont le premier grand orchestre congolais, fondé en 1959 à Brazzaville !",
        image: "sekous.jpg",
        pictos: ["🎸", "🥁", "🎺", "🎤"]
    },
    {
        question: "Comment s'appelle ce tambour traditionnel congolais ?",
        options: ["Le tam-tam", "Le lokole", "La sanza", "Le balafon"],
        correct: 1,
        explication: "Le lokole est un tambour en bois utilisé pour communiquer sur de longues distances et pour la musique traditionnelle.",
        image: "lokole.jpeg",
        pictos: ["🥁", "📯", "🎹", "🎸"]
    },
    {
        question: "Quel singer congolais est connu pour 'Ancien combattant' ?",
        options: ["Zao", "Tchico", "Les Bantous de la capitale", "Pamelo Mounk'a"],
        correct: 0,
        explication: "Zao, de son vrai nom Casimir Zoba, est un chanteur et percussionniste congolais. 'Ancien combattant' est l'une de ses chansons les plus célèbres !",
        image: "zao.jpg",
        pictos: ["👨‍🎤", "🎤", "🥁", "🎵"]
    },
    {
        question: "Quel grand festival a lieu tous les deux ans à Brazzaville ?",
        options: ["FESPAM", "FESPACO", "FEMUA", "FIMU"],
        correct: 0,
        explication: "Le FESPAM (Festival Panafricain de Musique) a lieu à Brazzaville et attire des artistes de tout le continent !",
        image: "fespam.jpg",
        pictos: ["🎪", "🎭", "🎨", "🌍"]
    },
    // ====================================
    // 🍲 GASTRONOMIE (16-20)
    // ====================================
    {
        question: "Quel est un plat traditionnel congolais ?",
        options: ["Le saka-saka", "Le thiéboudienne", "L'attiéké", "Le jollof"],
        correct: 0,
        explication: "Le saka-saka (feuilles de manioc pilées) est un plat très apprécié, souvent accompagné de poisson ou de viande.",
        image: "sakasaka.jpg",
        pictos: ["🍲", "🍛", "🍚", "🍜"]
    },
    {
        question: "Comment appelle-t-on la pâte de manioc au Congo ?",
        options: ["Le foufou", "La chikwangue", "L'attiéké", "Le gari"],
        correct: 1,
        explication: "La chikwangue (ou kwanga) est une pâte de manioc fermentée, enveloppée dans des feuilles et cuite à la vapeur.",
        image: "manioc.jpg",
        pictos: ["🍞", "🥖", "🍠", "🌽"]
    },
    {
        question: "Quel poisson est très consommé au Congo ?",
        options: ["Le Chinchard", "La carpe", "Le tilapia", "Le mbenga"],
        correct: 0,
        explication: "Le Chinchard (communément appelé Moseka) : Très prisé pour sa chair tendre, il est très consommé frit, sauté ou braisé.",
        image: "chinchard.jpg",
        pictos: ["🐟", "🐠", "🐡", "🎣"]
    },
    {
        question: "Quel fruit est très cultivé au Congo ?",
        options: ["La mangue", "La pomme", "La poire", "La cerise"],
        correct: 0,
        explication: "La mangue est un fruit très populaire au Congo. On en trouve de nombreuses variétés délicieuses !",
        image: "mangue.jpg",
        pictos: ["🥭", "🍎", "🍐", "🍒"]
    },
    {
        question: "Quelle est la boisson traditionnelle fermentée au Congo ?",
        options: ["Le vin de palme", "La bière", "Le jus d'orange", "Le thé"],
        correct: 0,
        explication: "Le vin de palme (ou malafu) est une boisson traditionnelle obtenue par fermentation de la sève de palmier.",
        image: "vinpalme.jpg",
        pictos: ["🥥", "🍺", "🧃", "☕"]
    },
    // ====================================
    // 🌳 NATURE & ENVIRONNEMENT (21-25)
    // ====================================
    {
        question: "Quel est le parc national le plus célèbre du Congo ?",
        options: ["Odzala-Kokoua", "Virunga", "Niokolo-Koba", "Taï"],
        correct: 0,
        explication: "Le parc national d'Odzala-Kokoua est un trésor de la biodiversité classé au patrimoine mondial de l'UNESCO !",
        image: "ozala.jpg",
        pictos: ["🏞️", "🌳", "🦍", "🐘"]
    },
    {
        question: "Quelle espèce de gorille vit au Congo ?",
        options: ["Gorille des plaines de l'Ouest", "Gorille des montagnes", "Gorille de l'Est", "Gorille de Cross River"],
        correct: 0,
        explication: "Le parc d'Odzala abrite des gorilles des plaines de l'Ouest, une espèce menacée qu'il faut protéger.",
        image: "gorille.jpg",
        pictos: ["🦍", "🦧", "🐒", "🙈"]
    },
    {
        question: "Quel grand arbre trouve-t-on dans la forêt congolaise ?",
        options: ["Le fromager", "Le baobab", "L'acacia", "L'eucalyptus"],
        correct: 0,
        explication: "Le fromager peut atteindre 60 mètres de haut ! Son bois léger sert à fabriquer des pirogues.",
        image: "fromager.jpeg",
        pictos: ["🌳", "🌲", "🌴", "🌵"]
    },
    {
        question: "Comment s'appelle la grande forêt du Congo ?",
        options: ["Forêt du Bassin du Congo", "Forêt amazonienne", "Forêt de Taï", "Forêt du Mayombe"],
        correct: 0,
        explication: "La forêt du Bassin du Congo est la deuxième plus grande forêt tropicale du monde après l'Amazonie !",
        image: "foret.jpg",
        pictos: ["🌳", "🌍", "💚", "🌲"]
    },
    {
        question: "Quel animal est menacé d'extinction au Congo ?",
        options: ["Le pangolin", "Le rat", "La souris", "Le chacal"],
        correct: 0,
        explication: "Le pangolin est l'animal le plus braconné au monde. Il est protégé au Congo car il est en danger.",
        image: "pangolin.jpg",
        pictos: ["🦔", "🐭", "🐀", "🐺"]
    },
    // ====================================
    // 🗣️ LANGUES & SOCIÉTÉ (26-30)
    // ====================================
    {
        question: "Quelles sont les deux langues nationales du Congo ?",
        options: ["Lingala et kituba", "Français et lingala", "lari et lingala", "Français et Téké"],
        correct: 0,
        explication: "Le lingala (parlé dans le nord) et le kituba (parlé dans le sud) sont les deux langues nationales. Le français est la langue officielle.",
        image: "Langue.jpeg",
        pictos: ["🗣️", "🇨🇬", "📚", "🎓"]
    },
    {
        question: "Comment dit-on 'Bonjour' en lingala ?",
        options: ["Mbote", "Sango", "Kwele", "Molo"],
        correct: 0,
        explication: "En lingala, on dit 'Mbote' pour dire bonjour. On peut aussi dire 'Mbote na yo' (bonjour à toi).",
        image: "Langue.jpeg",
        pictos: ["👋", "🗣️", "🇨🇬", "☀️"]
    },
    {
        question: "Comment dit-on 'Comment vas-tu ?' en kituba ?",
        options: ["Wafasso?", "Mbote?", "Boni?", "Malamu?"],
        correct: 0,
        explication: "En kituba, on demande 'Wafasso?' pour dire 'Comment ça va ?'. On répond 'Mu ke mbote' (Je vais bien).",
        image: "Langue.jpeg",
        pictos: ["❓", "👋", "🗣️", "👍"]
    },
    {
        question: "Comment appelle-t-on l'art de bien s'habiller au Congo ?",
        options: ["La sapologie", "La mode", "Le stylisme", "La couture"],
        correct: 0,
        explication: "La sapologie est un mouvement culturel et esthétique né au Congo. Les 'sapeurs' sont célèbres pour leur élégance et leurs tenues colorées !",
        image: "sapeur.jpg",
        pictos: ["🕴️", "👔", "👖", "👞"]
    },
    {
        question: "Comment appelle-t-on le tissu africain très porté au Congo ?",
        options: ["Le pagne", "Le wax", "Le bogolan", "Le kente"],
        correct: 0,
        explication: "Le pagne (ou wax) est un tissu coloré très populaire. Les femmes en font de magnifiques tenues.",
        image: "pagne.jpeg",
        pictos: ["🧵", "🪡", "👗", "👚"]
    }
];


// =============================================
// 🎮 LOGIQUE DU JEU (CORRIGÉE)
// =============================================

let questions = [];
let questionActuelle = 0;
let score = 0;
let modePicto = false;
let sonActive = true;

// Éléments DOM
const questionEl = document.getElementById('question');
const reponsesEl = document.getElementById('reponses');
const feedbackEl = document.getElementById('feedback');
const btnSuivant = document.getElementById('btn-suivant');
const scoreEl = document.getElementById('score');
const etoilesEl = document.getElementById('etoiles');
const questionActuelleEl = document.getElementById('question-actuelle');
const totalQuestionsEls = document.querySelectorAll('#total-questions, #total-questions2');
const imageQuestion = document.getElementById('image-question');
const modePictoCheckbox = document.getElementById('mode-picto');
const modeSonCheckbox = document.getElementById('mode-son');
const btnLire = document.getElementById('btn-lire');

const sons = { correct: null, incorrect: null, bravo: null };

// =============================================
// 🎵 FONCTIONS AUDIO (SÉCURISÉES)
// =============================================
function initSons() {
    try {
        sons.correct = new Audio('../sons/correct.mp3');
        sons.correct.onerror = () => { sons.correct = new Audio('../sons/correct.wav'); };
        
        sons.incorrect = new Audio('../sons/incorrect.mp3');
        sons.incorrect.onerror = () => { sons.incorrect = new Audio('../sons/incorrect.wav'); };
        
        sons.bravo = new Audio('../sons/bravo.mp3');
        sons.bravo.onerror = () => { sons.bravo = new Audio('../sons/bravo.wav'); };
    } catch (e) {
        console.log("Système audio non disponible :", e);
    }
}

function jouerSon(type) {
    if (!sonActive) return;
    if (sons[type]) {
        sons[type].play().catch(e => console.log("Lecture du son bloquée ou impossible:", e));
    }
}

// =============================================
// 🎲 MOTEUR DE SÉLECTION (MÉLANGE UNIQUE)
// =============================================
function selectionnerQuestions(nbQuestions = 10) {
    let stock = [...TOUTES_LES_QUESTIONS];

    // Mélange de Fisher-Yates
    for (let i = stock.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [stock[i], stock[j]] = [stock[j], stock[i]];
    }

    return stock.slice(0, nbQuestions);
}

// =============================================
// 🎨 AFFICHAGE & RENDU
// =============================================
function afficherQuestion() {
    window.scrollTo(0, 0); 
    
    const q = questions[questionActuelle];
    if (questionActuelleEl) questionActuelleEl.textContent = questionActuelle + 1;
    if (questionEl) questionEl.textContent = q.question;
    
    if (imageQuestion) imageQuestion.style.display = 'none';
    
    if (reponsesEl) {
        reponsesEl.innerHTML = '';
        q.options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = 'btn-reponse';
            
            if (modePicto && q.pictos && q.pictos[index]) {
                btn.innerHTML = `<span class="picto">${q.pictos[index]}</span> ${option}`;
            } else {
                btn.textContent = option;
            }
            
            btn.dataset.index = index;
            btn.addEventListener('click', () => verifierReponse(index));
            reponsesEl.appendChild(btn);
        });
    }
    
    if (feedbackEl) feedbackEl.style.display = 'none';
    
    if (btnSuivant) {
        btnSuivant.style.display = 'none';
        btnSuivant.textContent = 'Question suivante'; // 👈 Remis comme avant, sans la flèche !
    }
}
function verifierReponse(index) {
    const q = questions[questionActuelle];
    const boutons = document.querySelectorAll('.btn-reponse');
    
    boutons.forEach(btn => btn.disabled = true);
    boutons[q.correct].classList.add('correct');
    
    let feedbackHTML = '';
    let resultatClass = '';
    
    if (index === q.correct) {
        score++;
        resultatClass = 'bonne';
        jouerSon('correct');
    } else {
        boutons[index].classList.add('incorrect');
        resultatClass = 'mauvaise';
        jouerSon('incorrect');
    }
    
    if (q.image) {
        feedbackHTML = `
            <div class="feedback-image-container">
                <img src="../images/quiz/${q.image}" alt="${q.question}" class="feedback-image" onerror="this.style.display='none'">
            </div>
        `;
    }
    
    if (feedbackEl) {
        feedbackEl.innerHTML = `
            <div class="feedback-content">
                <div class="feedback-badge ${resultatClass}">
                    ${index === q.correct ? '✓ Bonne réponse' : '✗ Mauvaise réponse'}
                </div>
                ${feedbackHTML}
                <div class="feedback-explication">
                    <p class="explication-texte">${q.explication}</p>
                </div>
            </div>
        `;
        feedbackEl.style.display = 'block';
        feedbackEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    if (btnSuivant) {
        btnSuivant.style.display = 'block';
        if (questionActuelle === questions.length - 1) {
            btnSuivant.textContent = 'Voir les résultats';
        } else {
            btnSuivant.textContent = 'Question suivante'; // 👈 Remis à l'état d'origine ici aussi !
        }
    }
    
    mettreAJourScore();
}
function questionSuivante() {
    if (questionActuelle < questions.length - 1) {
        questionActuelle++;
        afficherQuestion();
    } else {
        afficherResultats();
    }
}

// =============================================
// 🏆 RÉSULTATS & RECOMPENSES
// =============================================
function getMessageFelicitations(score, total) {
    const pourcentage = (score / total) * 100;
    const nomEnfant = "Petit Nzoku";
    
    if (pourcentage === 100) {
        return `🌟 WAOUH ${nomEnfant} ! Tu es incollable ! Tu connais le Congo mieux que personne ! 🌟`;
    } else if (pourcentage >= 80) {
        return `👏 BRAVO ${nomEnfant} ! Tu es un vrai champion de la culture congolaise !`;
    } else if (pourcentage >= 60) {
        return `👍 Bien joué ${nomEnfant} ! Continue comme ça, tu progresses !`;
    } else if (pourcentage >= 40) {
        return `📚 ${nomEnfant}, tu as fait de ton mieux ! Réessaie pour apprendre plus !`;
    } else {
        return `💪 ${nomEnfant}, chaque erreur est une chance d'apprendre. Le Congo a besoin de toi !`;
    }
}

function afficherResultats() {
    const total = questions.length;
    let message = getMessageFelicitations(score, total);
    
    let prochainNiveau = total + 5;
    if (prochainNiveau > 30) prochainNiveau = 5;

    const container = document.querySelector('.quiz-container');
    if (container) {
        container.innerHTML = `
            <div class="resultats" id="resultats-final">
                <h2>🏆 Quiz terminé !</h2>
                <div class="grand-score">${score}/${total}</div>
                <p class="message-resultat">${message}</p>
                <div class="drapeau" style="margin: 20px 0;">
                    <span class="vert"></span>
                    <span class="jaune"></span>
                    <span class="rouge"></span>
                </div>
                <button onclick="window.location.search = '?n=' + ${prochainNiveau};" class="bouton">
                    🔁 Rejouer
                </button>
                <a href="../index.html" class="bouton">🏠 Accueil</a>
            </div>
        `;
        jouerSon('bravo');
        document.getElementById('resultats-final').scrollIntoView({ behavior: 'smooth' });
    }
}

function mettreAJourScore() {
    if (scoreEl) scoreEl.textContent = score;
    
    if (etoilesEl) {
        const total = questions.length;
        etoilesEl.innerHTML = `<span style="color: #f1c40f;">⭐</span> ${score} / ${total}`;
    }
}

// =============================================
// 🔊 SYNTHÈSE VOCALE
// =============================================
function lireQuestion() {
    if ('speechSynthesis' in window) {
        const q = questions[questionActuelle];
        const texte = q.question + ". " + q.options.join(". ");
        
        const utterance = new SpeechSynthesisUtterance(texte);
        utterance.lang = 'fr-FR';
        utterance.rate = 0.9;
        utterance.pitch = 1.2;
        window.speechSynthesis.speak(utterance);
    } else {
        alert("La synthèse vocale n'est pas supportée par ton navigateur.");
    }
}

// =============================================
// 🚀 INITIALISATION UNIQUE
// =============================================
function initQuiz() {
    initSons();
    
    const urlParams = new URLSearchParams(window.location.search);
    const niveauURL = urlParams.get('n');
    
    let nbACharger = niveauURL ? parseInt(niveauURL) : 10;
    
    if (isNaN(nbACharger) || nbACharger < 5) nbACharger = 5;
    if (nbACharger > 30) nbACharger = 30;
    
    questions = selectionnerQuestions(nbACharger);
    questionActuelle = 0;
    score = 0;
    
    mettreAJourScore();
    totalQuestionsEls.forEach(el => { if(el) el.textContent = nbACharger; });
    
    document.querySelectorAll('.btn-nb').forEach(btn => {
        if (parseInt(btn.dataset.nb) === nbACharger) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    afficherQuestion();
}

// --- UN SEUL BLOC D'ÉCOUTEURS D'ÉVÉNEMENTS (NETTOYÉ) ---
document.addEventListener('DOMContentLoaded', () => {
    // Boutons de changement de quantité (5, 10, 15...)
    document.querySelectorAll('.btn-nb').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const nouveauNb = e.target.dataset.nb;
            window.location.search = '?n=' + nouveauNb;
        });
    });

    if (modePictoCheckbox) {
        modePictoCheckbox.addEventListener('change', (e) => {
            modePicto = e.target.checked;
            afficherQuestion();
        });
    }

    if (modeSonCheckbox) {
        modeSonCheckbox.addEventListener('change', (e) => {
            sonActive = e.target.checked;
        });
    }

    if (btnLire) btnLire.addEventListener('click', lireQuestion);
    if (btnSuivant) btnSuivant.addEventListener('click', questionSuivante);

    // Lancement de l'initialisation une fois que le DOM est prêt
    initQuiz();
});
      
  
  


