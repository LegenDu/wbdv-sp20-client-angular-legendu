import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  constructor() { }

  @Input()
  question = {_id: '', title: '', question: '', answer: '', correct: ''};
  grading = false;
  answer = ''
  ngOnInit(): void {
  }
  grade = () => {
    if (this.answer !== '') {
      this.grading = true;
    } else {
      alert('Please answer the question before grading!')
    }
  }
}
