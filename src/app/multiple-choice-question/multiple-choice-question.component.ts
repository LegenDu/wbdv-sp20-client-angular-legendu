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
  submitted = false
  graded = false

  submitAnswer = () => {
    if (this.answer === '') {
      alert('Please select your answer before submit.');
    } else {
      this.answerChange.emit(this.answer);
      this.submitted = true;
      this.graded = true;
    }
  }

  resetAnswer = () => {
    this.submitted = false;
    this.graded = false;
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
