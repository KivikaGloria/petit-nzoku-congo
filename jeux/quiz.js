// =============================================
// 🇨🇬 QUIZ DU CONGO-BRAZZAVILLE - Petit Nzoku
// Tout est dans CE fichier : questions + logique du jeu.
// niveau : 1 = facile, 2 = moyen, 3 = difficile
// Pour ajouter une question : copie un bloc { ... } et mets-le avant la dernière ligne "];" du tableau
// =============================================

const TOUTES_LES_QUESTIONS = [
    { niveau: 1, question: "Quel est l'animal symbole du Congo-Brazzaville ?", options: ["L'éléphant", "Le lion", "Le léopard", "Le gorille"], correct: 0,
      explication: "L'éléphant (Nzoku) est l'animal emblématique du Congo ! C'est pour ça que notre jeu s'appelle Petit Nzoku 🐘", image: "elephant.jpg", pictos: ["🐘", "🦁", "🐆", "🦍"] },
    { niveau: 1, question: "Quelle est la capitale de la République du Congo ?", options: ["Pointe-Noire", "Brazzaville", "Dolisie", "Ouesso"], correct: 1,
      explication: "Brazzaville est la capitale politique. Pointe-Noire est la capitale économique.", image: "brazzaville.jpg", pictos: ["🏖️", "🏛️", "🏘️", "🌲"] },
    { niveau: 1, question: "Quel grand fleuve traverse Brazzaville ?", options: ["Le Niger", "Le Congo", "Le Nil", "Le Zambèze"], correct: 1,
      explication: "Le fleuve Congo est le deuxième plus long fleuve d'Afrique (4700 km) et le plus profond du monde !", image: "fleuve.jpg", pictos: ["🌊", "🌊", "🌊", "🌊"] },
    { niveau: 3, question: "Combien de départements compte la République du Congo ?", options: ["8", "10", "15", "14"], correct: 2,
      explication: "La République du Congo compte 15 départements depuis la réforme de 2024 : Brazzaville, Pointe-Noire, Bouenza, Congo-Oubangui, Cuvette, Cuvette-Ouest, Djoué-Léfini, Kouilou, Lékoumou, Likouala, Niari, Nkéni-Alima, Plateaux, Pool, Sangha.", image: "departement c.jpg", pictos: ["8️⃣", "1️⃣0️⃣", "1️⃣5️⃣", "1️⃣4️⃣"] },
    { niveau: 2, question: "Comment surnomme-t-on Pointe-Noire ?", options: ["La ville océane", "La perle du Pool", "La capitale du Niari", "La cité du rail"], correct: 0,
      explication: "Pointe-Noire est surnommée 'La ville océane' car elle est située au bord de l'océan Atlantique.", image: "pointenoire.jpg", pictos: ["🌊", "🏙️", "🌆", "🏖️"] },

    { niveau: 2, question: "En quelle année la République du Congo a-t-elle obtenu son indépendance ?", options: ["1958", "1960", "1962", "1965"], correct: 1,
      explication: "Le Congo est devenu indépendant le 15 août 1960. Ce jour est la fête nationale !", image: "independance.jpg", pictos: ["1️⃣9️⃣5️⃣8️⃣", "1️⃣9️⃣6️⃣0️⃣", "1️⃣9️⃣6️⃣2️⃣", "1️⃣9️⃣6️⃣5️⃣"] },
    { niveau: 3, question: "Qui a été le premier président du Congo indépendant ?", options: ["Fulbert Youlou", "Marien Ngouabi", "Pascal Lissouba", "Denis Sassou Nguesso"], correct: 0,
      explication: "Fulbert Youlou a été le premier président de 1960 à 1963. C'était aussi un prêtre catholique !", image: "FulbertYoulou.jpeg", pictos: ["👨‍💼", "👨‍✈️", "👨‍🎓", "👨‍⚕️"] },
    { niveau: 3, question: "Qui a dirigé le Congo de 1969 à 1977 ?", options: ["Fulbert Youlou", "Marien Ngouabi", "Joachim Yhombi-Opango", "Denis Sassou Nguesso"], correct: 1,
      explication: "Marien Ngouabi a proclamé la République populaire du Congo en 1969. L'université de Brazzaville porte son nom.", image: "MarienNgouabi.jpg", pictos: ["👨‍✈️", "👨‍🎓", "👨‍💼", "👨‍⚖️"] },
    { niveau: 2, question: "Quand célèbre-t-on la fête nationale au Congo ?", options: ["30 juin", "15 août", "14 juillet", "1er mai"], correct: 1,
      explication: "Le 15 août est notre fête nationale, jour de l'indépendance en 1960.", image: "fetenationale.jpg", pictos: ["📅", "🎉", "🇨🇬", "🎊"] },
    { niveau: 3, question: "Quelle est la devise de la République du Congo ?", options: ["Unité, Travail, Progrès", "Liberté, Égalité, Fraternité", "Justice, Paix, Travail", "Dieu, Patrie, Famille"], correct: 0,
      explication: "La devise du Congo est 'Unité, Travail, Progrès'. On la trouve sur les armoiries nationales.", image: "devise.jpg", pictos: ["🤝", "🔨", "📈", "🇨🇬"] },

    { niveau: 2, question: "Quel style de musique, né sur les deux rives du fleuve Congo, est célèbre dans toute l'Afrique ?", options: ["La rumba congolaise", "Le coupé-décalé", "Le kuduro", "L'afrobeat"], correct: 0,
      explication: "La rumba congolaise, née à Brazzaville et à Kinshasa, est inscrite au patrimoine culturel immatériel de l'humanité par l'UNESCO depuis 2021.", image: "sekous.jpg", pictos: ["💃", "🕺", "🎵", "🎶"] },
    { niveau: 3, question: "Quel est le groupe mythique des années 60-70 au Congo ?", options: ["Les Bantous de la capitale", "OK Jazz", "Zaïko Langa-Langa", "Wenge Musica"], correct: 0,
      explication: "Les Bantous de la capitale sont le premier grand orchestre congolais, fondé en 1959 à Brazzaville !", image: "sekous.jpg", pictos: ["🎸", "🥁", "🎺", "🎤"] },
    { niveau: 3, question: "Comment s'appelle ce tambour traditionnel congolais ?", options: ["Le tam-tam", "Le lokole", "La sanza", "Le balafon"], correct: 1,
      explication: "Le lokole est un tambour en bois utilisé pour communiquer sur de longues distances et pour la musique traditionnelle.", image: "lokole.jpeg", pictos: ["🥁", "📯", "🎹", "🎸"] },
    { niveau: 3, question: "Quel chanteur congolais est connu pour « Ancien combattant » ?", options: ["Zao", "Tchico", "Les Bantous de la capitale", "Pamelo Mounk'a"], correct: 0,
      explication: "Zao, de son vrai nom Casimir Zoba, est un chanteur et percussionniste congolais. 'Ancien combattant' est l'une de ses chansons les plus célèbres !", image: "zao.jpg", pictos: ["👨‍🎤", "🎤", "🥁", "🎵"] },
    { niveau: 3, question: "Quel grand festival a lieu tous les deux ans à Brazzaville ?", options: ["FESPAM", "FESPACO", "FEMUA", "FIMU"], correct: 0,
      explication: "Le FESPAM (Festival Panafricain de Musique) a lieu à Brazzaville et attire des artistes de tout le continent !", image: "fespam.jpg", pictos: ["🎪", "🎭", "🎨", "🌍"] },

    { niveau: 1, question: "Quel est un plat traditionnel congolais ?", options: ["Le saka-saka", "Le thiéboudienne", "L'attiéké", "Le jollof"], correct: 0,
      explication: "Le saka-saka (feuilles de manioc pilées) est un plat très apprécié, souvent accompagné de poisson ou de viande.", image: "sakasaka.jpg", pictos: ["🍲", "🍛", "🍚", "🍜"] },
    { niveau: 2, question: "Comment appelle-t-on la pâte de manioc au Congo ?", options: ["Le foufou", "La chikwangue", "L'attiéké", "Le gari"], correct: 1,
      explication: "La chikwangue (ou kwanga) est une pâte de manioc fermentée, enveloppée dans des feuilles et cuite à la vapeur.", image: "manioc.jpg", pictos: ["🍞", "🥖", "🍠", "🌽"] },
    { niveau: 3, question: "Quel poisson est très consommé au Congo ?", options: ["Le chinchard", "La carpe", "Le tilapia", "Le mbenga"], correct: 0,
      explication: "Le chinchard est très prisé pour sa chair tendre : on le mange frit, sauté ou braisé.", image: "chinchard.jpg", pictos: ["🐟", "🐠", "🐡", "🎣"] },
    { niveau: 1, question: "Quel fruit est très cultivé au Congo ?", options: ["La mangue", "La pomme", "La poire", "La cerise"], correct: 0,
      explication: "La mangue est un fruit très populaire au Congo. On en trouve de nombreuses variétés délicieuses !", image: "mangue.jpg", pictos: ["🥭", "🍎", "🍐", "🍒"] },
    { niveau: 2, question: "Quelle est la boisson traditionnelle fermentée au Congo ?", options: ["Le vin de palme", "La bière", "Le jus d'orange", "Le thé"], correct: 0,
      explication: "Le vin de palme (ou malafu) est une boisson traditionnelle obtenue par fermentation de la sève de palmier.", image: "vinpalme.jpg", pictos: ["🥥", "🍺", "🧃", "☕"] },

    { niveau: 2, question: "Quel est le parc national le plus célèbre du Congo ?", options: ["Odzala-Kokoua", "Virunga", "Niokolo-Koba", "Taï"], correct: 0,
      explication: "Le parc national d'Odzala-Kokoua, créé en 1935, est l'un des plus anciens parcs d'Afrique centrale et un trésor de biodiversité !", image: "ozala.jpg", pictos: ["🏞️", "🌳", "🦍", "🐘"] },
    { niveau: 2, question: "Quelle espèce de gorille vit au Congo ?", options: ["Gorille des plaines de l'Ouest", "Gorille des montagnes", "Gorille de l'Est", "Gorille de Cross River"], correct: 0,
      explication: "Le parc d'Odzala abrite des gorilles des plaines de l'Ouest, une espèce menacée qu'il faut protéger.", image: "gorille.jpg", pictos: ["🦍", "🦧", "🐒", "🙈"] },
    { niveau: 2, question: "Quel grand arbre trouve-t-on dans la forêt congolaise ?", options: ["Le fromager", "Le baobab", "L'acacia", "L'eucalyptus"], correct: 0,
      explication: "Le fromager peut atteindre 60 mètres de haut ! Son bois léger sert à fabriquer des pirogues.", image: "fromager.jpeg", pictos: ["🌳", "🌲", "🌴", "🌵"] },
    { niveau: 1, question: "Comment s'appelle la grande forêt du Congo ?", options: ["Forêt du Bassin du Congo", "Forêt amazonienne", "Forêt de Taï", "Forêt du Mayombe"], correct: 0,
      explication: "La forêt du Bassin du Congo est la deuxième plus grande forêt tropicale du monde après l'Amazonie !", image: "foret.jpg", pictos: ["🌳", "🌍", "💚", "🌲"] },
    { niveau: 1, question: "Quel animal est menacé d'extinction au Congo ?", options: ["Le pangolin", "Le rat", "La souris", "Le chacal"], correct: 0,
      explication: "Le pangolin est l'animal le plus braconné au monde. Il est protégé au Congo car il est en danger.", image: "pangolin.jpg", pictos: ["🦔", "🐭", "🐀", "🐺"] },

    { niveau: 2, question: "Quelles sont les deux langues nationales du Congo ?", options: ["Lingala et kituba", "Français et lingala", "Lari et lingala", "Français et téké"], correct: 0,
      explication: "Le lingala (parlé dans le nord) et le kituba (parlé dans le sud) sont les deux langues nationales. Le français est la langue officielle.", image: "Langue.jpeg", pictos: ["🗣️", "🇨🇬", "📚", "🎓"] },
    { niveau: 1, question: "Comment dit-on 'Bonjour' en lingala ?", options: ["Mbote", "Sango", "Kwele", "Molo"], correct: 0,
      explication: "En lingala, on dit 'Mbote' pour dire bonjour. On peut aussi dire 'Mbote na yo' (bonjour à toi).", image: "Langue.jpeg", pictos: ["👋", "🗣️", "🇨🇬", "☀️"] },
    { niveau: 1, question: "Quelle est la langue officielle de la République du Congo ?", options: ["Le français", "L'anglais", "Le portugais", "L'arabe"], correct: 0,
      explication: "Le français est la langue officielle. Le lingala et le kituba sont les deux langues nationales.", image: "Langue.jpeg", pictos: ["🇫🇷", "🇬🇧", "🇵🇹", "🌙"] },
    { niveau: 2, question: "Comment appelle-t-on l'art de bien s'habiller au Congo ?", options: ["La sapologie", "La mode", "Le stylisme", "La couture"], correct: 0,
      explication: "La sapologie est un mouvement culturel et esthétique né au Congo. Les 'sapeurs' sont célèbres pour leur élégance et leurs tenues colorées !", image: "sapeur.jpg", pictos: ["🕴️", "👔", "👖", "👞"] },
    { niveau: 1, question: "Comment appelle-t-on le tissu africain très porté au Congo ?", options: ["Le pagne", "Le velours", "Le bogolan", "Le kente"], correct: 0,
      explication: "Le pagne (ou wax) est un tissu coloré très populaire. Les femmes en font de magnifiques tenues.", image: "pagne.jpeg", pictos: ["🧵", "🪡", "👗", "👚"] }
];

