import { Component, input } from '@angular/core';
import { ContentGamesFeatureGames } from "../content-games-feature-games/content-games-feature-games";

@Component({
  selector: 'app-content-games',
  imports: [ContentGamesFeatureGames],
  templateUrl: './content-games.html',
  styleUrl: './content-games.scss'
})
export class ContentGames {

}
