import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  constructor() { }

  @Input()
  question
  grading = false;
  @Input()
  answer
  @Output()
  answerChange = new EventEmitter<string>()

  submitAnswer = () => {
    if (this.answer === '') {
      alert('Please select your answer before submit.')
    } else {
        this.answerChange.emit(this.answer)
        this.grading = true
    }
  }

  ngOnInit(): void {
  }
  // grade = () => {
  //   if (this.answer !== '') {
  //     this.grading = true;
  //   } else {
  //     alert('Please answer the question before grading!')
  //   }
  // }
}
