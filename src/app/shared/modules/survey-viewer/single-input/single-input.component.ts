import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-single-input',
  templateUrl: './single-input.component.html',
  styleUrls: ['./single-input.component.scss']
})
export class SingleInputComponent implements OnInit {
  @Output() edit = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  /**
   * Edit button click event lister function
   */
  editButtonClickEvent() {
    this.edit.emit(true);
  }

}