// =============================================
// ➕ NOUVELLES QUESTIONS (à charger APRÈS quiz.js)
// Pas de champ "image" : ajoute-le quand tu auras la photo dans images/quiz/
// =============================================

TOUTES_LES_QUESTIONS.push(
    {
        niveau: 1,
        question: "Quelles sont les couleurs du drapeau de la République du Congo ?",
        options: ["Vert, jaune, rouge", "Bleu, blanc, rouge", "Noir, jaune, rouge", "Vert, blanc, noir"],
        correct: 0,
        explication: "Notre drapeau est vert, jaune et rouge, des couleurs panafricaines placées en diagonale.",
        pictos: ["🟢🟡🔴", "🔵⚪🔴", "⚫🟡🔴", "🟢⚪⚫"]
    },
    {
        niveau: 1,
        question: "Quelle grande ville se trouve juste en face de Brazzaville, de l'autre côté du fleuve ?",
        options: ["Kinshasa", "Libreville", "Luanda", "Bangui"],
        correct: 0,
        explication: "Brazzaville et Kinshasa, séparées par le fleuve Congo, sont deux des capitales les plus proches du monde.",
        pictos: ["🌉", "🏙️", "🌆", "🏘️"]
    },
    {
        niveau: 2,
        question: "Quelle ligne imaginaire traverse le nord du Congo ?",
        options: ["L'équateur", "Le tropique du Cancer", "Le méridien de Greenwich", "Le cercle polaire"],
        correct: 0,
        explication: "L'équateur traverse le Congo : le nord du pays est dans l'hémisphère nord, Brazzaville est dans l'hémisphère sud.",
        pictos: ["🌍", "☀️", "🧭", "❄️"]
    },
    {
        niveau: 3,
        question: "Quel parc du nord du Congo, classé à l'UNESCO, abrite des gorilles et des éléphants de forêt ?",
        options: ["Nouabalé-Ndoki", "Conkouati-Douli", "Virunga", "Serengeti"],
        correct: 0,
        explication: "Le parc national de Nouabalé-Ndoki fait partie du site Sangha Trinational, inscrit au patrimoine mondial de l'UNESCO.",
        pictos: ["🌳", "🏖️", "🌋", "🦁"]
    },
    {
        niveau: 1,
        question: "Dans la légende congolaise, quelle créature mystérieuse vivrait près du lac Télé ?",
        options: ["Le mokélé-mbembé", "Le yéti", "Le monstre du Loch Ness", "Le kraken"],
        correct: 0,
        explication: "Le mokélé-mbembé est une créature légendaire de la région du lac Télé. Personne n'a jamais prouvé qu'il existe !",
        pictos: ["🦕", "❄️", "🏴󠁧󠁢󠁳󠁣󠁴󠁿", "🐙"]
    },
    {
        niveau: 1,
        question: "Quel est le plus grand animal terrestre de la forêt congolaise ?",
        options: ["L'éléphant de forêt", "Le lion", "Le rhinocéros blanc", "La girafe"],
        correct: 0,
        explication: "L'éléphant de forêt transporte des graines dans ses crottes : il aide la forêt à repousser. Il est menacé par le braconnage.",
        pictos: ["🐘", "🦁", "🦏", "🦒"]
    },
    {
        niveau: 2,
        question: "Quel chemin de fer relie Brazzaville à Pointe-Noire ?",
        options: ["Le Congo-Océan", "Le Transgabonais", "Le Transsibérien", "L'Orient-Express"],
        correct: 0,
        explication: "Le chemin de fer Congo-Océan (CFCO), construit entre 1921 et 1934, relie la capitale au grand port de Pointe-Noire.",
        pictos: ["🚆", "🚂", "🚄", "🚃"]
    },
    {
        niveau: 2,
        question: "Quel explorateur a donné son nom à Brazzaville ?",
        options: ["Pierre Savorgnan de Brazza", "David Livingstone", "Henry Morton Stanley", "Christophe Colomb"],
        correct: 0,
        explication: "Pierre Savorgnan de Brazza explora la région et rencontra le roi Makoko des Tékés en 1880. La ville porte son nom.",
        pictos: ["🧭", "🗺️", "⛵", "🚢"]
    },
    {
        niveau: 2,
        question: "Quel plat est préparé avec une sauce à base de noix de palme ?",
        options: ["Le poulet moambé", "Le couscous", "Le tajine", "La pizza"],
        correct: 0,
        explication: "Le moambé est une sauce de noix de palme, souvent servie avec du poulet ou du poisson et de la chikwangue.",
        pictos: ["🍗", "🍚", "🥘", "🍕"]
    },
    {
        niveau: 2,
        question: "Quel petit fruit violet, qu'on ramollit dans l'eau chaude avant de le manger, est très aimé au Congo ?",
        options: ["Le safou", "La banane", "Le citron", "La fraise"],
        correct: 0,
        explication: "Le safou, ou prune africaine, se mange cuit, souvent avec du pain ou du maïs.",
        pictos: ["🍇", "🍌", "🍋", "🍓"]
    },
    {
        niveau: 2,
        question: "Comment dit-on « Merci » en lingala ?",
        options: ["Matondi", "Bolingo", "Mbote", "Malamu"],
        correct: 0,
        explication: "Matondi veut dire merci. « Bolingo » veut dire amour, et « malamu » veut dire bien.",
        pictos: ["🙏", "❤️", "👋", "👍"]
    },
    {
        niveau: 3,
        question: "Quel monument de Brazzaville est célèbre pour son toit de tuiles vertes ?",
        options: ["La basilique Sainte-Anne-du-Congo", "La tour Nabemba", "Le stade Massamba-Débat", "Le Mémorial de Brazza"],
        correct: 0,
        explication: "La basilique Sainte-Anne-du-Congo, construite dans les années 1940, se reconnaît à son toit vert brillant.",
        pictos: ["⛪", "🏢", "🏟️", "🏛️"]
    }
);

