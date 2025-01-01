CREATE OR REPLACE PROCEDURE AddQuestionWithAnswers(
    IN pQuestionText VARCHAR(512),
    IN pAnswers JSON -- Accepts answers as a JSON array
)
BEGIN
    DECLARE questionId INT; -- To store the newly inserted question ID
    DECLARE allowedAnswerId INT DEFAULT 1; -- Initialize allowed_answer_id for each question
    DECLARE currentAnswer TEXT; -- To store individual answers during iteration
    DECLARE i INT DEFAULT 0; -- Counter for JSON array iteration
    DECLARE answersCount INT; -- Total number of answers in the JSON array

    -- Insert the question
    INSERT INTO QUESTION (question_text)
    VALUES (pQuestionText);

    -- Store the question id to use it as a foreign key in the ALLOWED_ANSWER table
    SET questionId = LAST_INSERT_ID();

    -- Get the total amount of possible answers
    SET answersCount = JSON_LENGTH(pAnswers);

    -- Insert each answer
    WHILE i < answersCount DO
            -- Extract the answer text from the JSON array
            SET currentAnswer = JSON_UNQUOTE(JSON_EXTRACT(pAnswers, CONCAT('$[', i, ']')));

            -- Insert the answer into the ALLOWED_ANSWER table
            INSERT INTO ALLOWED_ANSWER (question_id, allowed_answer_id, answer_text)
            VALUES (questionId, allowedAnswerId, currentAnswer);

            -- Increment id and counter
            SET allowedAnswerId = allowedAnswerId + 1;
            SET i = i + 1;
        END WHILE;

    SELECT CONCAT('Question and ', answersCount, ' answers added successfully with question_id: ', questionId) AS result;
END
