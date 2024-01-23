import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-compontents',
  templateUrl: './button-compontents.component.html',
  styleUrls: ['./button-compontents.component.scss'],
})
export class ButtonCompontentsComponent {
  constructor(private router: Router) {}

  iniciarSesion() {
    this.router.navigate(['/home']);
  }
}
