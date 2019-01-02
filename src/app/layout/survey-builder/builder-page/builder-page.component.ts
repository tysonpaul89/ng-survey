import { Component, OnInit } from '@angular/core';

import { IPage, questions } from '../../../shared/interface/ISurvey';

@Component({
  selector: 'app-builder-page',
  templateUrl: './builder-page.component.html',
  styleUrls: ['./builder-page.component.scss']
})
export class BuilderPageComponent implements OnInit {
  private idCounter = 1;
  public surveyData: IPage[] = questions;

  constructor() {}

  ngOnInit() {
  }

  /**
   * To add a new tab
   */
  addNewTab() {
    // Gets the current order count
    this.idCounter = this.surveyData[this.surveyData.length - 1]['order'];
    this.idCounter++;

    this.surveyData = this.surveyData.concat({
      id: 'page-' + this.getTabId(),
      title: 'Page' + this.idCounter,
      order: this.idCounter,
      elements: []
    });
  }

  /**
   * To delete a tab
   * @param pageId Page id
   */
  deleteTab(pageId, $event) {
    $event.preventDefault();

    // Filters the deleted page object from the survey data
    const filteredData: IPage[] = this.surveyData.filter(
      (page: IPage): boolean => page.id !== pageId
    );

    // Re-indexes the page order and title label data
    filteredData.map(
      (page: IPage, index: number) => {
        page.title = 'Page ' + (index + 1);
        page.order = index + 1;
      }
    );

    // applies filtering to the survey data
    this.surveyData = filteredData;
  }

  /**
   * Generate a unique integer
   * @returns number
   */
  getTabId() {
    return new Date().getTime();
  }

}