// =============================================
// ➕ 11 QUESTIONS DE PLUS (à charger après quiz-nouvelles-questions.js)
// Ici chaque question porte son niveau : niveau 1 = facile, 2 = moyen, 3 = difficile
// =============================================

TOUTES_LES_QUESTIONS.push(
    {
        niveau: 1,
        question: "Comment s'appelle le petit éléphant, mascotte de ce jeu ?",
        options: ["Petit Nzoku", "Petit Simba", "Petit Babar", "Petit Dumbo"],
        correct: 0,
        explication: "Petit Nzoku ! « Nzoku » veut dire éléphant, l'animal symbole du Congo.",
        pictos: ["🐘", "🦁", "🐘", "🐘"]
    },
    {
        niveau: 1,
        question: "Quel animal de la forêt a un « dos argenté » quand il est adulte ?",
        options: ["Le gorille", "Le lion", "Le zèbre", "Le crocodile"],
        correct: 0,
        explication: "Le gorille mâle adulte a le dos couvert de poils gris-argent. On l'appelle le « dos argenté ».",
        pictos: ["🦍", "🦁", "🦓", "🐊"]
    },
    {
        niveau: 1,
        question: "Quel océan borde la République du Congo ?",
        options: ["L'océan Atlantique", "L'océan Indien", "L'océan Pacifique", "La mer Rouge"],
        correct: 0,
        explication: "Le Congo a environ 170 km de côte sur l'océan Atlantique, autour de Pointe-Noire.",
        pictos: ["🌊", "🏝️", "🚢", "🔴"]
    },
    {
        niveau: 1,
        question: "Quelle plante donne la chikwangue et le saka-saka ?",
        options: ["Le manioc", "Le blé", "Le riz", "La pomme de terre"],
        correct: 0,
        explication: "La racine du manioc sert à faire la chikwangue, et ses feuilles pilées donnent le saka-saka.",
        pictos: ["🌿", "🌾", "🍚", "🥔"]
    },
    {
        niveau: 1,
        question: "Comment appelle-t-on la période de l'année où il pleut très peu au Congo ?",
        options: ["La saison sèche", "La saison des neiges", "L'hiver polaire", "L'automne"],
        correct: 0,
        explication: "Dans le sud du pays, la saison sèche dure environ de juin à septembre. Le reste de l'année, c'est la saison des pluies.",
        pictos: ["☀️", "❄️", "🧊", "🍂"]
    },
    {
        niveau: 2,
        question: "Comment appelle-t-on les habitants de Brazzaville ?",
        options: ["Les Brazzavillois", "Les Brazzaviens", "Les Brazzois", "Les Brazzaliens"],
        correct: 0,
        explication: "Les habitants de Brazzaville sont les Brazzavillois, et ceux de Pointe-Noire sont les Ponténégrins.",
        pictos: ["🏙️", "👨‍👩‍👧", "🧑‍🤝‍🧑", "🏘️"]
    },
    {
        niveau: 2,
        question: "Quel instrument à lamelles de métal se joue avec les pouces ?",
        options: ["La sanza", "Le piano", "Le violon", "La trompette"],
        correct: 0,
        explication: "La sanza (ou mbira) est un instrument africain : on pince ses lamelles avec les deux pouces.",
        pictos: ["🎶", "🎹", "🎻", "🎺"]
    },
    {
        niveau: 2,
        question: "Pourquoi dit-on que la forêt du Bassin du Congo est un « poumon de la planète » ?",
        options: ["Ses arbres absorbent beaucoup de CO₂ et produisent de l'oxygène", "Elle est très chaude", "Elle est près de l'eau", "Elle est très bruyante"],
        correct: 0,
        explication: "Les arbres captent le dioxyde de carbone, ce qui aide à limiter le réchauffement de la planète. Il faut protéger la forêt !",
        pictos: ["🌳", "🌡️", "💧", "🔊"]
    },
    {
        niveau: 2,
        question: "Quel animal marin doux, surnommé « vache de mer », vit près des côtes et des rivières du Congo ?",
        options: ["Le lamantin", "Le requin blanc", "Le pingouin", "Le phoque"],
        correct: 0,
        explication: "Le lamantin est un mammifère marin qui mange des plantes aquatiques. Il est menacé, comme beaucoup d'animaux.",
        pictos: ["🌊", "🦈", "🐧", "🦭"]
    },
    {
        niveau: 3,
        question: "Que veut dire « SAPE », le mouvement des sapeurs ?",
        options: ["Société des Ambianceurs et des Personnes Élégantes", "Société des Artistes et des Poètes Engagés", "Société des Amis du Pagne Éclatant", "Société des Ambassadeurs de la Paix Éternelle"],
        correct: 0,
        explication: "SAPE veut dire Société des Ambianceurs et des Personnes Élégantes. Les sapeurs sont connus pour leur élégance.",
        pictos: ["🕴️", "🎨", "👗", "🕊️"]
    },
    {
        niveau: 3,
        question: "Quel quartier de Brazzaville est célèbre pour son école de peinture, créée en 1951 ?",
        options: ["Poto-Poto", "Bacongo", "Talangaï", "Makélékélé"],
        correct: 0,
        explication: "L'École de peinture de Poto-Poto a fait connaître de nombreux artistes congolais.",
        pictos: ["🎨", "🏘️", "🏙️", "🌆"]
    }
);


