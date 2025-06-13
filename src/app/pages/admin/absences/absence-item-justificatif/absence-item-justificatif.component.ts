import {Location, NgForOf} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {JustificatifResponseDto} from '../../../../shared/model/justificatif';
import {RestResponse} from '../../../../shared/model/restResponse';
import {JustificatifService} from '../../../../shared/services/impl/justificatif.service';

@Component({
  selector: 'app-absence-item-justificatif',
  imports: [
    NgForOf
  ],
  templateUrl: './absence-item-justificatif.component.html',
  styleUrl: './absence-item-justificatif.component.css'
})
export class AbsenceItemJustificatifComponent implements OnInit{

  justificatif?: RestResponse<JustificatifResponseDto> = {
    status: 200,
    results: {
      id: '',
      motif: '',
      validation: false,
      nom: '',
      prenom: '',
      matricule: '',
      classe: '',
      date: null,
      files: []
    },
    type: 'success',
    totalItems: 0,
  };

  constructor(private router: Router, private route: ActivatedRoute, private justificatifService: JustificatifService, private location: Location) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? idParam : undefined;

    if (id !== undefined) {
      this.justificatifService.getJustificatifByPresenceId(id).subscribe((data) => {
        this.justificatif = data;
        console.log(this.justificatif.results);
      });
    }
  }

  onRedirection(): void {
    this.location.back();
  }
}
