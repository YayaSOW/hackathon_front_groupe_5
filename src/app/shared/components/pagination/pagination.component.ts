import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-pagination',
  imports: [
    NgClass,
    NgIf
  ],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  @Input() currentPage: number = 0;
  @Input() totalPages: number = 1;

  @Output() pageChange = new EventEmitter<number>();

  goToPage(page: number): void {
    if (page >= 0 && page < this.totalPages) {
      this.pageChange.emit(page);
    }
  }

  get displayedPages(): (number | string)[] {
    const pages: (number | string)[] = [];

    if (this.totalPages <= 7) {
      // Affiche toutes les pages
      for (let i = 0; i < this.totalPages; i++) pages.push(i);
    } else {
      // Toujours afficher la première page
      pages.push(0);

      if (this.currentPage > 3) pages.push('...');

      const start = Math.max(1, this.currentPage - 1);
      const end = Math.min(this.totalPages - 2, this.currentPage + 1);

      for (let i = start; i <= end; i++) pages.push(i);

      if (this.currentPage < this.totalPages - 4) pages.push('...');

      // Toujours afficher la dernière page
      pages.push(this.totalPages - 1);
    }

    return pages;
  }

  isNumber(value: number | string): value is number {
    return typeof value === 'number';
  }

}
