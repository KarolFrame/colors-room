import { Component } from '@angular/core';
import { Header } from "../header/header";
import { NavegationBar } from "../navegation-bar/navegation-bar";

@Component({
  selector: 'app-content',
  imports: [Header, NavegationBar],
  templateUrl: './content.html',
  styleUrl: './content.scss'
})
export class Content {

}
