import { Component } from '@angular/core';
import {Presence} from '../../../../shared/model/presence';
import {PresenceService} from '../../../../shared/services/impl/presence.service';
import {NgForOf} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-retard-table',
  imports: [
    NgForOf
  ],
  templateUrl: './retard-table.component.html',
  styleUrl: './retard-table.component.css'
})
export class RetardTableComponent {
  constructor(private router: Router, private presenceService: PresenceService){}

  presences: Presence[] = [];
  selectedType: string = 'RETARD';


  ngOnInit(): void {
    this.filterByType();
  }

  filterByType(): void {
    this.presenceService.getPresencesByType(this.selectedType as any).subscribe(data => {
      this.presences = data;
    });
  }

}
