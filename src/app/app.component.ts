import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LlistaRickmortyComponent } from './llista-rickmorty/llista-rickmorty.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LlistaRickmortyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exerciciapis';
}
