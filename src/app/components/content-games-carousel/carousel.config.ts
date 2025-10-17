import { Injectable } from '@angular/core';

@Injectable()
export class CarouselCustomConfig {
  activeIndex = 0;
  animate = true;
  direction: 'next' | 'prev' = 'next';
  interval? = 3000;
}