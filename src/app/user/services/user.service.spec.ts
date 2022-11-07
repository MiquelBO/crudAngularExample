import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

import { worker } from '../../../mocks/browser';
import { switchMap, tap } from 'rxjs';

fdescribe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ],
    providers: [
      UserService
    ]
  }));

  beforeAll(async () => {
    await worker.start()
  })

  afterEach(() => {
    worker.resetHandlers()
  })

  afterAll(() => {
    worker.stop();
  })

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
  it('should ...', (done) => {
    const service: UserService = TestBed.get(UserService);
   
    service.postUser({ name: 'irela', birthDate: '1/1/1980' }).pipe(
      switchMap( _ =>
        service.getAllUsers()
      ),
      tap(data => {
        expect(data.length).toEqual(2);
      }),
      switchMap( _ =>
        service.postUser({ name: 'jan', birthDate: '1/1/2020' })
      ),
      switchMap( _ =>
        service.getAllUsers()
      ),
      tap(data => {
        expect(data.length).toEqual(3);
      }),
      switchMap( _ =>
        service.postUser({ name: 'miquel', birthDate: '1/1/1977' })
      ),
      switchMap( _ =>
        service.getAllUsers()
      ),
      tap(data => {
        expect(data.length).toEqual(4);
      })
    ).subscribe( _ => done());
  });
});
