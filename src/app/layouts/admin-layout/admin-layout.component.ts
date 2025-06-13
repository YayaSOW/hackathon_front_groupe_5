import { Component } from '@angular/core';
import {SidebarComponent} from '../../shared/components/sidebar/sidebar.component';
import {NavbarComponent} from '../../shared/components/navbar/navbar.component';
import {FooterComponent} from '../../shared/components/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  imports: [
    SidebarComponent, NavbarComponent, FooterComponent,RouterOutlet
  ],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {

}
