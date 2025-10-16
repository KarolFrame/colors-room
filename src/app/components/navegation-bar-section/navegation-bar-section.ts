import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navegation-bar-section',
  imports: [],
  templateUrl: './navegation-bar-section.html',
  styleUrl: './navegation-bar-section.scss'
})
export class NavegationBarSection {
  @Input() sectionName!: string;
}
