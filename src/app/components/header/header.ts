import { Component } from '@angular/core';
import { NavegationBar } from "../navegation-bar/navegation-bar";

@Component({
  selector: 'app-header',
  imports: [NavegationBar],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
