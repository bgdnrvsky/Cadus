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
        'Votre région',
        '["Auvergne Rhône-Alpes", "Bourgogne Franche-Comté", "Bretagne", "Centre-Val de Loire",
        "Corse", "Grand-Est", "Hauts-de-France", "Île-de-France", "Normandie", "Nouvelle-Aquitaine",
        "Occitanie", "Pays de la Loire", "Provence-Alpes-Côte d\'Azur", "Guadeloupe", "Martinique",
        "Mayotte", "La Réunion", "Corse", "Grand-Est", "Hauts-de-France", "Île-de-France"]'
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