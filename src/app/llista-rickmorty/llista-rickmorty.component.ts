import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RickmortyService } from '../llista-rickmorty/service/rickmorty-service.service'; 

@Component({
  selector: 'app-llista-rickmorty',
  templateUrl: './llista-rickmorty.component.html',
  styleUrls: ['./llista-rickmorty.component.css']
})

export class LlistaRickmortyComponent implements OnInit {
  personatges: any[] = []; 
  selectedCharacter: any;

  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient, private rickmortyService: RickmortyService) { 
    
  }

  ngOnInit() {
    this.rickmortyService.getPersonatges().subscribe(data => {
      this.personatges = data;
    });
  }
}
