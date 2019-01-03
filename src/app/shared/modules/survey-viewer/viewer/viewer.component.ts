import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

import { SurveyViewerService } from '../../../services/survey-viewer.service';
import {
  SurveyEditModalComponent
} from '../survey-edit-modal/survey-edit-modal.component';
import {
  SurveyDeleteModalComponent
} from '../survey-delete-modal/survey-delete-modal.component';
import { IElement } from '../../../interface/ISurvey';


@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss'],
  providers: [SurveyViewerService]
})
export class ViewerComponent implements OnInit {
  @Input() viewerData: any;
  private editSurveySubscription: Subscription;
  private deleteSurveySubscription: Subscription;

  constructor(
    private modalService: NgbModal,
    private surveyViewerService: SurveyViewerService
  ) {
    // Survey edit button click event
    this.editSurveySubscription = this.surveyViewerService.editSurvey$.subscribe(
      (element: IElement) => {
        console.log('Edit Survey', element)
        const modalRef = this.modalService.open(SurveyEditModalComponent);
        modalRef.componentInstance.name = element.type;
      }
    );

    // Survey delete button click event
    this.deleteSurveySubscription = this.surveyViewerService.deleteSurvey$.subscribe(
      (element: IElement) => {
        console.log('Delete Survey', element)
        const modalRef = this.modalService.open(SurveyDeleteModalComponent);
        modalRef.componentInstance.name = element.type;
      }
    );
  }

  ngOnInit() {
    console.log(this.viewerData);
  }

  ngOnDestroy(): void {
    this.editSurveySubscription.unsubscribe();
  }

}
