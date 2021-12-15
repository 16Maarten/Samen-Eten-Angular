import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input, Directive, HostListener } from '@angular/core';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { StudenthomeService } from '../studenthome.service';
import { BehaviorSubject, of, Subscription } from 'rxjs';
import { StudenthomeCreateComponent } from './studenthome.create.component';
import { AuthenticationService } from '../../user/authentication.service';
import { Studenthome } from '../studenthome.model';
import { User } from '../../user/user.model';
import { FormsModule } from '@angular/forms';

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
    _id: undefined,
    name: "",
    streetName: "",
    houseNumber: 0,
    postalCode: "",
    residence: "",
    phoneNumber:"",
    owner: "619bdb5e3b174a700c923de8",
};

describe('StudenthomeCreateComponent', () => {
  let component: StudenthomeCreateComponent;
  let fixture: ComponentFixture<StudenthomeCreateComponent>;

  let studenthomeServiceSpy : jasmine.SpyObj<StudenthomeService>;
  let authenticationServiceSpy;
  let routerSpy;

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
        StudenthomeCreateComponent, 
        RouterLinkStubDirective, 
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

    fixture = TestBed.createComponent(StudenthomeCreateComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
  });


  it('should create', (done) => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(component.studenthome).toEqual(expectedStudenthome);
    done();
  });
});



