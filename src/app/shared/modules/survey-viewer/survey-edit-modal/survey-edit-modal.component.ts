import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-survey-edit-modal',
  templateUrl: './survey-edit-modal.component.html',
  styleUrls: ['./survey-edit-modal.component.scss']
})
export class SurveyEditModalComponent implements OnInit {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
