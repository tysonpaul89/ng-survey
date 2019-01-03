import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-survey-delete-modal',
  templateUrl: './survey-delete-modal.component.html',
  styleUrls: ['./survey-delete-modal.component.scss']
})
export class SurveyDeleteModalComponent implements OnInit {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
