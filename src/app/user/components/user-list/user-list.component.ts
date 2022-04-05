import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'ce-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList: User[] = [];

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(
      (users: User[]) => this.userList = users
    );
  }

  editUser(id: number) {
    this.router.navigate(['users/edit/', id]);
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(
      (result: string) => {
        console.log(result);
        this.getAllUsers();
    });
  }

}
