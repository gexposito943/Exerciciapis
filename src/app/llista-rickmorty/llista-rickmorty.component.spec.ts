import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LlistaRickmortyComponent } from './llista-rickmorty.component';
import { of } from 'rxjs'; 

describe('LlistaRickmortyComponent', () => {
  let component: LlistaRickmortyComponent;
  let fixture: ComponentFixture<LlistaRickmortyComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [LlistaRickmortyComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(LlistaRickmortyComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges(); 
  });

  it('hauria de carregar tots els personatges', () => {
    const respostaSimulada = {
      results: [ 
        { id: 1, name: 'guillem guille' },
        { id: 2, name: 'guillem espo' },
        { id: 3, name: 'guillem coro' }
      ]
    };

    spyOn(component, 'getPersonatges').and.returnValue(of(respostaSimulada.results));
    
    component.ngOnInit(); 
    fixture.detectChanges(); 

    expect(component.personatges.length).toBe(respostaSimulada.results.length);
    
    httpMock.verify();
  });
});
