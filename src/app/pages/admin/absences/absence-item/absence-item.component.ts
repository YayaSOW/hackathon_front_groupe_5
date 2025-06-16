import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {Presence, PresenceResponseDto} from '../../../../shared/model/presence';
import {PresenceService} from '../../../../shared/services/impl/presence.service';
import {RestResponse} from '../../../../shared/model/restResponse';

@Component({
  selector: 'app-absence-item',
  imports: [],
  templateUrl: './absence-item.component.html',
  styleUrl: './absence-item.component.css'
})
export class AbsenceItemComponent implements OnInit {

  presence?: RestResponse<PresenceResponseDto> = {
    status: 200,
    results: {
      id: '',
      date: '',
      typePresence: '',
      nomCours: '',
      matricule: '',
      nom: '',
      prenom: ''
    },
    type: 'success',
    totalItems: 0,
  };

  constructor(private router: Router, private route: ActivatedRoute, private presenceService: PresenceService){}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? idParam : undefined;

    if (id !== undefined) {
      this.presenceService.getPresenceById(id).subscribe((data) => {
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
