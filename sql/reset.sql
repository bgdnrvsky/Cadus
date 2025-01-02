DROP TABLE ADMINISTRATORS;
DROP TABLE ANSWER;
DROP TABLE HAS_ANSWERED;
DROP TABLE MEMBERS;
DROP TABLE ALLOWED_ANSWER;
DROP TABLE QUESTION;

CREATE TABLE MEMBERS(
    member_id INT AUTO_INCREMENT,
    login VARCHAR(128) NOT NULL,
    password VARCHAR(256) NOT NULL,
    created_at DATETIME NOT NULL,

    PRIMARY KEY(member_id)
);

CREATE TABLE QUESTION(
    question_id INT AUTO_INCREMENT,
    question_text VARCHAR(512) NOT NULL,

    PRIMARY KEY(question_id)
);

CREATE TABLE ALLOWED_ANSWER(
    allowed_answer_id INT NOT NULL,
    question_id INT NOT NULL,
    answer_text VARCHAR(512) NOT NULL,

    PRIMARY KEY(question_id, allowed_answer_id),
    FOREIGN KEY(question_id) REFERENCES QUESTION(question_id)
);

CREATE TABLE ADMINISTRATORS(
    member_id INT,

    PRIMARY KEY(member_id),
    FOREIGN KEY(member_id) REFERENCES MEMBERS(member_id)
);

CREATE TABLE ANSWER(
    answer_id INT AUTO_INCREMENT,
    allowed_answer_id INT NOT NULL,
    question_id INT NOT NULL,

    PRIMARY KEY(answer_id),
    FOREIGN KEY(question_id, allowed_answer_id) REFERENCES ALLOWED_ANSWER(question_id, allowed_answer_id),
    FOREIGN KEY(question_id) REFERENCES QUESTION(question_id)
);

CREATE TABLE HAS_ANSWERED(
    member_id INT,
    question_id INT,
    answered_at DATETIME,

    PRIMARY KEY(member_id, question_id),
    FOREIGN KEY(member_id) REFERENCES MEMBERS(member_id),
    FOREIGN KEY(question_id) REFERENCES QUESTION(question_id)
);


CALL AddQuestionWithAnswers(
        'Votre département',
        '["01-AIN",
            "02-AISNE",
            "03-ALLIER",
            "04-ALPES-DE-HAUTE-PROVENCE",
            "05-HAUTES-ALPES",
            "06-ALPES-MARITIMES",
            "07-ARDECHE",
            "08-ARDENNES",
            "09-ARIEGE",
            "10-AUBE",
            "11-AUDE",
            "12-AVEYRON",
            "13-BOUCHES-DU-RHONE",
            "14-CALVADOS",
            "15-CANTAL",
            "16-CHARENTE",
            "17-CHARENTE-MARITIME",
            "18-CHER",
            "19-CORREZE",
            "21-COTE-D\'OR",
            "22-COTES-D\'ARMOR",
            "23-CREUSE",
            "24-DORDOGNE",
            "25-DOUBS",
            "26-DROME",
            "27-EURE",
            "28-EURE-ET-LOIR",
            "29-FINISTERE",
            "2A-CORSE-DU-SUD",
            "2B-HAUTE-CORSE",
            "30-GARD",
            "31-HAUTE-GARONNE",
            "32-GERS",
            "33-GIRONDE",
            "34-HERAULT",
            "35-ILLE-ET-VILAINE",
            "36-INDRE",
            "37-INDRE-ET-LOIRE",
            "38-ISERE",
            "39-JURA",
            "40-LANDES",
            "41-LOIR-ET-CHER",
            "42-LOIRE",
            "43-HAUTE-LOIRE",
            "44-LOIRE-ATLANTIQUE",
            "45-LOIRET",
            "46-LOT",
            "47-LOT-ET-GARONNE",
            "48-LOZERE",
            "49-MAINE-ET-LOIRE",
            "50-MANCHE",
            "51-MARNE",
            "52-HAUTE-MARNE",
            "53-MAYENNE",
            "54-MEURTHE-ET-MOSELLE",
            "55-MEUSE",
            "56-MORBIHAN",
            "57-MOSELLE",
            "58-NIEVRE",
            "59-NORD",
            "60-OISE",
            "61-ORNE",
            "62-PAS-DE-CALAIS",
            "63-PUY-DE-DOME",
            "64-PYRENEES-ATLANTIQUES",
            "65-HAUTES-PYRENEES",
            "66-PYRENEES-ORIENTALES",
            "67-BAS-RHIN",
            "68-HAUT-RHIN",
            "69-RHONE",
            "70-HAUTE-SAONE",
            "71-SAONE-ET-LOIRE",
            "72-SARTHE",
            "73-SAVOIE",
            "74-HAUTE-SAVOIE",
            "75-PARIS",
            "76-SEINE-MARITIME",
            "77-SEINE-ET-MARNE",
            "78-YVELINES",
            "79-DEUX-SEVRES",
            "80-SOMME",
            "81-TARN",
            "82-TARN-ET-GARONNE",
            "83-VAR",
            "84-VAUCLUSE",
            "85-VENDEE",
            "86-VIENNE",
            "87-HAUTE-VIENNE",
            "88-VOSGES",
            "89-YONNE",
            "90-TERRITOIREDEBELFORT",
            "91-ESSONNE",
            "92-HAUTS-DE-SEINE",
            "93-SEINE-SAINT-DENIS",
            "94-VAL-DE-MARNE",
            "95-VAL-D\'OISE"]'
     );

