import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  CarouselComponent,
  CarouselConfig,
  CarouselControlComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent
} from '@coreui/angular';
import { CarouselCustomConfig } from './carousel.config';
import { title } from 'process';


@Component({
  selector: 'app-content-games-carousel',
  imports: [CarouselComponent,
    CarouselIndicatorsComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    CarouselControlComponent,
    RouterLink],
  templateUrl: './content-games-carousel.html',
  styleUrl: './content-games-carousel.scss',
  providers: [{ provide: CarouselConfig, useClass: CarouselCustomConfig }]
})

export class ContentGamesCarousel implements OnInit{
  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });
  ngOnInit(): void {
    this.slides[0] = {
      src: './assets/img/banners/eonBanner.png',
      title: "Echoes of Night"
    };
    this.slides[1] = {
      src: './assets/img/banners/slBanner.png',
      title: "Shader Lukers"
    };
    this.slides[2] = {
      src: './assets/img/banners/veronicaBanner.png',
      title: "Veronica"
    };
  }

  onItemChange($event: any): void {
    console.log('Carousel slide changed to index:', $event);
  }
}
