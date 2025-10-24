import { Component } from '@angular/core';
import { AboutUsCard } from "../about-us-card/about-us-card";
import { CommonModule } from '@angular/common';
import { ExternalContributor } from '../../services/people-data';
import { PeopleDataService } from '../../services/people-data';

@Component({
  selector: 'app-about-us-externals',
  imports: [AboutUsCard, CommonModule],
  templateUrl: './about-us-externals.html',
  styleUrl: './about-us-externals.scss'
})
export class AboutUsExternals {
  externals: ExternalContributor[] = [];
    
  constructor(private peopleDataService:PeopleDataService){}
  ngOnInit(): void {
    this.externals = this.peopleDataService.getExternalContributors();
  }
}
