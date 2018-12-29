import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-builder-page',
  templateUrl: './builder-page.component.html',
  styleUrls: ['./builder-page.component.scss']
})
export class BuilderPageComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private ratingConfig: NgbRatingConfig
  ) {
    // Rating max
    this.ratingConfig.max = 5;
  }

  ngOnInit() {
  }

  /**
   * To open the survey input edit modal
   * @param content
   */
  openSurveyInputEditModal(content) {
    this.modalService.open(content, { size: 'sm' });
  }

}
