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
    allowed_answer_id INT AUTO_INCREMENT,
    answer_text VARCHAR(512) NOT NULL,
    question_id INT NOT NULL,

    PRIMARY KEY(allowed_answer_id),
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
    FOREIGN KEY(allowed_answer_id) REFERENCES ALLOWED_ANSWER(allowed_answer_id),
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
