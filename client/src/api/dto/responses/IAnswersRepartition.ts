
export interface IAnswerEntry {
    answerId: number;
    answerText: string;
    answerCount: number;
}

interface IAnswersRepartition {
    entries: IAnswerEntry[]
}

export default IAnswersRepartition;