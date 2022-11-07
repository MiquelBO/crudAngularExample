import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewUser, User } from '../../models/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'ce-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  user: NewUser | User = {
    name: '',
    birthDate: ''
  };

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');

    if (userId) {
      this.userService.getUser(userId).subscribe(
        user => this.user = user
      );
    }
  }

  saveChanges() {
    if (this.user.hasOwnProperty('id')) {
      this.userService.putUser(this.user as User).subscribe(
        _ => this.router.navigate(['/user/list'])
        
      );
    } else {
      this.userService.postUser(this.user as NewUser).subscribe(
        _ => this.router.navigate(['/user/list'])     
      );
    }
  }
}
