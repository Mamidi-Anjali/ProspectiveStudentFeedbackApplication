import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  private apiUrlAdd = 'http://localhost:8080/addSurvey';
  private apiUrlGet = 'http://localhost:8080/surveys'; 

  constructor(private http: HttpClient) { }

  submitSurvey(surveyData: any): Observable<any> {
    return this.http.post<any>(this.apiUrlAdd, surveyData);
  }
  getSurveys(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlGet);
  }
}
