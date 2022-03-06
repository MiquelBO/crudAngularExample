import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user.interface';

@Component({
  selector: 'ce-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent implements OnInit {

  @Input() user: User | undefined;
  @Output() clickEdit: EventEmitter<number> = new EventEmitter();
  @Output() clickDelete: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  editUser(id: number) {
    this.clickEdit.emit(id);
  }

  deleteUser(id: number) {
    this.clickDelete.emit(id);
  }

}
