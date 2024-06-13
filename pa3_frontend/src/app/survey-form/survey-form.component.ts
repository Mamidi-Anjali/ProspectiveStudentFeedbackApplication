/* Dependencies for survey-form component */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SurveyService } from '../survey.service';
import { SurveyInput, SurveyOutput } from './types';
import { Router } from '@angular/router'; // Import Router


@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrl: './survey-form.component.css'
})

export class SurveyFormComponent implements OnInit {
  surveyForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private surveyService: SurveyService, private router: Router) {}

  ngOnInit(): void {
    this.surveyForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      streetAddress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]], // ZIP code pattern
      telephoneNumber: ['', [Validators.required, Validators.pattern('^[0-9-]+$')]], // Phone number pattern
      email: ['', [Validators.required, Validators.email]],
      dateOfSurvey: ['', Validators.required],
      likeMost: this.formBuilder.group({
        students: false,
        location: false,
        campus: false,
        atmosphere: false,
        dormRooms: false,
        sports: false,
      }),
      interestOrigin: [''],
      recommendationLikelihood: [''],
      additionalComments: ['']
    });
  }

  convertSurveyObject(input: SurveyInput): SurveyOutput {
    return {
      firstName: input.firstName,
      lastName: input.lastName,
      streetAddress: input.streetAddress,
      city: input.city,
      state: input.state,
      zip: input.zip,
      telephoneNumber: input.telephoneNumber,
      email: input.email,
      dateOfSurvey: new Date(input.dateOfSurvey).toISOString(),
      likeStudents: input.likeMost.students,
      likeLocation: input.likeMost.location,
      likeCampus: input.likeMost.campus,
      likeAtmosphere: input.likeMost.atmosphere,
      likeDormRooms: input.likeMost.dormRooms,
      likeSports: input.likeMost.sports,
      interestOrigin: input.interestOrigin,
      recommendationLikelihood: input.recommendationLikelihood,
      additionalComments: input.additionalComments
    };
  }

  onSubmit() {
    if (this.surveyForm.valid) {
      console.log(this.surveyForm.value)
      const convertedObject = this.convertSurveyObject(this.surveyForm.value);
      this.surveyService.submitSurvey(convertedObject)
        .subscribe({
          next: (response) => {
            console.log('Survey submitted successfully', response);
            alert('Survey submitted successfully!');
            this.router.navigate(['/thank-you']);
          },
          error: (error) => {
            console.error('Error submitting survey', error);
            alert('Failed to submit survey. Please try again.');
          }
        });
    }
  }
}