// =============================================
// 🎮 LOGIQUE DU JEU
// Démarrage direct : 5 questions faciles, puis 5 moyennes, puis 5 difficiles.
// Le score continue d'une manche à l'autre. Les questions déjà vues
// ne reviennent pas tant qu'il en reste de nouvelles.
// =============================================

const PAR_MANCHE = 5;
const NOMS_NIVEAUX = { 1: '🌱 Facile', 2: '🌿 Moyen', 3: '🌳 Difficile' };
const CLE_VUES = 'nzoku_quiz_vues';

let questions = [];
let questionActuelle = 0;
let score = 0;
let modePicto = false;
let sonActive = true;
let enPalier = false;

const $ = (id) => document.getElementById(id);
const niv = (q) => q.niveau || 2;

// ---------- 🎵 Sons ----------
const sons = {};
function initSons() {
    ['correct', 'incorrect', 'bravo'].forEach((nom) => {
        try {
            const a = new Audio('../sons/' + nom + '.mp3');
            a.onerror = () => { sons[nom] = new Audio('../sons/' + nom + '.wav'); };
            sons[nom] = a;
        } catch (e) { /* pas de son, ce n'est pas grave */ }
    });
}
function jouerSon(type) {
    if (sonActive && sons[type]) sons[type].play().catch(() => {});
}

