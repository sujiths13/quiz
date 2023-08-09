import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CategorySelectionComponent } from 'src/app/components/category-selection/category-selection.component';
import { QuestionnaireService } from 'src/app/services/questionnaire/questionnaire.service';
import { QuizMakerComponent } from './quiz-maker.component';

describe('QuizMakerComponent', () => {
  let component: QuizMakerComponent;
  let fixture: ComponentFixture<QuizMakerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizMakerComponent, CategorySelectionComponent],
      providers: [QuestionnaireService],
      imports: [HttpClientModule, ReactiveFormsModule],
    });
    fixture = TestBed.createComponent(QuizMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
