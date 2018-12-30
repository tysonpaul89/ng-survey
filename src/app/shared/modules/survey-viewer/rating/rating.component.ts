import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {
  NgbRatingConfig
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Output() edit = new EventEmitter<any>();

  constructor(private ratingConfig: NgbRatingConfig) {
    // Rating max
    this.ratingConfig.max = 5;
  }

  ngOnInit() {
  }

  /**
   * Edit button click event lister function
   */
  editButtonClickEvent() {
    this.edit.emit(true);
  }

}
