/* Dependencies */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { SurveyListComponent } from './survey-list/survey-list.component';
import {ThankYouComponent } from './thank-you/thank-you.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'survey', component: SurveyFormComponent },
  { path: 'surveys', component: SurveyListComponent },
  { path: 'thank-you', component: ThankYouComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
