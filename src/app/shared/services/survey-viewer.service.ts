import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IElement } from '../interface/ISurvey';

@Injectable()
export class SurveyViewerService {
  private editSurveySource = new Subject<IElement>();
  public editSurvey$ = this.editSurveySource.asObservable();

  private deleteSurveySource = new Subject<IElement>();
  public deleteSurvey$ = this.deleteSurveySource.asObservable();

  constructor() { }

  /**
   * Method to open survey editor modal
   * @param element
   */
  surveyEditClick(element: IElement) {
    this.editSurveySource.next(element)
  }

  /**
   * Method to open survey editor modal
   * @param element
   */
  surveyDeleteClick(element: IElement) {
    this.deleteSurveySource.next(element)
  }
}
