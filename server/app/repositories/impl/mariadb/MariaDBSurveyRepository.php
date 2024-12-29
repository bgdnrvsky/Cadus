<?php

namespace Cadus\repositories\impl\mariadb;

use Cadus\repositories\AbstractRepository;
use Cadus\repositories\ISurveyRepository;
use PDO;

class MariaDBSurveyRepository extends AbstractRepository implements ISurveyRepository
{
    public function getQuestions()
    {
        $statement = $this->pdo->query(
            "SELECT question_text, answer_text 
            FROM QUESTION q, ALLOWED_ANSWER a
            WHERE q.question_id = a.question_id"
        );

        $rows = $statement->fetchAll(PDO::FETCH_ASSOC);

        $grouped = [];

        foreach ($rows as $row) {
            $questionText = $row['question_text'];
            $answerText = $row['answer_text'];

            if (!isset($grouped[$questionText])) {
                $grouped[$questionText] = [
                    'questionText' => $questionText,
                    'answers' => []
                ];
            }

            $grouped[$questionText]['answers'][] = $answerText;
        }

        return array_values($grouped);
    }

    public function registerAnswer()
    {
        // TODO: Implement registerAnswer() method.
    }

    public function hasMemberAnswered()
    {
        // TODO: Implement hasMemberAnswered() method.
    }
}