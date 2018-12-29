import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbRatingConfig, NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';

import { ITab } from '../../../shared/interface/ITab';

@Component({
  selector: 'app-builder-page',
  templateUrl: './builder-page.component.html',
  styleUrls: ['./builder-page.component.scss']
})
export class BuilderPageComponent implements OnInit {
  private idCounter = 1;
  public tabs: ITab[] = [];

  constructor(
    private modalService: NgbModal,
    private ratingConfig: NgbRatingConfig
  ) {
    // Rating max
    this.ratingConfig.max = 5;
  }

  ngOnInit() {
    this.tabs.push({
      id: 'page-' + this.getTabId(),
      title: 'Page ' + this.idCounter,
      content: null
    });
  }

  /**
   * To open the survey input edit modal
   * @param content
   */
  openSurveyInputEditModal(content) {
    this.modalService.open(content, { size: 'sm' });
  }

  /**
   * To add a new tab
   */
  addNewTab() {
    ++this.idCounter;

    this.tabs = this.tabs.concat({
      id: 'page-' + this.getTabId(),
      title: 'Page ' + this.idCounter,
      content: null
    });
  }

  /**
   * To delete a tab
   * @param tabId Tab id
   */
  deleteTab(tabId, $event) {
    $event.preventDefault();
    const result: ITab[] = this.tabs.filter(
      (tab: ITab): boolean => tab.id !== tabId
    );
    result.map(
      (tab: ITab, i: number) => tab.title = 'Page ' + (i + 1)
    );
    this.tabs = result;
  }

  /**
   * Generate a unique integer
   * @returns number
   */
  getTabId() {
    return new Date().getTime();
  }

}
