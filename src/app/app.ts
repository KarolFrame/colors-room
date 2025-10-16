import { Component, signal, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Content } from "./components/content/content";
import { ContentGames } from "./components/content-games/content-games";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Content, ContentGames],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  encapsulation: ViewEncapsulation.None,
})
export class App {
  protected readonly title = signal('colors-room');
}
