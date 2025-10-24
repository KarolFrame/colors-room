import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-games-feature-games-card',
  templateUrl: './content-games-feature-games-card.html',
  styleUrl: './content-games-feature-games-card.scss'
})
export class ContentGamesFeatureGamesCard {
  @Input() cardName!: string;
  @Input() cardImg!: string;
  @Input() cardLink!: string;
}
