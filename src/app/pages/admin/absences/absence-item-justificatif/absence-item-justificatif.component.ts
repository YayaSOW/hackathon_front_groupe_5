import {Location, NgClass, NgForOf, NgIf} from '@angular/common';
import {Component, OnInit, Injectable} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {JustificatifResponseDto} from '../../../../shared/model/justificatif';
import {RestResponse} from '../../../../shared/model/restResponse';
import {JustificatifService} from '../../../../shared/services/impl/justificatif.service';
import {AuthService} from "../../../../shared/services/impl/auth.service";

@Component({
  selector: 'app-absence-item-justificatif',
  imports: [
    NgForOf,
    NgClass,
    NgIf
  ],
  templateUrl: './absence-item-justificatif.component.html',
  styleUrl: './absence-item-justificatif.component.css'
})
export class AbsenceItemJustificatifComponent implements OnInit{
  adminId: string = '';
  justificatifId: string = '';
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
      files: [],
      presenceId: ''
    },
    type: 'success',
    totalItems: 0,
  };

  constructor(private router: Router, private route: ActivatedRoute, private justificatifService: JustificatifService, private location: Location, private authService: AuthService) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? idParam : undefined;

    const currentUser = this.authService.getCurrentUser();
    if (currentUser && currentUser.role === 'ADMIN') {
      this.adminId = currentUser.id;
    } else {
      console.warn("Aucun administrateur connecté.");
    }

    if (id !== undefined) {
      this.justificatifService.getJustificatifByPresenceId(id).subscribe((data) => {
        this.justificatif = data;

        this.justificatifId = data.results?.id || '';
        console.log(this.justificatifId);
      });
    }
  }
  currentIndex = 0;

  showCarousel = false;

  toggleCarousel() {
    this.showCarousel = !this.showCarousel;
  }

  get imagesLength(): number {
    return this.justificatif?.results?.files?.length || 0;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.imagesLength;
  }

  previous() {
    this.currentIndex = (this.currentIndex - 1 + this.imagesLength) % this.imagesLength;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  accepterJustificatif() {
    const statut: string = 'true';
    const adminId = this.adminId;

    this.justificatifService.traiterJustificatif(this.justificatifId, adminId, statut).subscribe({
      next: (res) => {
        console.log('Justificatif accepté avec succès', res);
      },
      error: (err) => {
        console.error('Erreur lors du traitement', err);
      }
    });
  }

  rejeterJustificatif() {
    const statut: string = 'false';
    const adminId = this.adminId;

    this.justificatifService.traiterJustificatif(this.justificatifId, adminId, statut).subscribe({
      next: (res) => {
        console.log('Justificatif rejeté avec succès', res);
      },
      error: (err) => {
        console.error('Erreur lors du rejet', err);
      }
    });
  }

  onRedirection(): void {
    this.location.back();
  }
}
