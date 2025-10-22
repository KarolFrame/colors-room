import { Component, signal, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Content } from "./components/content/content";
import { Foother } from "./components/foother/foother";
import { HeaderNotification } from "./components/header-notification/header-notification";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Content, Foother, HeaderNotification],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  encapsulation: ViewEncapsulation.None,
})
export class App {
  protected readonly title = signal('colors-room');
}
