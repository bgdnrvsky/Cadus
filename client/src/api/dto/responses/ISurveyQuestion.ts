/**
 * [
 *     {
 *         "questionText": "<question>",
 *         "answers": ["a1", "a2", "a3"],
 *         "answered": true
 *     }
 * ]
 *
 *
 *
 *
 */
export interface ISurveyQuestion {
    questionText: string;
    answers: string[];
    answered: boolean;
}
