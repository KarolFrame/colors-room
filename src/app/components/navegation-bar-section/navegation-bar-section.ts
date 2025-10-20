import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { PathDataService } from '../../services/path-data';


@Component({
  selector: 'app-navegation-bar-section',
  imports: [NgClass],
  standalone: true,
  templateUrl: './navegation-bar-section.html',
  styleUrl: './navegation-bar-section.scss'
})
export class NavegationBarSection {
  @Input() sectionName!: string;
  @Input() pathName!: string;
  @Input() inSection!: boolean;

  constructor(private router: Router, private pathServices: PathDataService) {}

  goToPath() {
    this.pathServices.setActivePath(this.pathName);
    this.router.navigate([this.pathName]);
  }
}
