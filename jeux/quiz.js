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
// ➕ 51 QUESTIONS DE PLUS (réponses piégeuses à chaque niveau)
// Les réponses sont mélangées automatiquement : "correct: 0" n'est donc pas un problème.
// =============================================

TOUTES_LES_QUESTIONS.push(
    // ---------- 🌱 FACILE ----------
    { niveau: 1, question: "Quel pays a colonisé le Congo-Brazzaville ?", options: ["La France", "La Belgique", "Le Portugal", "Le Royaume-Uni"], correct: 0,
      explication: "Notre pays était une colonie française, le Moyen-Congo. Le Congo voisin (aujourd'hui la RDC) était une colonie belge.", pictos: ["🇫🇷", "🇧🇪", "🇵🇹", "🇬🇧"] },
    { niveau: 1, question: "Quelle ville congolaise possède le grand port sur l'océan Atlantique ?", options: ["Pointe-Noire", "Dolisie", "Brazzaville", "Owando"], correct: 0,
      explication: "Les bateaux du monde entier s'arrêtent à Pointe-Noire, notre capitale économique.", pictos: ["⚓", "🏘️", "🏛️", "🌲"] },
    { niveau: 1, question: "Quel oiseau gris à la queue rouge, très doué pour imiter les voix, vit dans nos forêts ?", options: ["Le perroquet gris", "Le flamant rose", "Le toucan", "L'aigle"], correct: 0,
      explication: "Le perroquet gris est menacé, car on l'attrape pour le vendre. Le toucan, lui, vit en Amérique.", pictos: ["🦜", "🦩", "🐦", "🦅"] },
    { niveau: 1, question: "Quel énorme animal passe ses journées dans l'eau et mange de l'herbe la nuit ?", options: ["L'hippopotame", "Le rhinocéros", "Le zèbre", "La girafe"], correct: 0,
      explication: "L'hippopotame reste dans l'eau le jour pour se protéger du soleil, puis il broute la nuit.", pictos: ["🦛", "🦏", "🦓", "🦒"] },
    { niveau: 1, question: "Que veut dire « braconnage » ?", options: ["Chasser des animaux protégés, c'est interdit", "Planter des arbres", "Pêcher pour s'amuser", "Photographier les animaux"], correct: 0,
      explication: "Le braconnage met en danger les éléphants, les gorilles et les pangolins. Il est interdit par la loi.", pictos: ["🚫", "🌱", "🎣", "📷"] },
    { niveau: 1, question: "Quel geste protège le fleuve Congo ?", options: ["Ne jamais y jeter de déchets", "Y jeter les sacs en plastique", "Y verser de l'huile usagée", "Y laver des batteries"], correct: 0,
      explication: "Les déchets polluent l'eau et font du mal aux poissons. Jette toujours tes déchets à la poubelle !", pictos: ["♻️", "🛍️", "🛢️", "🔋"] },
    { niveau: 1, question: "Comment surnomme-t-on l'équipe nationale de football du Congo ?", options: ["Les Diables Rouges", "Les Lions Indomptables", "Les Éléphants", "Les Léopards"], correct: 0,
      explication: "Chez nous, ce sont les Diables Rouges. Lions Indomptables : Cameroun. Éléphants : Côte d'Ivoire. Léopards : RDC.", pictos: ["😈", "🦁", "🐘", "🐆"] },
    { niveau: 1, question: "Que veut dire « Nzoku » ?", options: ["Éléphant", "Lion", "Fleuve", "Soleil"], correct: 0,
      explication: "Nzoku veut dire éléphant. C'est pour ça que notre mascotte s'appelle Petit Nzoku !", pictos: ["🐘", "🦁", "🌊", "☀️"] },
    { niveau: 1, question: "Quel fruit sucré porte une couronne de feuilles piquantes ?", options: ["L'ananas", "La mangue", "La banane", "La papaye"], correct: 0,
      explication: "L'ananas pousse très bien dans le climat chaud et humide du Congo.", pictos: ["🍍", "🥭", "🍌", "🍈"] },
    { niveau: 1, question: "Quel fruit ressemble à une grosse banane mais se mange cuit ?", options: ["La banane plantain", "La pastèque", "La papaye", "Le raisin"], correct: 0,
      explication: "La banane plantain se mange bouillie, frite ou grillée, avec du poisson ou de la viande.", pictos: ["🍌", "🍉", "🍈", "🍇"] },
    { niveau: 1, question: "Quelle couleur est en haut à gauche du drapeau congolais ?", options: ["Le vert", "Le rouge", "Le jaune", "Le bleu"], correct: 0,
      explication: "Le vert est en haut près du mât, le jaune passe en diagonale au milieu et le rouge est en bas.", pictos: ["🟢", "🔴", "🟡", "🔵"] },
    { niveau: 1, question: "Quel est l'animal terrestre le plus lourd du monde ?", options: ["L'éléphant", "La girafe", "Le rhinocéros", "L'hippopotame"], correct: 0,
      explication: "L'éléphant peut peser plusieurs tonnes. La girafe est la plus haute, mais bien plus légère.", pictos: ["🐘", "🦒", "🦏", "🦛"] },
    { niveau: 1, question: "Que mange l'éléphant ?", options: ["Des plantes", "De la viande", "Des poissons", "Des insectes"], correct: 0,
      explication: "L'éléphant est herbivore : il mange de l'herbe, des feuilles, des fruits et de l'écorce, plus de 100 kg par jour !", pictos: ["🌿", "🍖", "🐟", "🐜"] },

    // ---------- 🌿 MOYEN ----------
    { niveau: 2, question: "Quel est le plus haut sommet du Congo ?", options: ["Le mont Nabemba", "Le Kilimandjaro", "Le mont Cameroun", "Le mont Kenya"], correct: 0,
      explication: "Le mont Nabemba (environ 1 020 m), dans le nord, est le point le plus haut du pays. Le Kilimandjaro est en Tanzanie." },
    { niveau: 2, question: "Dans quel hémisphère se trouve Brazzaville ?", options: ["L'hémisphère sud", "L'hémisphère nord", "Pile sur l'équateur", "Au pôle Sud"], correct: 0,
      explication: "Brazzaville est à environ 4° au sud de l'équateur. Seul le nord du Congo est dans l'hémisphère nord." },
    { niveau: 2, question: "Quelle monnaie utilise-t-on en République du Congo ?", options: ["Le franc CFA", "Le franc congolais", "Le dollar", "Le naira"], correct: 0,
      explication: "Nous utilisons le franc CFA d'Afrique centrale. Le franc congolais est la monnaie de la RDC, notre voisine." },
    { niveau: 2, question: "Comment s'appelait le Congo avant l'indépendance ?", options: ["Le Moyen-Congo", "Le Congo belge", "Le Haut-Congo", "Le Zaïre"], correct: 0,
      explication: "C'était le Moyen-Congo, colonie française. Le Congo belge et le Zaïre sont d'anciens noms de la RDC." },
    { niveau: 2, question: "Comment appelle-t-on le grand tambour sacré d'Afrique centrale ?", options: ["Le ngoma", "Le djembé", "La kora", "Le balafon"], correct: 0,
      explication: "Le ngoma est un tambour de nos régions. Le djembé, la kora et le balafon viennent plutôt d'Afrique de l'Ouest." },
    { niveau: 2, question: "Quel jour célèbre-t-on la Journée de l'Afrique ?", options: ["Le 25 mai", "Le 15 août", "Le 1er mai", "Le 21 mars"], correct: 0,
      explication: "Le 25 mai, tout le continent fête l'Afrique. Attention : le 15 août est notre fête nationale !" },
    { niveau: 2, question: "De quel arbre tire-t-on l'huile de palme rouge ?", options: ["Le palmier à huile", "Le cocotier", "L'olivier", "Le baobab"], correct: 0,
      explication: "L'huile de palme vient des fruits du palmier à huile. L'huile de coco, elle, vient du cocotier." },
    { niveau: 2, question: "Quel singe au visage rouge et bleu vit dans les forêts du sud-ouest du Congo ?", options: ["Le mandrill", "Le babouin", "Le capucin", "Le macaque"], correct: 0,
      explication: "Le mandrill est le plus grand de tous les singes de la famille des babouins, et ses couleurs sont uniques." },
    { niveau: 2, question: "Quel grand singe, notre proche cousin, vit dans nos forêts ?", options: ["Le chimpanzé", "L'orang-outan", "Le gibbon", "Le babouin"], correct: 0,
      explication: "Le chimpanzé vit en Afrique. L'orang-outan, lui, vit seulement en Asie." },
    { niveau: 2, question: "Comment s'appelle le massif forestier du sud-ouest du Congo, près de l'océan ?", options: ["Le Mayombe", "Le Hoggar", "Le Drakensberg", "Le Kilimandjaro"], correct: 0,
      explication: "Le Mayombe est une forêt de montagnes couverte d'arbres géants, au sud-ouest du pays." },
    { niveau: 2, question: "Que veut dire « bolingo » en lingala ?", options: ["L'amour", "La maison", "Le fleuve", "Le pain"], correct: 0,
      explication: "Bolingo veut dire amour. Et « matondi » veut dire merci !" },
    { niveau: 2, question: "Quelle grande université publique se trouve à Brazzaville ?", options: ["L'université Marien-Ngouabi", "L'université de Kinshasa", "L'université Cheikh-Anta-Diop", "La Sorbonne"], correct: 0,
      explication: "L'université Marien-Ngouabi porte le nom d'un ancien président. L'université Cheikh-Anta-Diop est à Dakar." },

    // ---------- 🌳 DIFFICILE ----------
    { niveau: 3, question: "Quelle rivière traverse le sud de Brazzaville avant de rejoindre le fleuve Congo ?", options: ["Le Djoué", "L'Oubangui", "La Sangha", "Le Kouilou"], correct: 0,
      explication: "Le Djoué traverse Brazzaville. L'Oubangui et la Sangha sont de grands affluents plus au nord." },
    { niveau: 3, question: "Quel général français a fait de Brazzaville la capitale de la « France libre » en 1940 ?", options: ["Charles de Gaulle", "Philippe Pétain", "Napoléon Bonaparte", "Jacques Chirac"], correct: 0,
      explication: "Pendant la Seconde Guerre mondiale, de Gaulle a installé la « France libre » à Brazzaville." },
    { niveau: 3, question: "Qui a été président du Congo de 1963 à 1968 ?", options: ["Alphonse Massamba-Débat", "Fulbert Youlou", "Marien Ngouabi", "Pascal Lissouba"], correct: 0,
      explication: "Alphonse Massamba-Débat a succédé à Fulbert Youlou en 1963. Un grand stade de Brazzaville porte son nom." },
    { niveau: 3, question: "Qui a été élu président en 1992, après la fin du parti unique ?", options: ["Pascal Lissouba", "Bernard Kolélas", "Joachim Yhombi-Opango", "André Milongo"], correct: 0,
      explication: "Pascal Lissouba a été le premier président élu au suffrage universel en 1992. Bernard Kolélas était son rival." },
    { niveau: 3, question: "En quelle année s'est tenue la Conférence nationale souveraine du Congo ?", options: ["1991", "1981", "1996", "2001"], correct: 0,
      explication: "En 1991, la Conférence nationale a mis fin au parti unique et ouvert la voie au multipartisme." },
    { niveau: 3, question: "Comment s'appelait le roi des Tékés qui signa un traité avec Brazza en 1880 ?", options: ["Makoko", "Lumumba", "Ntinu Wene", "Soundiata"], correct: 0,
      explication: "Le roi Makoko (Iloo Ier) dirigeait les Tékés, autour de l'actuelle Brazzaville. Soundiata est un roi du Mali." },
    { niveau: 3, question: "Quel grand royaume ancien s'étendait sur le sud du Congo, le nord de l'Angola et l'ouest de la RDC ?", options: ["Le royaume Kongo", "L'empire du Mali", "Le royaume zoulou", "L'empire ashanti"], correct: 0,
      explication: "Le royaume Kongo était très puissant avant l'arrivée des Européens. Le royaume de Loango existait aussi sur la côte." },
    { niveau: 3, question: "En quelle année l'UNESCO a-t-elle inscrit la rumba congolaise au patrimoine culturel de l'humanité ?", options: ["2021", "2011", "2001", "2015"], correct: 0,
      explication: "En 2021, la rumba congolaise, partagée par Brazzaville et Kinshasa, est entrée au patrimoine immatériel de l'UNESCO." },
    { niveau: 3, question: "Lequel de ces chanteurs est congolais de Brazzaville ?", options: ["Zao", "Papa Wemba", "Koffi Olomidé", "Fally Ipupa"], correct: 0,
      explication: "Zao vient de la République du Congo. Les trois autres artistes viennent de la RDC, de l'autre côté du fleuve." },
    { niveau: 3, question: "Comment appelle-t-on les statues rituelles à clous du peuple kongo ?", options: ["Les nkisi", "Les kente", "Les masques dan", "Les bronzes du Bénin"], correct: 0,
      explication: "Les nkisi sont des statues rituelles kongo. Les kente (Ghana), masques dan (Côte d'Ivoire) et bronzes du Bénin viennent d'ailleurs." },
    { niveau: 3, question: "Quelle date célèbre-t-on la Journée de l'enfant africain ?", options: ["Le 16 juin", "Le 1er juin", "Le 20 novembre", "Le 25 mai"], correct: 0,
      explication: "Le 16 juin, c'est la Journée de l'enfant africain. Le 20 novembre est la Journée universelle de l'enfance." },
    { niveau: 3, question: "De quelle plante vient la feuille acidulée du plat « ngaï-ngaï » ?", options: ["L'oseille de Guinée", "L'épinard", "Le chou", "La laitue"], correct: 0,
      explication: "Le ngaï-ngaï se prépare avec des feuilles d'oseille de Guinée (le même hibiscus qui donne le bissap)." },
    { niveau: 3, question: "Quel grand singe ne vit qu'en RDC, de l'autre côté du fleuve ?", options: ["Le bonobo", "Le chimpanzé", "Le gorille", "Le mandrill"], correct: 0,
      explication: "Le bonobo vit uniquement en RDC, au sud du fleuve Congo. On le confond souvent avec le chimpanzé." },
    { niveau: 3, question: "Quelle immense tortue marine pond ses œufs sur nos plages de l'Atlantique ?", options: ["La tortue luth", "La tortue géante des Galápagos", "La tortue de terre", "La tortue d'eau douce"], correct: 0,
      explication: "La tortue luth est la plus grande tortue marine du monde. Elle vient pondre sur le littoral congolais." },
    { niveau: 3, question: "Comment s'appellent les plateaux de savane au nord de Brazzaville ?", options: ["Les plateaux Batéké", "Les hautes terres d'Éthiopie", "L'Altiplano", "Le plateau du Katanga"], correct: 0,
      explication: "Les plateaux Batéké, terre du peuple téké, sont couverts de savane au nord de Brazzaville." },
    { niveau: 3, question: "Quel peuple, avec les Tékés et les Mbochis, est l'un des grands groupes du Congo ?", options: ["Les Kongo", "Les Zoulous", "Les Massaïs", "Les Berbères"], correct: 0,
      explication: "Les Kongo vivent surtout dans le sud du pays. Les Zoulous, Massaïs et Berbères vivent dans d'autres régions d'Afrique." },
    { niveau: 3, question: "Comment s'appelle l'aéroport international de Brazzaville ?", options: ["Maya-Maya", "N'Djili", "Léon-Mba", "Bole"], correct: 0,
      explication: "Maya-Maya est l'aéroport de Brazzaville. N'Djili est à Kinshasa, Léon-Mba à Libreville et Bole à Addis-Abeba." },
    { niveau: 3, question: "En quelle année le Congo a-t-il remporté la Coupe d'Afrique des nations de football ?", options: ["1972", "1968", "1992", "2002"], correct: 0,
      explication: "Les Diables Rouges ont gagné la CAN 1972, organisée au Cameroun. C'est notre plus grand titre !" }
);

