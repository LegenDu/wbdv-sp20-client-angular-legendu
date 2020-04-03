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
  @Input()
  graded
  @Input()
  answer
  @Output()
  answerChange = new EventEmitter<string>()
  submitted = false

  submitAnswer = () => {
    if (this.answer === '') {
      alert('Please select your answer before submit.');
    } else {
        this.answerChange.emit(this.answer);
        this.submitted = true;
    }
  }

  resetAnswer = () => {
    this.submitted = false;
  }

  ngOnInit(): void {
  }

}
