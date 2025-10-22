import { Injectable } from '@angular/core';

export interface Link{
  socialName:string;
  socialLink: string;
}

@Injectable({
  providedIn: 'root'
})
export class SocialMediaDataService {
  socialLinks: Link[] = [
    { socialName: "X", socialLink: "https://x.com/colorsroom?s=21&t=9LKrT0yIzXqYmqYP1QXXkw",},
    { socialName: "YouTube", socialLink: "https://www.youtube.com/@colorsroomdev",},
    { socialName: "Instagram", socialLink: "https://www.instagram.com/colorsroomdev",},
    { socialName: "Steam", socialLink: "https://store.steampowered.com/developer/colorsroom",},
    { socialName: "Itch.io", socialLink: "https://colorsroom.itch.io",},
  ];

  constructor(){};

  getSocialMedia(): Link[]{
    return this.socialLinks;
  }
  getLinkByName(name: string): string {
        const socialObject = this.socialLinks.find(link => link.socialName === name);
        return socialObject ? socialObject.socialLink : '';
    }
}
