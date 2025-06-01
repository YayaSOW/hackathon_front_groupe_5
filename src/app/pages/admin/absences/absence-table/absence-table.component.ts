import {Component, OnInit} from '@angular/core';
import {Router } from '@angular/router';
import {NgForOf} from '@angular/common';
import {Presence } from '../../../../shared/model/presence';
import {PresenceService} from '../../../../shared/services/impl/presence.service';

@Component({
  selector: 'app-absence-table',
  imports: [ NgForOf],
  templateUrl: './absence-table.component.html',
  styleUrl: './absence-table.component.css'
})
export class AbsenceTableComponent implements OnInit {

  constructor(private router: Router, private presenceService: PresenceService){}

  presences: Presence[] = [];
  selectedType: string = 'ABSENT';


  ngOnInit(): void {
    this.filterByType();
  }

  filterByType(): void {
      this.presenceService.getPresencesByType(this.selectedType as any).subscribe(data => {
        this.presences = data;
      });
  }

  onViewDetails(id?: number) {
    if (id !== undefined) {
      this.router.navigateByUrl(`absence/${id}`);
    } else {
      console.error("ID d'absence non défini");
    }
  }

}
