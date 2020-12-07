import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/datamodel/Question';

@Component({
  selector: 'app-question-edition',
  templateUrl: './question-edition.component.html',
  styleUrls: ['./question-edition.component.css']
})
export class QuestionEditionComponent implements OnInit {

  defaultQuestion:Question;
  

  constructor() {
    this.defaultQuestion = new Question("Default question title");
   }

  ngOnInit(): void {
  }

}
