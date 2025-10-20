import { Component } from '@angular/core';
import { Content } from "../components/content/content";
import { Foother } from "../components/foother/foother";

@Component({
  selector: 'app-app-shell',
  imports: [Content, Foother],
  templateUrl: './app-shell.html',
  styleUrl: './app-shell.scss'
})
export class AppShell {

}
