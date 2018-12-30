import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  NgbRatingConfig
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {
  @Input() viewerData: any;

  constructor(
    private modalService: NgbModal,
    private ratingConfig: NgbRatingConfig
  ) {
    // Rating max
    this.ratingConfig.max = 5;
  }

  ngOnInit() {
    console.log(this.viewerData);
  }


  /**
   * To open the survey input edit modal
   * @param content
   */
  openSurveyInputEditModal(content) {
    this.modalService.open(content, { size: 'sm' });
  }

}
