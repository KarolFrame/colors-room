import { Component } from '@angular/core';
import { AboutUsCard } from '../about-us-card/about-us-card';
import { Collaborator } from '../../services/people-data';
import { PeopleDataService } from '../../services/people-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us-collaborators',
  imports: [AboutUsCard, CommonModule],
  templateUrl: './about-us-collaborators.html',
  styleUrl: './about-us-collaborators.scss'
})
export class AboutUsCollaborators {
  collabs: Collaborator[] = [];
  
    constructor(private peopleDataService:PeopleDataService){}
    ngOnInit(): void {
      this.collabs = this.peopleDataService.getCollaborators();
    }
}
