import { Location } from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {JustificatifResponseDto} from '../../../../shared/model/justificatif';
import {RestResponse} from '../../../../shared/model/restResponse';
import {JustificatifService} from '../../../../shared/services/impl/justificatif.service';

@Component({
  selector: 'app-absence-item-justificatif',
  imports: [],
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
      date: null,
      justificatif: []
    },
    type: 'success',
    totalItems: 0,
  };

  constructor(private router: Router, private route: ActivatedRoute, private justificatifService: JustificatifService, private location: Location) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? idParam : undefined;

    if (id !== undefined) {
      this.justificatifService.getJustificatifById(id).subscribe((data) => {
        this.justificatif = data;
        console.log(this.justificatif);
      });
    }
  }

  onRedirection(): void {
    this.location.back();
  }
}
