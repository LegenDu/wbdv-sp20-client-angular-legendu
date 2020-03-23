import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  constructor() { }

  @Input()
  question = {_id: '', title: '', question: '', choices: '', correct: '', answer: ''}

  grading = false;
  answer = ''

  ngOnInit(): void {
  }
  grade = () => {
    if (this.answer !== '') {
      this.grading = true;
    } else {
      alert('Please answer the question before grading!');
    }
  }

}
