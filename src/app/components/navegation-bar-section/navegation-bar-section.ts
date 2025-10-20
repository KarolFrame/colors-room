import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navegation-bar-section',
  imports: [NgClass],
  templateUrl: './navegation-bar-section.html',
  styleUrl: './navegation-bar-section.scss'
})
export class NavegationBarSection {
  @Input() sectionName!: string;
  @Input() pathName!: string;
  @Input() inSection!: boolean;

  constructor(private router: Router) {}

  goToPath() {
    this.router.navigate([this.pathName]);
  }
}
