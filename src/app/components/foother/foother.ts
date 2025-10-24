import { Component, OnInit } from '@angular/core';
import { Link, SocialMediaDataService } from '../../services/social-media-data';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-foother',
  imports: [RouterLink],
  templateUrl: './foother.html',
  styleUrl: './foother.scss'
})
export class Foother{
  constructor (private socialMediaData:SocialMediaDataService){}

  getLink(name:string): string{
    return this.socialMediaData.getLinkByName(name);
  }
}
