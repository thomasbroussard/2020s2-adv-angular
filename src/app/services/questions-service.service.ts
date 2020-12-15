import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Choice } from '../datamodel/Choice';
import { Question } from '../datamodel/Question';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http:HttpClient) { }


  fetchQuestions():Observable<Question>{
    // var defaultChoices = [
    //   new Choice("this is a valid choice", true),
    //   new Choice("this is an invalid choice", false)
    // ];
   // var currentQuestion = new Question("Default question title", defaultChoices);
     return this.http.get<Question>("http://localhost:10080/quiz-rest/rest/quizzes/questions/1");
 
  }
}
