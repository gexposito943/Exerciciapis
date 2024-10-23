import { TestBed } from '@angular/core/testing';
import { RickmortyServiceService } from './rickmorty-service.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RickmortyServiceService', () => {
  let service: RickmortyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RickmortyServiceService]
    });
    service = TestBed.inject(RickmortyServiceService);
  });
  
  it('hauria de carregar tots els personatges', () => {
    const respostaSimulada = {
      results: [
        { id: 1, name: 'guillem guille' },
        { id: 2, name: 'guillem espo' },
        { id: 3, name: 'guillem coro' }
      ]
    };

    spyOn(service, 'getPersonatges').and.returnValue(of(respostaSimulada.results)); 

    service.getPersonatges().subscribe((data) => {
      expect(data.length).toBe(respostaSimulada.results.length); 
    });
  });
    
});
