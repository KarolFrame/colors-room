import { Component, input } from '@angular/core';
import { ContentGamesCarousel } from "../content-games-carousel/content-games-carousel";

@Component({
  selector: 'app-content-games',
  imports: [ContentGamesCarousel],
  templateUrl: './content-games.html',
  styleUrl: './content-games.scss'
})
export class ContentGames {

}
