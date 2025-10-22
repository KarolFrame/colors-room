import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-contact',
  imports: [CommonModule],
  templateUrl: './content-contact.html',
  styleUrl: './content-contact.scss',
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        query('*', [
          style({ transform: 'translateX(-100%)', opacity: 0 })
        ], { optional: true }),
        query('*', [
          stagger('150ms', [
            animate('800ms cubic-bezier(0.25, 0.8, 0.5, 1)', style({ transform: 'translateX(0)', opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ContentContact implements OnInit {
  show = false;
  constructor(){};

  ngOnInit(): void {
    this.show = true;
  }
}
