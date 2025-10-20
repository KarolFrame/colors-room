import { Routes } from '@angular/router';
import { ContentHome } from './components/content-home/content-home';
import { ContentGames } from './components/content-games/content-games';

export const routes: Routes = [
    { path: '', component: ContentHome },
    { path: 'games', component: ContentGames },
];
