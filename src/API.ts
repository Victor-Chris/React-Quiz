import { shuffleArray } from "./utils";
import axios from 'axios';

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    
    const endpoint = `https:/opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(endpoint)).json();

    // axios({
    //     method: 'GET',
    //     url: `https:/opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
    // })
    // .then((res) => {
    //     //console.log(JSON.stringify(res.data));
    //     //const qtns = JSON.stringify(res.data);

    //     return res.data.map((question: Question) => (
    //         {
    //             ...question,
    //             answers: shuffleArray([...question.incorrect_answers, question.correct_answer,]),
    //         }
    //     ));
    // })
    // .catch((err) => {
    //     console.log(err);
    // })
    
    return data.results.map((question: Question) => (
        {
            ...question,
            answers: shuffleArray([...question.incorrect_answers, question.correct_answer,]),
        }
    ));
};