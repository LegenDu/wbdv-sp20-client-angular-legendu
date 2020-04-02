import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  constructor() { }

  @Input()
  question
  @Input()
  answer
  @Output()
  answerChange = new EventEmitter<string>()
  grading = false;

  submitAnswer = () => {
    this.answerChange.emit(this.answer)
    this.grading = true
  }

  ngOnInit(): void {
  }
  // grade = () => {
  //   if (this.answer !== '') {
  //     this.grading = true;
  //   } else {
  //     alert('Please answer the question before grading!');
  //   }
  // }

}
