import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { of } from 'rxjs';
import { USERS } from '../../models/mocks';
import { UserListItemComponent } from '../user-list-item/user-list-item.component';
import { RouterTestingModule } from '@angular/router/testing';

fdescribe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let router: Router;
  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        UserListComponent,
        UserListItemComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    userService = TestBed.get(UserService);
    router = TestBed.get(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call userService.getAllUsers() and initialize userList when ngOnInit is called', () => {
    spyOn(userService, 'getAllUsers').and.returnValue(of(USERS));
    component.userList = [];

    component.ngOnInit();

    expect(component.userList).toEqual(USERS);
  });

  it('should navigate to user/detail/:id when editUser is call', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.editUser(1234);
    expect(navigateSpy).toHaveBeenCalledWith (['users/edit/', 1234]);
  });
});