// ---------- 🎲 Choix des questions ----------
function lireVues() {
    try { return JSON.parse(localStorage.getItem(CLE_VUES)) || []; } catch (e) { return []; }
}
function marquerVue(q) {
    try {
        let vues = lireVues();
        if (!vues.includes(q.question)) vues.push(q.question);
        const pool = TOUTES_LES_QUESTIONS.filter((x) => niv(x) === niv(q)).map((x) => x.question);
        if (pool.every((t) => vues.includes(t))) vues = vues.filter((t) => !pool.includes(t));
        localStorage.setItem(CLE_VUES, JSON.stringify(vues));
    } catch (e) { /* stockage indisponible */ }
}
function melanger(tab) {
    const t = [...tab];
    for (let i = t.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [t[i], t[j]] = [t[j], t[i]];
    }
    return t;
}
// Mélange aussi l'ordre des réponses (la bonne réponse change de place)
function melangerReponses(q) {
    const ordre = melanger(q.options.map((_, i) => i));
    return Object.assign({}, q, {
        options: ordre.map((i) => q.options[i]),
        pictos: q.pictos ? ordre.map((i) => q.pictos[i]) : q.pictos,
        correct: ordre.indexOf(q.correct)
    });
}
function selectionnerQuestions() {
    const vues = lireVues();
    let partie = [];
    [1, 2, 3].forEach((n) => {
        const pool = TOUTES_LES_QUESTIONS.filter((q) => niv(q) === n);
        let choix = melanger(pool.filter((q) => !vues.includes(q.question))).slice(0, PAR_MANCHE);
        if (choix.length < PAR_MANCHE) {
            const autres = melanger(pool.filter((q) => !choix.includes(q)));
            choix = choix.concat(autres.slice(0, PAR_MANCHE - choix.length));
        }
        partie = partie.concat(choix.map(melangerReponses));
    });
    return partie;
}

