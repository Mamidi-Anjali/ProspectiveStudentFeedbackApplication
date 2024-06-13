/* Dependencies for survey-list */
import { Component, OnInit} from '@angular/core';
import { SurveyService } from '../survey.service';
//import { SurveyOutput } from '../survey-form/types';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrl: './survey-list.component.css'
})
export class SurveyListComponent implements OnInit {
  surveys: any[] = [];

  constructor(private surveyService: SurveyService) { }

  ngOnInit(): void {
    this.surveyService.getSurveys().subscribe({
      next: (data) => {
        this.surveys = data;
        console.log(data)
      },
      error: (err) => {
        console.error('Error fetching surveys', err);
        alert("Error fetching surveys")
      }
    });
  }
}
