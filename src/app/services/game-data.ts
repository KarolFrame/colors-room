import { Injectable } from '@angular/core';

export type BorderColorType = 'blue' | 'pink' | 'purple';

export interface Game{
  name:string;
  description: string;
  img: string;
  link: string;
  platform: string;
  target: string;
  state: string;
  video: string;
  genre: string;
  borderColorOption: BorderColorType;
}

@Injectable({
  providedIn: 'root'
})
export class GameDataService {
  games: Game[] = [
    {
      name:"Echoes Of Night",
      description:"",
      img:"/assets/img/banners/eonBanner.png",
      link:"https://store.steampowered.com/app/3576720/Echoes_Of_Night_The_Exodus_of_the_Stars/?l=latam",
      platform:"PC | SteamDeck",
      target: "+8",
      state: "DEMO",
      video: "",
      genre: "Platform | Action | 2D",
      borderColorOption:"purple",
    },
    {
      name:"Veronica",
      description:"",
      img:"/assets/img/banners/veronicaBanner.png",
      link:"https://colorsroom.itch.io/veronica",
      platform:"PC",
      target: "",
      state: "DEMO",
      video: "",
      genre: "TERROR",
      borderColorOption:"pink",
    },
    {
      name:"Golden Carrot",
      description:"",
      img:"https://img.itch.zone/aW1nLzE5ODIyMDkwLnBuZw==/315x250%23c/4NLeue.png",
      link:"https://colorsroom.itch.io/golden-carrot",
      platform:"",
      target: "",
      state: "",
      video: "",
      genre: "",
      borderColorOption:"blue",
    }
  ];

  constructor(){};

  getFeaturedGames(): Game[]{
    return this.games;
  }
}
