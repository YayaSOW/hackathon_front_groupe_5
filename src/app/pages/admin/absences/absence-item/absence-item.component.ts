import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {PresenceService} from '../../../../shared/mock/services/presence.service';
import {Presence} from '../../../../shared/model/presence';

@Component({
  selector: 'app-absence-item',
  imports: [],
  templateUrl: './absence-item.component.html',
  styleUrl: './absence-item.component.css'
})
export class AbsenceItemComponent implements OnInit {
  presence?: Presence;

  constructor(private router: Router, private route: ActivatedRoute, private presenceService: PresenceService){}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? idParam : undefined;

    if (id !== undefined) {
      this.presenceService.getPresencesById(id).subscribe((data) => {
        this.presence = data;
      });
    }
  }

  onViewJustificatif(id?: string) {
    if (id !== undefined) {
      this.router.navigateByUrl(`absence/${id}/justificatif`);
    } else {
      console.error("ID d'absence non défini");
    }
  }

 onRedirection(){
  this.router.navigate(['absence']) }

}
