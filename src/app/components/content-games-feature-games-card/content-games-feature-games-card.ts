import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-content-games-feature-games-card',
  imports: [NgClass],
  templateUrl: './content-games-feature-games-card.html',
  styleUrl: './content-games-feature-games-card.scss'
})
export class ContentGamesFeatureGamesCard {
  @Input() cardName!: string;
  @Input() cardImg!: string;
  @Input() borderColor: 'blue' | 'pink' | 'purple' = 'purple';
}
