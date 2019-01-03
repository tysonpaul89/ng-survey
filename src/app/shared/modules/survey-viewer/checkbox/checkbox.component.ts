import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import { IElement } from '../../../interface/ISurvey';
import { SurveyViewerService } from '../../../services/survey-viewer.service';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
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
