import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
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