// ---------- 🎨 Affichage ----------
function majNiveau() {
    const q = questions[questionActuelle];
    let badge = $('badge-niveau');
    if (!badge) {
        badge = document.createElement('div');
        badge.id = 'badge-niveau';
        badge.className = 'badge';
        badge.style.marginBottom = '15px';
        $('question').parentNode.insertBefore(badge, $('question'));
    }
    badge.textContent = NOMS_NIVEAUX[niv(q)];
}

function afficherQuestion() {
    enPalier = false;
    window.scrollTo(0, 0);
    const q = questions[questionActuelle];
    $('question-actuelle').textContent = questionActuelle + 1;
    $('question').textContent = q.question;
    $('image-question').style.display = 'none';

    const zone = $('reponses');
    zone.innerHTML = '';
    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'btn-reponse';
        if (modePicto && q.pictos && q.pictos[index]) {
            btn.innerHTML = '<span class="picto">' + q.pictos[index] + '</span> ' + option;
        } else {
            btn.textContent = option;
        }
        btn.addEventListener('click', () => verifierReponse(index));
        zone.appendChild(btn);
    });

    $('feedback').style.display = 'none';
    $('btn-suivant').style.display = 'none';
    majNiveau();
    marquerVue(q);
}

function verifierReponse(index) {
    const q = questions[questionActuelle];
    const boutons = document.querySelectorAll('#reponses .btn-reponse');
    boutons.forEach((b) => { b.disabled = true; });
    boutons[q.correct].classList.add('correct');

    const bonne = index === q.correct;
    if (bonne) {
        score++;
        jouerSon('correct');
    } else {
        boutons[index].classList.add('incorrect');
        jouerSon('incorrect');
    }

    const image = q.image
        ? '<div class="feedback-image-container"><img src="../images/quiz/' + q.image +
          '" alt="" class="feedback-image" onerror="this.style.display=\'none\'"></div>'
        : '';
    const fb = $('feedback');
    fb.innerHTML =
        '<div class="feedback-content">' +
        '<div class="feedback-badge ' + (bonne ? 'bonne' : 'mauvaise') + '">' +
        (bonne ? '✓ Bonne réponse' : '✗ Mauvaise réponse') + '</div>' +
        image +
        '<div class="feedback-explication"><p class="explication-texte">' + q.explication + '</p></div>' +
        '</div>';
    fb.style.display = 'block';
    fb.scrollIntoView({ behavior: 'smooth', block: 'start' });

    const suivant = $('btn-suivant');
    if (questionActuelle === questions.length - 1) suivant.textContent = 'Voir les résultats';
    else if ((questionActuelle + 1) % PAR_MANCHE === 0) suivant.textContent = 'Continuer';
    else suivant.textContent = 'Question suivante';
    suivant.style.display = 'block';

    mettreAJourScore();
}

