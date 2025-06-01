import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-absence-item',
  imports: [RouterLink],
  templateUrl: './absence-item.component.html',
  styleUrl: './absence-item.component.css'
})
export class AbsenceItemComponent {
  constructor(private router: Router){}

   onRedirection(){
    this.router.navigate(['absence']) }

}
