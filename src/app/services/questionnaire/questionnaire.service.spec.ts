import { TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { QuestionnaireService } from './questionnaire.service';

describe('QuestionnaireService', () => {
  let service: QuestionnaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(QuestionnaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