function afficherPalier() {
    enPalier = true;
    const fini = niv(questions[questionActuelle]);
    $('question').textContent = '🎉 ' + NOMS_NIVEAUX[fini] + ' terminé ! Score : ' + score + ' / ' + (questionActuelle + 1);
    $('feedback').style.display = 'none';
    $('btn-suivant').style.display = 'none';

    const zone = $('reponses');
    zone.innerHTML = '';

    const continuer = document.createElement('button');
    continuer.className = 'btn-reponse';
    continuer.textContent = '➡️ Continuer : niveau ' + NOMS_NIVEAUX[fini + 1];
    continuer.addEventListener('click', () => { questionActuelle++; afficherQuestion(); });

    const arreter = document.createElement('button');
    arreter.className = 'btn-reponse';
    arreter.textContent = '🏁 Terminer et voir mon score';
    arreter.addEventListener('click', () => {
        questions = questions.slice(0, questionActuelle + 1);
        afficherResultats();
    });

    zone.appendChild(continuer);
    zone.appendChild(arreter);
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
    }
}

function mettreAJourScore() {
    $('score').textContent = score;
    $('etoiles').innerHTML = '<span style="color: #f1c40f;">⭐</span> ' + score + ' / ' + questions.length;
}

// ---------- 🏆 Résultats ----------
function getMessageFelicitations(s, total) {
    const p = (s / total) * 100;
    const nom = 'Petit Nzoku';
    if (p === 100) return '🌟 WAOUH ' + nom + ' ! Tu es incollable ! Tu connais le Congo mieux que personne ! 🌟';
    if (p >= 80) return '👏 BRAVO ' + nom + ' ! Tu es un vrai champion de la culture congolaise !';
    if (p >= 60) return '👍 Bien joué ' + nom + ' ! Continue comme ça, tu progresses !';
    if (p >= 40) return '📚 ' + nom + ', tu as fait de ton mieux ! Réessaie pour apprendre plus !';
    return '💪 ' + nom + ', chaque erreur est une chance d\'apprendre. Le Congo a besoin de toi !';
}

