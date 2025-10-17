import { Component, input } from '@angular/core';
import { ContentGamesCarousel } from "../content-games-carousel/content-games-carousel";
import { ContentGamesFeatureGames } from "../content-games-feature-games/content-games-feature-games";

@Component({
  selector: 'app-content-games',
  imports: [ContentGamesCarousel, ContentGamesFeatureGames],
  templateUrl: './content-games.html',
  styleUrl: './content-games.scss'
})
export class ContentGames {

}
