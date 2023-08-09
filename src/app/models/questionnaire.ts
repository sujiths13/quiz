export interface Quiz {
  response_code: number;
  results: QuizResult[];
}

export interface QuizResult {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface Questionnaire extends QuizResult {
  answers: string[];
  answer: string;
}
