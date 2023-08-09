import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CategorySelection } from 'src/app/models/category-selection';
import { Questionnaire } from 'src/app/models/questionnaire';
import { QuestionnaireService } from 'src/app/services/questionnaire/questionnaire.service';

@Component({
  selector: 'app-quiz-maker',
  templateUrl: './quiz-maker.component.html',
})
export class QuizMakerComponent {
  questionnaire$: Observable<Questionnaire[]> | undefined;

  constructor(private questionnaireService: QuestionnaireService) {}

  create(categorySelection: CategorySelection): void {
    this.questionnaire$ =
      this.questionnaireService.getQuestionnaire(categorySelection);
  }
}
