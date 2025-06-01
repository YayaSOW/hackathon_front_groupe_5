import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SecurityComponent } from '../../pages/security/security.component';


@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet, SecurityComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css'
})
export class AuthLayoutComponent {

}
