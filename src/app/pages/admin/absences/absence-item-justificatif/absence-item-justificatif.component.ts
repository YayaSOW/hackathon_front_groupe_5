import {Location, NgClass, NgForOf, NgIf} from '@angular/common';
import {Component, OnInit, Injectable, signal, computed} from '@angular/core';
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
      });
    }
  }

  /* Carousel */
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

  /* Apercu plein écran carousel */
  previewImage: { url: string } | null = null;

  openPreview(image: { url: string }) {
    this.previewImage = image;
  }

  closePreview() {
    this.previewImage = null;
  }

  /* Traitement du justificatif */
  private statutTraitement = signal<"true" | "false" | null>(null);

  readonly traitementFait = computed(() => this.statutTraitement() !== null);
  readonly estAccepte = computed(() => this.statutTraitement() === "true");
  readonly estRejete = computed(() => this.statutTraitement() === "false");

  accepterJustificatif() {
    if (!this.traitementFait()) {
      this.statutTraitement.set("true");
      const statut: string = 'true';
      const adminId = this.adminId;

      this.justificatifService.traiterJustificatif(this.justificatifId, statut, adminId).subscribe({
        next: (res) => {
          console.log('Justificatif accepté avec succès', res);
        },
        error: (err) => {
          console.error('Erreur lors du traitement', err);
        }
      });

      this.onRedirectionAfter();

    }
  }

  rejeterJustificatif() {
    if (!this.traitementFait()) {
      this.statutTraitement.set("false");
      const statut: string = 'false';
      const adminId = this.adminId;

      this.justificatifService.traiterJustificatif(this.justificatifId, statut, adminId).subscribe({
        next: (res) => {
          console.log('Justificatif rejeté avec succès', res);
        },
        error: (err) => {
          console.error('Erreur lors du rejet', err);
        }
      });

      this.onRedirectionAfter();
    }

  }

  onRedirectionAfter(): void {
    this.router.navigate(['absence'])
  }
  // Redirection
  onRedirection(): void {
    this.location.back();
  }

}
