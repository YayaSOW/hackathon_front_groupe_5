import { Component } from '@angular/core';
import {RetardTableComponent} from '../retard-table/retard-table.component';

@Component({
  selector: 'app-retard-list-page',
    imports: [
        RetardTableComponent,
    ],
  templateUrl: './retard-list-page.component.html',
  styleUrl: './retard-list-page.component.css'
})
export class RetardListPageComponent {

}
