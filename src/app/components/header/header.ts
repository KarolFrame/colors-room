import { Component } from '@angular/core';
import { NavegationBar } from "../navegation-bar/navegation-bar";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [NavegationBar, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
