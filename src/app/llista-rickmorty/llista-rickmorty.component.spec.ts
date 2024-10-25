import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { LlistaRickmortyComponent } from './llista-rickmorty.component';
import { RickmortyService } from './service/rickmorty-service.service'; 
import { ComponentFixture } from '@angular/core/testing'; 
import { HttpClientTestingModule } from '@angular/common/http/testing'; 

const respostaSimulada = {
  results: [
    { id: 1, name: 'guillem guille' },
    { id: 2, name: 'guillem espo' },
    { id: 3, name: 'guillem coro' }
  ]
};


function configurarEspia(service: RickmortyService ) {
  spyOn(service, 'getPersonatges').and.returnValue(of(respostaSimulada.results)); 
}

describe('LlistaRickmortyComponent', () => {
  let component: LlistaRickmortyComponent;
  let fixture: ComponentFixture<LlistaRickmortyComponent>;
  let service: RickmortyService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlistaRickmortyComponent ],
      providers: [ RickmortyService ],
      imports: [ HttpClientTestingModule ] 
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LlistaRickmortyComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(RickmortyService);
    fixture.detectChanges();
  });

  //verificacio si tenim obtenim noms
  it('verificacio de noms', () => {
    configurarEspia(service); 

    component.ngOnInit(); 
    fixture.detectChanges(); 

    const elements = fixture.nativeElement.querySelectorAll('li');
    expect(elements.length).toBe(respostaSimulada.results.length); 

   
    expect(elements[0]?.textContent).toBe('guillem guille'); 
    expect(elements[1]?.textContent).toBe('guillem espo'); 
    expect(elements[2]?.textContent).toBe('guillem coro'); 
  });
});
