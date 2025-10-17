import { Component, OnInit } from '@angular/core';
import { ContentGamesFeatureGamesCard } from "../content-games-feature-games-card/content-games-feature-games-card";
import { Game, GameDataService } from '../../services/game-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-games-feature-games',
  imports: [ContentGamesFeatureGamesCard, CommonModule],
  templateUrl: './content-games-feature-games.html',
  styleUrl: './content-games-feature-games.scss'
})
export class ContentGamesFeatureGames implements OnInit {
  featuredGames: Game[] = [];

  constructor(private gameDataService: GameDataService){};

  ngOnInit(): void {
    this.featuredGames = this.gameDataService.getFeaturedGames();
  }
}
