import { Component, Input, OnInit } from '@angular/core';
import { Choice } from 'src/app/datamodel/Choice';
import { Question } from 'src/app/datamodel/Question';

@Component({
  selector: 'app-question-edition',
  templateUrl: './question-edition.component.html',
  styleUrls: ['./question-edition.component.css']
})
export class QuestionEditionComponent implements OnInit {

  @Input('question')
  currentQuestion:Question = new Question("",[]);


  ngOnInit(): void {
  }

}
