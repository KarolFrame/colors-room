import { Component, signal, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Content } from "./components/content/content";
import { Foother } from "./components/foother/foother";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Content, Foother],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  encapsulation: ViewEncapsulation.None,
})
export class App {
  protected readonly title = signal('colors-room');
}
