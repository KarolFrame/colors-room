import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navegation-bar-section',
  imports: [NgClass],
  templateUrl: './navegation-bar-section.html',
  styleUrl: './navegation-bar-section.scss'
})
export class NavegationBarSection {
  @Input() sectionName!: string;
  @Input() inSection!: boolean;
}
