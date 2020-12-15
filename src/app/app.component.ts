import { Component } from '@angular/core';
import { Choice } from './datamodel/Choice';
import { Question } from './datamodel/Question';
import { QuestionsService } from './services/questions-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quiz-app';
  currentQuestion: Question;


  constructor(private questionService: QuestionsService){
    //TODO : put this in a list of question-edition-component
    this.currentQuestion = questionService.fetchQuestions()[0];
  }

  savelist(){
  
  }
}
