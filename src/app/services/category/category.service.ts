import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Endpoints } from 'src/app/constants/endpoints.constant';
import { Category, TriviaCategory } from 'src/app/models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories: TriviaCategory[] | undefined;

  constructor(private http: HttpClient) {}

  getCategories(): Observable<TriviaCategory[]> {
    if (this.categories) {
      return of(this.categories);
    }

    return this.http.get<Category>(Endpoints.category).pipe(
      map(({ trivia_categories }: Category) => {
        this.categories = trivia_categories;
        return trivia_categories;
      })
    );
  }
}
