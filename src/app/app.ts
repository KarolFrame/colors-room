import { Component, signal, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Content } from "./components/content/content";
import { ContentGames } from "./components/content-games/content-games";
import { Foother } from "./components/foother/foother";
import { BackgroundParticles } from "./components/background-particles/background-particles";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Content, ContentGames, Foother, BackgroundParticles],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  encapsulation: ViewEncapsulation.None,
})
export class App {
  protected readonly title = signal('colors-room');
}
