import { Component, OnInit } from '@angular/core';
import { GameDataService } from '../../services/game-data';
import { Game } from '../../services/game-data';

@Component({
  selector: 'app-header-notification',
  imports: [],
  templateUrl: './header-notification.html',
  styleUrl: './header-notification.scss'
})
export class HeaderNotification implements OnInit{
  echoesLink:string = "";
  games: Game[] = [];
  constructor(private gamedataServices:GameDataService){}

  ngOnInit(): void {
    this.games = this.gamedataServices.getFeaturedGames();
    const echoesGame = this.games.find(game => game.name=="Echoes Of Night");
    this.echoesLink = echoesGame ? echoesGame.link : "";
  }
}
