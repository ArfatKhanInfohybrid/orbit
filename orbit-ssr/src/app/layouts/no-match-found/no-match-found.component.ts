import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-no-match-found',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './no-match-found.component.html',
  styleUrl: './no-match-found.component.scss'
})
export class NoMatchFoundComponent {

}
