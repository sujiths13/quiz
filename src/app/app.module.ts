import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// Modules
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';

// Components
import { AppComponent } from './app.component';
import { CategorySelectionComponent } from './components/category-selection/category-selection.component';
import { ChipComponent } from './components/chip/chip.component';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import { QuizMakerComponent } from './pages/quiz-maker/quiz-maker.component';
import { ResultsComponent } from './pages/results/results.component';

// Directives
import { ScoreBoardDirective } from './directives/score-board.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireComponent,
    CategorySelectionComponent,
    QuizMakerComponent,
    ResultsComponent,
    ScoreBoardDirective,
    ChipComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
