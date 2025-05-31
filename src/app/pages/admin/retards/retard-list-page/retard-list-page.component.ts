import { Component } from '@angular/core';
import {PaginationComponent} from "../../../../shared/components/pagination/pagination.component";
import {RetardFiltersComponent} from '../retard-filters/retard-filters.component';
import {RetardTableComponent} from '../retard-table/retard-table.component';

@Component({
  selector: 'app-retard-list-page',
    imports: [
        RetardFiltersComponent,
        RetardTableComponent,
        PaginationComponent
    ],
  templateUrl: './retard-list-page.component.html',
  styleUrl: './retard-list-page.component.css'
})
export class RetardListPageComponent {

}
