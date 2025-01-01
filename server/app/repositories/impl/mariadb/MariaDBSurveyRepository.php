<?php

namespace Cadus\repositories\impl\mariadb;

use Cadus\models\entities\AllowedAnswerEntity;
use Cadus\models\entities\MemberEntity;
use Cadus\models\entities\QuestionEntity;
use Cadus\repositories\AbstractRepository;
use Cadus\repositories\ISurveyRepository;
use PDO;

/**
 * Class MariaDBSurveyRepository
 *
 * Implementation of the ISurveyRepository interface for interacting with the survey-related data in the database.
 * This class provides methods for fetching survey questions, registering answers, and checking if a member has
 * answered a question. It utilizes PDO for database operations and extends the AbstractRepository class to get access
 * to a shared PDO connection.
 */
class MariaDBSurveyRepository extends AbstractRepository implements ISurveyRepository
{
    public function getQuestions(MemberEntity $member): array
    {
        $statement = $this->pdo->prepare(
            "SELECT
                q.question_id,
                q.question_text,
                aa.answer_text,
                IF(ha.question_id IS NOT NULL, TRUE, FALSE) AS answered
            FROM QUESTION q
                LEFT JOIN ALLOWED_ANSWER aa ON q.question_id = aa.question_id
                LEFT JOIN HAS_ANSWERED ha ON q.question_id = ha.question_id AND ha.member_id = :member_id
            ORDER BY q.question_id, aa.allowed_answer_id"
        );

        $statement->bindValue(':member_id', $member->getId(), PDO::PARAM_INT);
        $statement->execute();

        $rows = $statement->fetchAll(PDO::FETCH_ASSOC);

        $grouped = [];

        foreach ($rows as $row) {
            $questionText = $row['question_text'];
            $answerText = $row['answer_text'];

            if (!isset($grouped[$questionText])) {
                $grouped[$questionText] = [
                    'questionText' => $questionText,
                    'answers' => [],
                    'answered' => $row['answered']
                ];
            }

            $grouped[$questionText]['answers'][] = $answerText;
        }

        return array_values($grouped);
    }

    public function registerAnswer(MemberEntity $member, AllowedAnswerEntity $answer): void
    {
        $statement = $this->pdo->prepare(
            "INSERT INTO ANSWER (allowed_answer_id, question_id) VALUES (:allowed_answer_id, :question_id)"
        );

        $statement->bindValue(":allowed_answer_id", $answer->getAnswerId(), PDO::PARAM_INT);
        $statement->bindValue(":question_id", $answer->getQuestionId(), PDO::PARAM_INT);
        $statement->execute();

        $statement = $this->pdo->prepare(
            "INSERT INTO HAS_ANSWERED (member_id, question_id, answered_at) VALUES (:member_id, :question_id, NOW())"
        );

        $statement->bindValue(":member_id", $member->getId(), PDO::PARAM_INT);
        $statement->bindValue(":question_id", $answer->getQuestionId(), PDO::PARAM_INT);
        $statement->execute();
    }

    public function findQuestionByText(string $questionText): ?QuestionEntity {
        $statement = $this->pdo->prepare(
            "SELECT question_id
             FROM QUESTION
             WHERE question_text = :questionText"
        );

        $statement->bindValue(':questionText', $questionText);
        $statement->execute();

        $row = $statement->fetch();

        if (!$row) {
            return null;
        }

        return new QuestionEntity(
            $row['question_id'],
            $questionText
        );
    }

    public function findAllowedAnswerByText(QuestionEntity $question, string $answerText): ?AllowedAnswerEntity
    {
        $statement = $this->pdo->prepare(
            "SELECT allowed_answer_id
            FROM ALLOWED_ANSWER a
            WHERE a.question_id = :questionId AND a.answer_text = :answerText"
        );

        $statement->bindValue(':questionId', $question->getId(), PDO::PARAM_INT);
        $statement->bindValue(':answerText', $answerText);
        $statement->execute();

        $row = $statement->fetch();

        if (!$row) {
            return null;
        }

        return new AllowedAnswerEntity(
            $row['allowed_answer_id'],
            $question->getId(),
            $answerText
        );
    }

    public function hasMemberAnsweredQuestion(MemberEntity $member, QuestionEntity $question) : bool
    {
        $statement = $this->pdo->prepare(
            "SELECT * 
            FROM HAS_ANSWERED
             WHERE member_id = :member_id AND question_id = :question_id"
        );

        $statement->bindValue(':member_id', $member->getId(), PDO::PARAM_INT);
        $statement->bindValue(':question_id', $question->getId(), PDO::PARAM_INT);
        $statement->execute();

        return $statement->rowCount() > 0;
    }
}