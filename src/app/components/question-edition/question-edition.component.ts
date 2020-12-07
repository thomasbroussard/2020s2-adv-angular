import { Component, OnInit } from '@angular/core';
import { Choice } from 'src/app/datamodel/Choice';
import { Question } from 'src/app/datamodel/Question';

@Component({
  selector: 'app-question-edition',
  templateUrl: './question-edition.component.html',
  styleUrls: ['./question-edition.component.css']
})
export class QuestionEditionComponent implements OnInit {

  defaultQuestion:Question;
  

  constructor() {
    var defaultChoices = [
      new Choice("this is a valid choice", true)
    ];
    this.defaultQuestion = new Question("Default question title", defaultChoices);
   }

  ngOnInit(): void {
  }

}
