import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Endpoints } from 'src/app/constants/endpoints.constant';
import { CategorySelection } from 'src/app/models/category-selection';
import { Questionnaire, Quiz, QuizResult } from 'src/app/models/questionnaire';

@Injectable({
  providedIn: 'root',
})
export class QuestionnaireService {
  private userInputs: Questionnaire[] = [];

  constructor(private http: HttpClient) {}

  private shuffleArray(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  private prepareQuestionnaire(results: QuizResult[]): Questionnaire[] {
    return results.map((questionnaire: QuizResult) => ({
      ...questionnaire,
      answers: this.shuffleArray([
        questionnaire.correct_answer,
        ...questionnaire.incorrect_answers,
      ]),
      answer: '',
    }));
  }

  getQuestionnaire(
    categorySelection: CategorySelection
  ): Observable<Questionnaire[]> {
    const { category, difficulty } = categorySelection;
    const params = new HttpParams({
      fromObject: {
        amount: 5,
        category,
        difficulty,
        type: 'multiple',
      },
    });

    return this.http
      .get<Quiz>(Endpoints.questionnaire, { params })
      .pipe(map((quiz: Quiz) => this.prepareQuestionnaire(quiz.results)));
  }

  saveUserInputs(userInputs: Questionnaire[]): void {
    this.userInputs = userInputs;
  }

  getUserInputs(): Questionnaire[] {
    return this.userInputs;
  }
}
