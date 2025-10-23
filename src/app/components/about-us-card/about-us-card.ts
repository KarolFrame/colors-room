import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-us-card',
  imports: [],
  templateUrl: './about-us-card.html',
  styleUrl: './about-us-card.scss'
})
export class AboutUsCard {
  @Input() name!:string;
  @Input() img!:string;
  @Input() description!:string;
  @Input() job!:string;
}
