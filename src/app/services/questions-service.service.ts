import { Injectable } from '@angular/core';
import { Choice } from '../datamodel/Choice';
import { Question } from '../datamodel/Question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() { }


  fetchQuestions():Question[]{
    var defaultChoices = [
      new Choice("this is a valid choice", true),
      new Choice("this is an invalid choice", false)
    ];
    var currentQuestion = new Question("Default question title", defaultChoices);
    return [currentQuestion];
  }
}
