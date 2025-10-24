import { Component, input, OnInit } from '@angular/core';
import { ContentGamesFeatureGames } from "../content-games-feature-games/content-games-feature-games";
import { PathDataService } from '../../services/path-data';

@Component({
  selector: 'app-content-games',
  imports: [ContentGamesFeatureGames],
  templateUrl: './content-games.html',
  styleUrl: './content-games.scss'
})
export class ContentGames implements OnInit{
  constructor(private pathServices:PathDataService){}
  ngOnInit(): void {
    this.pathServices.setActivePath("/games");
  }
}
