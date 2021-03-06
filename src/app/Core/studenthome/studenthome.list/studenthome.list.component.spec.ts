import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input, Directive, HostListener } from '@angular/core';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { StudenthomeService } from '../studenthome.service';
import { BehaviorSubject, of, Subscription } from 'rxjs';
import { StudenthomeListComponent } from './studenthome.list.component';
import { AuthenticationService } from '../../user/authentication.service';
import { Studenthome } from '../studenthome.model';
import { User } from '../../user/user.model';
import { FormsModule } from '@angular/forms';

@Component({ selector: 'app-alert', template: '' })
class AlertComponent {}

@Directive({
  selector: '[routerLink]',
})
export class RouterLinkStubDirective {
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  @HostListener('click')
  onClick(): void {
    this.navigatedTo = this.linkParams;
  }
}

const expectedUserData: User = {
  _id: "619bdb5e3b174a700c923de8",
  firstName: "Firstname", 
  lastName: "Lastname",
  studentNumber: 1111111,
  birthday: new Date("17-06-2002"),
  email: "user@host.com",
  token: "some.dummy.token",
  password: "secret"
};

const expectedStudenthome: Studenthome = {
    _id: "1",
    name: "Studentenvereniging Test",
    streetName: "lovensdijkstraat",
    houseNumber: 61,
    postalCode: "5634JF",
    residence: "Test",
    phoneNumber:"0693549674",
    owner: "619bdb5e3b174a700c923de8",
};

const expectedStudenthome2: Studenthome = {
    _id: "2",
    name: "Studentenvereniging Test2",
    streetName: "lovensdijkstraat",
    houseNumber: 61,
    postalCode: "5634JF",
    residence: "Test2",
    phoneNumber:"0693549674",
    owner: "619bdb5e3b174a700c923de8",
}
const expectedStudenthomes: Studenthome[] = [expectedStudenthome, expectedStudenthome2];

describe('StudenthomeEditComponent', () => {
  let component: StudenthomeListComponent;
  let fixture: ComponentFixture<StudenthomeListComponent>;

  let studenthomeServiceSpy : jasmine.SpyObj<StudenthomeService>;
  let authenticationServiceSpy;
  let routerSpy;

  /**
   *
   */
  beforeEach(() => {
    authenticationServiceSpy = jasmine.createSpyObj('authenticationServiceSpy', [
      'login',
      'register',
      'logout',
      'getUserFromLocalStorage',
      'saveUserToLocalStorage',
      'userEdit',
    ]);
    const mockUser$ = new BehaviorSubject<User>(expectedUserData);
    authenticationServiceSpy.currentUser$ = mockUser$;
    studenthomeServiceSpy = jasmine.createSpyObj('StudenthomeService', ['read', 'update', 'list']);
    routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
    TestBed.configureTestingModule({
      declarations: [
        StudenthomeListComponent,
        RouterLinkStubDirective, 
        AlertComponent
      ],
      imports: [FormsModule],
      providers: [
        { provide: AuthenticationService, useValue: authenticationServiceSpy },
        { provide: Router, useValue: routerSpy },
        { provide: StudenthomeService, useValue: studenthomeServiceSpy },
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(
              convertToParamMap({
                id: '619bdb5e3b174a700c923da3',
              })
            ),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(StudenthomeListComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', (done) => {
    studenthomeServiceSpy.list.and.returnValue(of(expectedStudenthomes));
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(component.studenthomes).toEqual(expectedStudenthomes);
    done();
  });
});



