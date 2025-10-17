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
      name:"Echoes of Night",
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
      link:"",
      platform:"",
      target: "",
      state: "",
      video: "",
      genre: "",
      borderColorOption:"pink",
    },
    {
      name:"Golden Carrot",
      description:"",
      img:"/assets/img/banners/slBanner.png",
      link:"",
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