// =============================================
// 🏛️ HISTOIRE ET ARMOIRIES DU CONGO (18 questions)
// =============================================

TOUTES_LES_QUESTIONS.push(
    // ---------- Armoiries ----------
    { niveau: 1, question: "Quels animaux soutiennent le bouclier sur les armoiries du Congo ?", options: ["Deux éléphants", "Deux lions", "Deux gorilles", "Deux léopards"], correct: 0,
      explication: "Deux grands éléphants tiennent le bouclier. L'éléphant est notre animal symbole !", pictos: ["🐘🐘", "🦁🦁", "🦍🦍", "🐆🐆"] },
    { niveau: 2, question: "Quel animal rouge se dresse au centre du bouclier des armoiries du Congo ?", options: ["Un lion", "Un éléphant", "Un léopard", "Un gorille"], correct: 0,
      explication: "Un lion rouge se dresse sur le bouclier. Les éléphants, eux, se tiennent de chaque côté pour le soutenir." },
    { niveau: 2, question: "Que tient le lion sur les armoiries du Congo ?", options: ["Une torche", "Une épée", "Une lance", "Un livre"], correct: 0,
      explication: "Le lion tient une torche enflammée, au centre des armoiries." },
    { niveau: 3, question: "Comment est le bouclier des armoiries du Congo ?", options: ["Doré, avec une bande verte ondulée", "Bleu, avec une étoile", "Rouge, avec une croix", "Vert, avec un croissant"], correct: 0,
      explication: "Le fond du bouclier est doré, traversé au milieu par une bande verte en forme de vague." },
    { niveau: 3, question: "En quelle année les armoiries au lion et aux deux éléphants sont-elles revenues, après un emblème plus simple ?", options: ["1991", "1979", "1997", "2002"], correct: 0,
      explication: "Ces armoiries datent de 1960. De 1970 à 1991, un emblème plus simple les a remplacées, puis elles sont revenues en 1991." },

    // ---------- Symboles ----------
    { niveau: 2, question: "Comment s'appelle l'hymne national du Congo ?", options: ["La Congolaise", "La Marseillaise", "La Brabançonne", "La Zaïroise"], correct: 0,
      explication: "Notre hymne s'appelle « La Congolaise ». La Marseillaise est l'hymne de la France, et la Brabançonne celui de la Belgique." },
    { niveau: 3, question: "Entre 1970 et 1991, quelle couleur dominait le drapeau du Congo ?", options: ["Le rouge", "Le bleu", "Le noir", "Le blanc"], correct: 0,
      explication: "Pendant la République populaire, le drapeau était rouge. En 1991, le drapeau vert, jaune et rouge est revenu." },
    { niveau: 3, question: "Comment s'appelait le Congo de 1970 à 1991 ?", options: ["La République populaire du Congo", "La République du Zaïre", "Le Moyen-Congo", "Le Congo belge"], correct: 0,
      explication: "Sous Marien Ngouabi, le pays est devenu la République populaire du Congo, jusqu'en 1991." },

    // ---------- Histoire ----------
    { niveau: 1, question: "Comment appelle-t-on le jour où un pays devient libre de son colonisateur ?", options: ["L'indépendance", "La colonisation", "La conférence", "L'élection"], correct: 0,
      explication: "C'est l'indépendance. Le Congo a fêté la sienne le 15 août 1960.", pictos: ["🕊️", "⛓️", "🎤", "🗳️"] },
    { niveau: 2, question: "Quel surnom donne-t-on à Brazzaville ?", options: ["Brazza la verte", "Brazza la rouge", "Brazza la blanche", "Brazza la bleue"], correct: 0,
      explication: "On l'appelle « Brazza la verte » à cause de sa végétation luxuriante." },
    { niveau: 3, question: "Comment appelle-t-on les trois journées d'août 1963 qui ont mis fin au pouvoir de Fulbert Youlou ?", options: ["Les Trois Glorieuses", "Les Trois Mousquetaires", "Les Trois Couleurs", "Les Trois Vallées"], correct: 0,
      explication: "Du 13 au 15 août 1963, les « Trois Glorieuses » ont porté Alphonse Massamba-Débat au pouvoir." },
    { niveau: 3, question: "En quelle année a eu lieu la conférence de Brazzaville, organisée par le général de Gaulle ?", options: ["1944", "1914", "1960", "1884"], correct: 0,
      explication: "En 1944, pendant la Seconde Guerre mondiale, cette conférence a préparé l'avenir des colonies françaises d'Afrique." },
    { niveau: 3, question: "Brazzaville était la capitale de quelle grande fédération coloniale française ?", options: ["L'Afrique-Équatoriale française (AEF)", "L'Afrique-Occidentale française (AOF)", "L'Union européenne", "La Communauté des États sahéliens"], correct: 0,
      explication: "Brazzaville dirigeait l'AEF. La capitale de l'AOF était Dakar." },
    { niveau: 3, question: "En 1958, le Moyen-Congo est devenu une république autonome au sein de quel ensemble ?", options: ["La Communauté française", "L'Union soviétique", "Le Commonwealth", "La Ligue arabe"], correct: 0,
      explication: "En 1958, notre pays est devenu la République du Congo, encore liée à la France, avant l'indépendance totale en 1960." },
    { niveau: 3, question: "Dans quel pays est né Pierre Savorgnan de Brazza ?", options: ["En Italie", "En France", "Au Portugal", "En Belgique"], correct: 0,
      explication: "Brazza est né à Rome en 1852. Il a ensuite pris la nationalité française pour explorer l'Afrique centrale." },
    { niveau: 3, question: "Quel monument de Brazzaville abrite les restes de Pierre Savorgnan de Brazza ?", options: ["Le mémorial Pierre-Savorgnan-de-Brazza", "La basilique Sainte-Anne", "Le stade Massamba-Débat", "La tour Nabemba"], correct: 0,
      explication: "Le mémorial de Brazza, à Brazzaville, abrite les restes de l'explorateur depuis 2006." },
    { niveau: 3, question: "Quel ancien royaume de la côte atlantique avait pour capitale Mbanza Loango ?", options: ["Le royaume de Loango", "Le royaume Kongo", "L'empire du Mali", "Le royaume du Bénin"], correct: 0,
      explication: "Le royaume de Loango s'étendait sur la côte. La capitale du royaume Kongo, Mbanza Kongo, est aujourd'hui en Angola." },
    { niveau: 3, question: "Qui a dirigé le Congo de 1977 à 1979 ?", options: ["Joachim Yhombi-Opango", "Marien Ngouabi", "Alphonse Massamba-Débat", "Pascal Lissouba"], correct: 0,
      explication: "Joachim Yhombi-Opango a pris la tête du pays en 1977, après Marien Ngouabi." }
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
