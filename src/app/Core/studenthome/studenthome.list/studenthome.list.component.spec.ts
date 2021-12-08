import { ComponentFixture, TestBed } from "@angular/core/testing"
import { StudenthomeListComponent } from "./studenthome.list.component"
import { StudenthomeService } from "../studenthome.service"
import { Studenthome } from "../studenthome.model"
import { ActivatedRoute } from "@angular/router"
import { RouterTestingModule } from "@angular/router/testing"


describe('StudenthomeListComponent', () => {
  let component: StudenthomeListComponent
  let fixture: ComponentFixture<StudenthomeListComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudenthomeListComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(StudenthomeListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create component', () => {
    expect(component).toBeTruthy()
  })

  it('should contain studenthomes', async () => {
    component.ngOnInit()
    component.studenthomes = []
    expect(component.studenthomes.length).toBe(0)
    const name = 'Studentenvereniging Test'
    component.studenthomes.push({
        _id: "1",
        name: "Studentenvereniging Test",
        streetName: "lovensdijkstraat",
        houseNumber: 61,
        postalCode: "5634JF",
        residence: "Test",
        phoneNumber:"0693549674",
        owner:""
    })
    expect(component.studenthomes.length).toBe(1)
    expect(component.studenthomes[0].name).toBe(name)

  })
})