import { Component, OnInit } from '@angular/core';
import { AboutUsCard } from "../about-us-card/about-us-card";
import { PeopleDataService } from '../../services/people-data';
import { Person } from '../../services/people-data';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-about-us-people',
  imports: [AboutUsCard, CommonModule],
  templateUrl: './about-us-people.html',
  styleUrl: './about-us-people.scss',
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        query('*', [
          style({ transform: 'translateX(-100%)', opacity: 0 })
        ], { optional: true }),
        query('*', [
          stagger('300ms', [
            animate('800ms cubic-bezier(0.25, 0.8, 0.5, 1)', style({ transform: 'translateX(0)', opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class AboutUsPeople implements OnInit{
  people: Person[] = [];

  constructor(private peopleDataService:PeopleDataService){}
  ngOnInit(): void {
    this.people = this.peopleDataService.getPeople();
  }
}
