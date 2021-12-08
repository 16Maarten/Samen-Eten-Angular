import { TestBed } from '@angular/core/testing';
import { StudenthomeService } from './studenthome.service';
import { Studenthome } from './studenthome.model';

/*describe('StudenthomeService', () => {
  let service: StudenthomeService;

  beforeEach(() => {
      TestBed.configureTestingModule({})
      service = TestBed.inject(StudenthomeService)
      service.studenthomes = []
      
      service.createStudenthome({
        id: "1",
        name: "Studentenvereniging Test",
        streetName: "lovensdijkstraat",
        houseNumber: 61,
        postalCode: "5634JF",
        residence: "Test",
        phoneNumber:"0693549674"
      })
      service.createStudenthome({
        id: "2",
        name: "Studentenvereniging Test2",
        streetName: "leidseplein",
        houseNumber: 45,
        postalCode: "5634GF",
        residence: "Test2",
        phoneNumber:"0694638745"
      })
  })

  it('should create the studenthome service', () => {
      expect(service).toBeTruthy()
  })
  
  it('should create a new studenthome with id 3', () => {
      expect(service.getStudenthomes().length).toBe(2)
      const newId = service.getNewId()
      const newStudenthome: Studenthome = {
          id: newId,
          name: "Studentenvereniging Test3",
          streetName: "leidseplein",
          houseNumber: 45,
          postalCode: "5634GF",
          residence: "Test3",
          phoneNumber:"0694638745"
      }
      service.createStudenthome(newStudenthome)
      expect(service.getStudenthomes().length).toBe(3)
      expect(service.getStudenthomeById(newId)?.id).toBe(newId)
  })

 
  it('should return all studenthomes', () => {
      expect(service.getStudenthomes().length).toBe(2)
  })

  it('should return a studenthome with the id of 1 and a name of Studentenvereniging Test', () => {
      expect(service.getStudenthomeById("1")?.name).toBe("Studentenvereniging Test")
      expect(service.getStudenthomeById("1")?.id).toBe("1")
  })

  
  it('should update the name of studenthome with id 1 to Studentenvereniging Update', () => {
      expect(service.getStudenthomeById("1")?.name).toBe('Studentenvereniging Test')
      const updateId = "1"
      const updatedStudenthome: Studenthome = {
          id: updateId,
          name: "Studentenvereniging Update",
          streetName: "lovensdijkstraat",
          houseNumber: 61,
          postalCode: "5634JF",
          residence: "Test",
          phoneNumber:"0693549674"
      }
      service.updateStudenthome(updatedStudenthome)

      expect(service.getStudenthomeById(updateId)?.name).toBe('Studentenvereniging Update')
  })

  
  it('should delete studenthome with id 1', () => {
      service.removeStudenthome("1")
      expect(service.getStudenthomes().length).toBe(1)
  })
});*/
