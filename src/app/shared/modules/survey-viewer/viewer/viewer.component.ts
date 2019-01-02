import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {
  SurveyEditModalComponent
} from '../survey-edit-modal/survey-edit-modal.component';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {
  @Input() viewerData: any;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
    console.log(this.viewerData);
  }

  /**
   * Input item edit button click event
   * @param edit any
   */
  inputItemEditClick(edit) {
    const modalRef = this.modalService.open(SurveyEditModalComponent);
    modalRef.componentInstance.name = 'World';
    console.log(edit);
  }

}
