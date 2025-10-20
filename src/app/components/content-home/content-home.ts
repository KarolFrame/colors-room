import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-home',
  imports: [CommonModule],
  templateUrl: './content-home.html',
  styleUrl: './content-home.scss',
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

export class ContentHome implements OnInit{
  show = false;

  ngOnInit() {
    this.show = true; 
  }
}