function afficherResultats() {
    const total = questions.length;
    const container = document.querySelector('.quiz-container');
    container.innerHTML =
        '<div class="resultats" id="resultats-final">' +
        '<h2>🏆 Quiz terminé !</h2>' +
        '<div class="grand-score">' + score + '/' + total + '</div>' +
        '<p class="message-resultat">' + getMessageFelicitations(score, total) + '</p>' +
        '<div class="drapeau" style="margin: 20px 0;"><span class="vert"></span><span class="jaune"></span><span class="rouge"></span></div>' +
        '<button id="btn-rejouer" class="bouton" type="button">🔁 Rejouer</button> ' +
        '<a href="../index.html" class="bouton">🏠 Accueil</a>' +
        '</div>';
    $('btn-rejouer').addEventListener('click', () => window.location.reload());
    jouerSon('bravo');
    $('resultats-final').scrollIntoView({ behavior: 'smooth' });
}

// ---------- 🔊 Lecture à voix haute ----------
function lireQuestion() {
    if (!('speechSynthesis' in window)) {
        alert("La synthèse vocale n'est pas supportée par ton navigateur.");
        return;
    }
    const q = questions[questionActuelle];
    window.speechSynthesis.cancel(); // évite la double lecture
    const u = new SpeechSynthesisUtterance(q.question + '. ' + q.options.join('. '));
    u.lang = 'fr-FR';
    u.rate = 0.9;
    u.pitch = 1.2;
    window.speechSynthesis.speak(u);
}

// ---------- 🚀 Démarrage ----------
function demarrer() {
    initSons();
    questions = selectionnerQuestions();
    questionActuelle = 0;
    score = 0;
    document.querySelectorAll('#total-questions, #total-questions2').forEach((el) => { el.textContent = questions.length; });
    mettreAJourScore();
    afficherQuestion();
}

document.addEventListener('DOMContentLoaded', () => {
    $('mode-picto').addEventListener('change', (e) => {
        modePicto = e.target.checked;
        if (!enPalier) afficherQuestion();
    });
    $('mode-son').addEventListener('change', (e) => { sonActive = e.target.checked; });
    $('btn-lire').addEventListener('click', lireQuestion);
    $('btn-suivant').addEventListener('click', questionSuivante);
    demarrer();
});
