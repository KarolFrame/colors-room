import { Component, OnInit } from '@angular/core';
import { ContentGamesFeatureGamesCard } from "../content-games-feature-games-card/content-games-feature-games-card";
import { Game, GameDataService } from '../../services/game-data';
import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-games-feature-games',
  imports: [ContentGamesFeatureGamesCard, CommonModule],
  templateUrl: './content-games-feature-games.html',
  styleUrl: './content-games-feature-games.scss',
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        query('*', [
          style({ transform: 'translateX(-100%)', opacity: 0 })
        ], { optional: true }),
        query('*', [
          stagger('300ms', [
            animate('800ms cubic-bezier(0.25, 0.8, 0.5, 1)', style({ transform: 'translateX(0)', opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ContentGamesFeatureGames implements OnInit {
  show = false;
  featuredGames: Game[] = [];

  constructor(private gameDataService: GameDataService){};

  ngOnInit(): void {
    this.show = true;
    this.featuredGames = this.gameDataService.getFeaturedGames();
  }
}