CALL AddQuestionWithAnswers(
        'Votre statut social',
        '["Dans la famille en permanence", "Dans la famille avec une solution d\'accueil ou des activités en journée",
        "Dans la famille principalement mais avec un accueil temporaire ou séquentiel en établissement",
        "Dans un logement indépendant", "Dans un habitat inclusif", "Dans un foyer d\'accueil médicalisé (FAM)",
        "Dans une maison d\'accueil spécialisée (MAS)", "Dans un foyer de vie ou un hébergement",
        "En IME avec internet", "Hospitalisation en psychiatrie"]'
     );

CALL AddQuestionWithAnswers(
        'Êtes-vous satisfait de votre statut social ?',
        '["Oui", "Non"]'
     );

CALL AddQuestionWithAnswers(
        'Quelles sont vos activités ?',
        '["Scolarité en milieu ordinaire", "Scolarité en dispositif spécialisé de l\'Éducation Nationale",
        "Instruction en Famille", "Scolarité dans un établissement médico-social (IME, IMPRO...)",
        "Formation professionnelle", "Etudes supérieures", "Activité professionnelle en milieu ordinaire",
        "Activité professionnelle en milieu protégé (ESAT, Entreprise adaptée)",
        "Sans aucune activité scolaire ou professionnelle", "Autre"]'
     );

CALL AddQuestionWithAnswers(
        'Quelles sont les aides à votre disposition ?',
        '["La personne est totalement autonome",
        "Un soutien à l\'autonomie pour le logement, l\'accès à la santé, les loisirs, les démarches administratives",
        "Une aide pour tous les actes de la vie quotidienne et la présence d\'une tierce personne 24 heures sur 24",
        "Des interventions et stimulations ponctuelles mais quotidiennes (toilette, sorties, repas, communication...)"]'
     );

CALL AddQuestionWithAnswers(
        'Quels types d\'aide ou de soutien vous seraient les plus utiles dans votre vie quotidienne ?',
        '["Soutien financier (exemple : aides, subventions, conseils budgétaires).",
            "Accompagnement médical ou psychologique.",
            "Aide pour mieux gérer mon temps et mes responsabilités.",
            "Activités pour briser l\'isolement social (rencontres, ateliers, groupes de soutien).",
            "Accès facilité aux services essentiels (transports, soins, démarches administratives).",
            "Assistance dans la recherche ou l’amélioration d’un logement.",
            "Soutien dans la gestion du stress ou des conflits personnels/professionnels.",
            "Conseils pour trouver un emploi ou améliorer mes compétences professionnelles."]'
     );

CALL AddQuestionWithAnswers(
        'Quelles sont les principales difficultés que vous rencontrez dans votre vie quotidienne ?',
        '["Tout va bien",
            "Difficultés financières (exemple : payer les factures, gérer un budget serré).",
            "Problèmes de santé (physique ou mentale).",
            "Manque de temps (gestion des responsabilités professionnelles, familiales ou personnelles).",
            "Isolement social ou manque de soutien.",
            "Accès limité aux services ou infrastructures (transports, soins, loisirs, etc.).",
            "Stress lié au travail ou aux études.",
            "Problèmes liés au logement (logement inadapté, insalubre, ou difficultés à en trouver un).",
            "Réduction d\'activité professionnelle"]'
     );

CALL GenerateFakeAnswers(300);