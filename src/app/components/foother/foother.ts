import { Component, OnInit } from '@angular/core';
import { Link, SocialMediaDataService } from '../../services/social-media-data';

@Component({
  selector: 'app-foother',
  imports: [],
  templateUrl: './foother.html',
  styleUrl: './foother.scss'
})
export class Foother{
  constructor (private socialMediaData:SocialMediaDataService){}

  getLink(name:string): string{
    return this.socialMediaData.getLinkByName(name);
  }
}
