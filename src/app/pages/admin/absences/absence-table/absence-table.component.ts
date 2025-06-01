import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-absence-table',
  imports: [RouterLink],
  templateUrl: './absence-table.component.html',
  styleUrl: './absence-table.component.css'
})
export class AbsenceTableComponent {

  constructor(private router: Router){}

  onViewDetails(){
    this.router.navigateByUrl('item');
  }
}
