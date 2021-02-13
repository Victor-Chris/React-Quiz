import React from 'react';
import { AnswerObject } from '../App';
//import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({ 
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestions
 }) => (<div>
    <p>Question: {questionNr} / {totalQuestions}</p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
        {answers.map(answer => (
            <div  key={answer}>
                <button value={answer} disabled={userAnswer ? true : false} onClick={callback}>
                    <span dangerouslySetInnerHTML={{ __html: answer }} />
                </button>
            </div>
        ))}
    </div>
    
</div>);

export default QuestionCard;