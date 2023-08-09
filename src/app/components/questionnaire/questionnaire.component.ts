import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChipValue } from 'src/app/models/chip';
import { Questionnaire } from 'src/app/models/questionnaire';
import { QuestionnaireService } from 'src/app/services/questionnaire/questionnaire.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
})
export class QuestionnaireComponent implements OnInit {
  @Input() questionnaire: Questionnaire[] = [];
  @Input() isResults = false;

  score = 0;
  allQuestionsAnswered = false;

  constructor(
    private router: Router,
    private questionnaireService: QuestionnaireService
  ) {}

  ngOnInit(): void {
    this.checkAllQuestionsAnswered();

    if (this.isResults) {
      this.calculateScore();
    }
  }

  calculateScore(): void {
    this.score = this.questionnaire.reduce((totalCorrect, question) => {
      if (question.answer === question.correct_answer) {
        return totalCorrect + 1;
      }
      return totalCorrect;
    }, 0);
  }

  getRadioId(questionIndex: number, answerIndex: number): string {
    return `radio_${questionIndex}_${answerIndex}`;
  }

  selectAnswer(answer: ChipValue, quiz: Questionnaire): void {
    Object.assign(quiz, { answer });
    this.checkAllQuestionsAnswered();
  }

  onSubmit(): void {
    if (this.isResults) {
      this.router.navigate(['/']);
    } else {
      this.questionnaireService.saveUserInputs(this.questionnaire);
      this.router.navigate(['results']);
    }
  }

  checkAllQuestionsAnswered(): void {
    this.allQuestionsAnswered = this.questionnaire.every(
      (quiz: Questionnaire) => quiz.answer
    );
  }
}
