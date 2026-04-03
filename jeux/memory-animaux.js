// --- CONFIGURATION DES NIVEAUX ---
const TOUS_LES_ANIMAUX = [
    { nom: "Éléphant", emoji: "🐘" }, { nom: "Gorille", emoji: "🦍" },
    { nom: "Pangolin", emoji: "🦔" }, { nom: "Chimpanzé", emoji: "🐒" },
    { nom: "Buffle", emoji: "🐃" }, { nom: "Perroquet", emoji: "🦜" },
    { nom: "Léopard", emoji: "🐆" }, { nom: "Crocodile", emoji: "🐊" }
];

let niveauActuel = 1;
let cartes = [];
let cartesRetournees = [];
let cartesTrouvees = [];
let coups = 0;
let peutJouer = true;

const gridEl = document.getElementById('memory-grid');
const niveauEl = document.getElementById('niveau-display'); // À ajouter dans ton HTML

function initJeu() {
    // Déterminer le nombre de paires selon le niveau (Niveau 1 = 2 paires, Niv 2 = 4, etc.)
    const nbPaires = niveauActuel * 2; 
    const selectionAnimaux = TOUS_LES_ANIMAUX.slice(0, nbPaires);
    
    let nouvellesCartes = [];
    selectionAnimaux.forEach((animal, index) => {
        const carteData = { id: index, emoji: animal.emoji, nom: animal.nom };
        nouvellesCartes.push({...carteData}, {...carteData});
    });

    cartes = nouvellesCartes.sort(() => Math.random() - 0.5);
    cartesRetournees = [];
    cartesTrouvees = [];
    coups = 0;
    peutJouer = true;

    if(niveauEl) niveauEl.textContent = `Niveau ${niveauActuel} / 4`;
    document.getElementById('coups').textContent = coups;
    
    // Ajuster la grille selon le nombre de cartes
    gridEl.style.gridTemplateColumns = niveauActuel === 1 ? "repeat(2, 1fr)" : "repeat(4, 1fr)";
    
    afficherCartes();
}

function afficherCartes() {
    gridEl.innerHTML = '';
    cartes.forEach((carte, index) => {
        const div = document.createElement('div');
        div.className = `carte ${cartesTrouvees.includes(index) ? 'trouvee' : ''} ${cartesRetournees.includes(index) ? 'retournee' : ''}`;
        
        // Contenu de la carte
        if (cartesTrouvees.includes(index) || cartesRetournees.includes(index)) {
            div.textContent = carte.emoji;
        } else {
            div.textContent = '❓';
        }

        div.onclick = () => cliquerCarte(index);
        gridEl.appendChild(div);
    });
}

function cliquerCarte(index) {
    if (!peutJouer || cartesTrouvees.includes(index) || cartesRetournees.includes(index)) return;

    cartesRetournees.push(index);
    afficherCartes();

    if (cartesRetournees.length === 2) {
        coups++;
        document.getElementById('coups').textContent = coups;
        peutJouer = false;

        const [i1, i2] = cartesRetournees;

        if (cartes[i1].id === cartes[i2].id) {
            cartesTrouvees.push(i1, i2);
            cartesRetournees = [];
            peutJouer = true;
            
            if (cartesTrouvees.length === cartes.length) {
                setTimeout(passerAuNiveauSuivant, 600);
            } else {
                afficherCartes();
            }
        } else {
            setTimeout(() => {
                cartesRetournees = [];
                peutJouer = true;
                afficherCartes();
            }, 1000);
        }
    }
}

function passerAuNiveauSuivant() {
    if (niveauActuel < 4) {
        alert(`🌟 Super ! Niveau ${niveauActuel} terminé en ${coups} coups !`);
        niveauActuel++;
        initJeu();
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
                <div class="grand-score">4/4</div>
                <p>Tu as terminé les 4 niveaux avec succès !</p>
                <button onclick="location.reload()" class="bouton-action principal">🔁 Recommencer tout</button>
            </div>
        </div>`;
}

window.addEventListener('load', initJeu);