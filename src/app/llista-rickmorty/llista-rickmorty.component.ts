import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-llista-rickmorty',
  templateUrl: './llista-rickmorty.component.html',
  styleUrls: ['./llista-rickmorty.component.css']
})
export class LlistaRickmortyComponent implements OnInit {
  personatges: any[] = []; 
  selectedCharacter: any;

  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.carregaPersonatges();
  }

  carregaPersonatges(): void {
    this.http.get<any>(this.apiUrl).subscribe(data => {
      this.personatges = data.results;
    });
  }
}
