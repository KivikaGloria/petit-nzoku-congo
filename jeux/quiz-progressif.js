// =============================================
// 📈 QUIZ PROGRESSIF - à charger APRÈS quiz.js et quiz-nouvelles-questions.js
// Démarrage direct, manches de 5 questions : Facile > Moyen > Difficile
// Le score continue d'une manche à l'autre.
// =============================================

// Niveau de chaque question, dans l'ordre du tableau TOUTES_LES_QUESTIONS
// (1 = facile, 2 = moyen, 3 = difficile). Une nouvelle question ajoutée
// à la fin du tableau sans niveau ici sera considérée "moyen".
const NIVEAUX_QUESTIONS = [
    1,1,1,3,2,2,3,3,2,3,   // questions 1 à 10
    2,3,3,3,3,1,2,3,1,2,   // 11 à 20
    2,2,2,1,1,2,1,3,2,1,   // 21 à 30
    1,1,2,3,1,1,2,2,2,2,   // 31 à 40
    2,3                    // 41 à 42
];
const NOMS_NIVEAUX = { 1: '🌱 Facile', 2: '🌿 Moyen', 3: '🌳 Difficile' };
const PAR_MANCHE = 5;
const CLE_VUES_PROG = 'nzoku_quiz_vues_prog';

function niveauDe(q) {
    const i = TOUTES_LES_QUESTIONS.findIndex(x => x.question === q.question);
    const original = TOUTES_LES_QUESTIONS[i];
    return (original && original.niveau) || NIVEAUX_QUESTIONS[i] || 2;
}

// --- Mémoire des questions déjà vues (pas de répétition d'une partie à l'autre) ---
function lireVuesProg() {
    try { return JSON.parse(localStorage.getItem(CLE_VUES_PROG)) || []; } catch (e) { return []; }
}

function marquerVueProg(q) {
    try {
        let vues = lireVuesProg();
        if (!vues.includes(q.question)) vues.push(q.question);
        // Quand tout un niveau a été vu, on le remet à zéro
        const pool = TOUTES_LES_QUESTIONS.filter(x => niveauDe(x) === niveauDe(q)).map(x => x.question);
        if (pool.every(t => vues.includes(t))) vues = vues.filter(t => !pool.includes(t));
        localStorage.setItem(CLE_VUES_PROG, JSON.stringify(vues));
    } catch (e) {}
}

function melangerTab(tab) {
    const t = [...tab];
    for (let i = t.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [t[i], t[j]] = [t[j], t[i]];
    }
    return t;
}

// Mélange l'ordre des réponses (la bonne réponse n'est plus toujours la 1re)
function melangerReponses(q) {
    const ordre = melangerTab(q.options.map((_, i) => i));
    return { ...q,
        options: ordre.map(i => q.options[i]),
        pictos: q.pictos ? ordre.map(i => q.pictos[i]) : q.pictos,
        correct: ordre.indexOf(q.correct) };
}

// 5 questions faciles, puis 5 moyennes, puis 5 difficiles
function selectionnerQuestions() {
    const vues = lireVuesProg();
    let partie = [];
    [1, 2, 3].forEach(niv => {
        const pool = TOUTES_LES_QUESTIONS.filter(q => niveauDe(q) === niv);
        let choix = melangerTab(pool.filter(q => !vues.includes(q.question))).slice(0, PAR_MANCHE);
        if (choix.length < PAR_MANCHE) { // pas assez de nouvelles : on complète
            const autres = melangerTab(pool.filter(q => !choix.includes(q)));
            choix = choix.concat(autres.slice(0, PAR_MANCHE - choix.length));
        }
        partie = partie.concat(choix.map(melangerReponses));
    });
    return partie;
}

// --- Affichage du niveau en cours ---
function majNiveau() {
    const q = questions[questionActuelle];
    let badge = document.getElementById('badge-niveau');
    if (!badge) {
        badge = document.createElement('div');
        badge.id = 'badge-niveau';
        badge.className = 'badge';
        badge.style.marginBottom = '15px';
        questionEl.parentNode.insertBefore(badge, questionEl);
    }
    badge.textContent = NOMS_NIVEAUX[niveauDe(q)];
    marquerVueProg(q);
}

// --- Écran entre deux manches ---
function afficherPalier() {
    const fini = niveauDe(questions[questionActuelle]);
    questionEl.textContent = `🎉 ${NOMS_NIVEAUX[fini]} terminé ! Score : ${score} / ${questionActuelle + 1}`;
    reponsesEl.innerHTML = '';
    feedbackEl.style.display = 'none';
    btnSuivant.style.display = 'none';

    const btnContinuer = document.createElement('button');
    btnContinuer.className = 'btn-reponse';
    btnContinuer.textContent = `➡️ Continuer : niveau ${NOMS_NIVEAUX[fini + 1]}`;
    btnContinuer.addEventListener('click', () => {
        questionActuelle++;
        afficherQuestion();
        majNiveau();
    });

    const btnArreter = document.createElement('button');
    btnArreter.className = 'btn-reponse';
    btnArreter.textContent = '🏁 Terminer et voir mon score';
    btnArreter.addEventListener('click', () => {
        questions = questions.slice(0, questionActuelle + 1);
        afficherResultats();
    });

    reponsesEl.appendChild(btnContinuer);
    reponsesEl.appendChild(btnArreter);
    window.scrollTo(0, 0);
}

function questionSuivante() {
    if (questionActuelle >= questions.length - 1) {
        afficherResultats();
    } else if ((questionActuelle + 1) % PAR_MANCHE === 0) {
        afficherPalier();
    } else {
        questionActuelle++;
        afficherQuestion();
        majNiveau();
    }
}

// --- Démarrage direct : plus de choix de niveau ---
function initQuiz() {
    initSons();
    questions = selectionnerQuestions();
    questionActuelle = 0;
    score = 0;

    mettreAJourScore();
    totalQuestionsEls.forEach(el => { if (el) el.textContent = questions.length; });

    const choixNiveau = document.getElementById('selection-niveau');
    if (choixNiveau) choixNiveau.style.display = 'none';
    const zone = document.getElementById('zone-quiz');
    if (zone) { zone.classList.remove('hidden'); zone.style.display = 'block'; }
    const choixNb = document.querySelector('.choix-nb-questions');
    if (choixNb) choixNb.remove();

    afficherQuestion();
    majNiveau();
}

// --- Aide au diagnostic : si quiz.js n'a pas pu se charger ---
if (typeof TOUTES_LES_QUESTIONS === 'undefined') {
    var titre = document.getElementById('question');
    if (titre) titre.textContent = "⚠️ quiz.js ne s'est pas chargé correctement (fichier absent du dossier jeux/ ou erreur dedans).";
}