import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input
} from '@angular/core';

import { IElement } from '../../../interface/ISurvey';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Output() edit = new EventEmitter<any>();
  @Input() element: IElement;

  constructor() {
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
