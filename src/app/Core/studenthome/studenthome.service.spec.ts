import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { StudenthomeService } from './studenthome.service';
import { Studenthome } from './studenthome.model';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

const studenthomeExpected: Studenthome = {
    _id: "1",
    name: "Studentenvereniging Test",
    streetName: "lovensdijkstraat",
    houseNumber: 61,
    postalCode: "5634JF",
    residence: "Test",
    phoneNumber:"0693549674",
    owner:"5678qwer"
};

const studenthomeExpected2: Studenthome = {
    _id: "2",
    name: "Studentenvereniging Test2",
    streetName: "leidseplein",
    houseNumber: 45,
    postalCode: "5634GF",
    residence: "Test2",
    phoneNumber:"0694638745",
    owner:"1234qwer"
};

const studenthomesExpected: Studenthome[] = [studenthomeExpected, studenthomeExpected2];

describe('StudenthomeService', () => {
  let service: StudenthomeService;
  let httpSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpSpy = jasmine.createSpyObj('HttpClient', [
      'post',
      'get',
      'put',
      'delete',
    ]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [{ provide: HttpClient, useValue: httpSpy }],
    });

    service = TestBed.inject(StudenthomeService);
    httpSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Create
  it('should create a new studenthome', (done: DoneFn) => {
    const newStudenthome: Studenthome = studenthomeExpected;
    httpSpy.post.and.returnValue(of(studenthomeExpected));
    service.create(newStudenthome).subscribe((studenthome: Studenthome) => {
      expect(studenthomeExpected._id).toEqual(studenthome._id);
      expect(studenthomeExpected.name).toEqual(studenthome.name);
      done();
    });
  });

  // Read all
  it('should return a list of studenthomes', (done: DoneFn) => {
    httpSpy.get.and.returnValue(of(studenthomesExpected));
    console.log();
    service.list().subscribe((studenthomes) => {
      if (studenthomes) {
        expect(studenthomes.length).toBe(2);
        expect(studenthomes[0]._id).toEqual(studenthomesExpected[0]._id);
      }
      expect(studenthomes?.length).toBe(2);
      done();
    });
  });

  // Read one
  it('should return one studenthome', (done: DoneFn) => {
    httpSpy.get.and.returnValue(of(studenthomeExpected));

    service.read('5678qwer').subscribe((studenthome: Studenthome) => {
      expect(studenthome._id).toEqual(studenthomeExpected._id);
      expect(studenthome.name).toEqual(studenthomeExpected.name);
      expect(studenthome.houseNumber).toEqual(studenthomeExpected.houseNumber);
      expect(studenthome.streetName).toEqual(studenthomeExpected.streetName);
      expect(studenthome.postalCode).toEqual(studenthomeExpected.postalCode);
      expect(studenthome.owner).toEqual(studenthomeExpected.owner);
      expect(studenthome.residence).toEqual(studenthomeExpected.residence);
      expect(studenthome.phoneNumber).toEqual(studenthomeExpected.phoneNumber);
      done();
    });
  });

  // Update
  it('should update an existing studenthome', (done: DoneFn) => {
    let newStudenthome: Studenthome = {
      _id: studenthomeExpected2._id,
      name: 'Studentenvereniging Test3',
      streetName: "ergens",
      houseNumber: 55,
      postalCode: "5634GF",
      residence: "Test2",
      phoneNumber:"0694638745",
      owner:"1234qwer"
    };

    httpSpy.put.and.returnValue(of(newStudenthome));

    service.update(newStudenthome).subscribe((studenthome: Studenthome) => {
      expect(studenthome._id).toEqual(studenthomeExpected2._id);
      expect(studenthome.name).toEqual(newStudenthome.name);
      expect(studenthome.streetName).toEqual(newStudenthome.streetName);
      expect(studenthome.houseNumber).toEqual(newStudenthome.houseNumber);
      expect(studenthome.postalCode).toEqual(studenthomeExpected2.postalCode);
      expect(studenthome.phoneNumber).toEqual(studenthomeExpected2.phoneNumber);
      expect(studenthome.residence).toEqual(studenthomeExpected2.residence);
      expect(studenthome.owner).toEqual(studenthomeExpected2.owner);
      done();
    });
  });

  // Delete
  it('should delete an existing studenthome', (done: DoneFn) => {
    httpSpy.delete.and.returnValue(of(studenthomeExpected));

    service.delete('5678qwer').subscribe((studenthome: Studenthome) => {
      expect(studenthome._id).toBe(studenthomeExpected._id);
      done();
    });
  });
});

