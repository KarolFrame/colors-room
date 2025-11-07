import { Component, OnInit, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { PathDataService } from '../../services/path-data';
import { isPlatformBrowser } from '@angular/common';

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

  constructor(private pathServices: PathDataService, @Inject(PLATFORM_ID) private platformId: Object){}

  ngOnInit() {
    this.show = true;
    this.pathServices.setActivePath("/");
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const videos = document.querySelectorAll('video');
      videos.forEach(v => {
        v.muted = true;
        v.volume = 0;
      });
    }
  }

}
