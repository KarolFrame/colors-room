import { Component, signal, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Content } from "./components/content/content";
import { ContentGames } from "./components/content-games/content-games";
import { Foother } from "./components/foother/foother";
import { ContentHome } from "./components/content-home/content-home";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Content, ContentGames, Foother, ContentHome],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  encapsulation: ViewEncapsulation.None,
})
export class App {
  protected readonly title = signal('colors-room');
}
