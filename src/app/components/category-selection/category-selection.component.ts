import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DIFFICULTY_LEVEL } from 'src/app/constants/difficulty-level.constant';
import { TriviaCategory } from 'src/app/models/category';
import { CategorySelection } from 'src/app/models/category-selection';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-category-selection',
  templateUrl: './category-selection.component.html',
  styleUrls: ['./category-selection.component.scss'],
})
export class CategorySelectionComponent {
  @Output() formSubmit = new EventEmitter<CategorySelection>();

  categorySelectionForm: FormGroup;
  categories$: Observable<TriviaCategory[]> =
    this.categoryService.getCategories();
  difficultyLevel = DIFFICULTY_LEVEL;

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService
  ) {
    this.categorySelectionForm = this.formBuilder.group({
      category: ['', Validators.required],
      difficulty: ['', Validators.required],
    });
  }

  originalOrder = (): number => {
    return 0;
  };

  onSubmit(): void {
    if (this.categorySelectionForm.valid) {
      this.formSubmit.emit(this.categorySelectionForm.value);
    }
  }
}
