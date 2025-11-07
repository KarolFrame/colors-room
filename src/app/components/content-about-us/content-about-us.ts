import { Component, OnInit, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { AboutUsPeople } from "../about-us-people/about-us-people";
import { AboutUsCollaborators } from '../about-us-collaborators/about-us-collaborators';
import { AboutUsExternals } from '../about-us-externals/about-us-externals';
import { PathDataService } from '../../services/path-data';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-content-about-us',
  imports: [CommonModule, AboutUsPeople, AboutUsCollaborators, AboutUsExternals],
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

  constructor(private pathServices:PathDataService, @Inject(PLATFORM_ID) private platformId: Object){}

  ngOnInit() {
    this.show = true;
    this.pathServices.setActivePath("/aboutus");
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
