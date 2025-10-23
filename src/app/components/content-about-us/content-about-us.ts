import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { AboutUsPeople } from "../about-us-people/about-us-people";

@Component({
  selector: 'app-content-about-us',
  imports: [CommonModule, AboutUsPeople],
  templateUrl: './content-about-us.html',
  styleUrl: './content-about-us.scss',
  animations: [
  trigger('slideIn', [
    transition(':enter', [
      query('h1, p, .w-full.lg\\:w-1\\/2', [ 
        style({ transform: 'translateX(-100%)', opacity: 0 })
      ], { optional: true }),
      query('h1, p, .w-full.lg\\:w-1\\/2', [
        stagger('200ms', [
          animate('800ms cubic-bezier(0.25, 0.8, 0.5, 1)', style({ transform: 'translateX(0)', opacity: 1 }))
        ])
      ], { optional: true })
    ])
  ])
]
})
export class ContentAboutUs implements OnInit{
  show = false;

  ngOnInit() {
    this.show = true; 
  }
}
