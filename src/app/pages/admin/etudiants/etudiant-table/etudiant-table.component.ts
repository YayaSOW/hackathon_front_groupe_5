import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Etudiant} from '../../../../shared/model/etudiant';
import {EtudiantService} from '../../../../shared/services/impl/etudiant.service';

@Component({
  selector: 'app-etudiant-table',
  imports: [CommonModule],
  templateUrl: './etudiant-table.component.html',
  styleUrl: './etudiant-table.component.css',
})
export class EtudiantTableComponent implements OnInit {
  etudiants: Etudiant[] = [];

  constructor(private etudiantService: EtudiantService) {
  }

  ngOnInit(): void {
    this.etudiantService.getEtudiants().subscribe(data => {
      this.etudiants = data;
    });
  }
}
