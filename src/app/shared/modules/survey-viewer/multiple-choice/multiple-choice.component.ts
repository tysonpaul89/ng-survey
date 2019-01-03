import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input
} from '@angular/core';

import { IElement } from '../../../interface/ISurvey';
import { SurveyViewerService } from '../../../services/survey-viewer.service';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.scss']
})
export class MultipleChoiceComponent implements OnInit {
  @Output() edit = new EventEmitter<any>();
  @Input() element: IElement;

  constructor(
    private surveyViewerService: SurveyViewerService
  ) { }

  ngOnInit() {
  }

  /**
   * Edit button click event lister function
   */
  editButtonClickEvent() {
    this.surveyViewerService.surveyEditClick(this.element);
  }

  /**
   * Delete button click event lister function
   */
  deleteButtonClickEvent() {
    this.surveyViewerService.surveyDeleteClick(this.element);
  }

}
