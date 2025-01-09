CREATE PROCEDURE GenerateFakeAnswersForQuestion(
    IN questionId INT,
    IN answersCnt INT
)
BEGIN
    DECLARE maxAnswerId INT;
    DECLARE rndAnswerId INT;
    DECLARE i INT DEFAULT 0;

    -- Count the allowed answers for the given question
    SELECT COUNT(*) INTO maxAnswerId
    FROM ALLOWED_ANSWER
    WHERE question_id = questionId;

    -- Loop to insert random answers for the given question
    WHILE i < answersCnt DO
            -- Generate a random allowed_answer_id for the given question
            SELECT FLOOR(RAND() * maxAnswerId) + 1 INTO rndAnswerId;

            -- Insert the random answer into the ANSWER table
            INSERT INTO ANSWER (allowed_answer_id, question_id) VALUES (rndAnswerId, questionId);

            -- Increment the counter
            SET i = i + 1;
        END WHILE;
END;


CREATE PROCEDURE GenerateFakeAnswers(IN answersCntPerQuestion INT)
BEGIN
    DECLARE done INT DEFAULT 0;
    DECLARE currentQuestionId INT;

    -- Cursor to iterate through all question IDs
    DECLARE cursorQuestions CURSOR FOR
        SELECT question_id FROM QUESTION;

    -- Handler to exit the loop when the cursor is exhausted
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;

    OPEN cursorQuestions;

    -- Loop through each question
    questionLoop: LOOP
        FETCH cursorQuestions INTO currentQuestionId;

        -- Exit the loop when no more rows are found
        IF done THEN
            LEAVE questionLoop;
        END IF;

        -- Call the procedure to generate fake answers for the current question
        CALL GenerateFakeAnswersForQuestion(currentQuestionId, answersCntPerQuestion);
    END LOOP;

    CLOSE cursorQuestions;
END