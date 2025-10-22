import { Routes } from '@angular/router';
import { ContentHome } from './components/content-home/content-home';
import { ContentGames } from './components/content-games/content-games';
import { ContentContact } from './components/content-contact/content-contact';
import { ContentAboutUs } from './components/content-about-us/content-about-us';

export const routes: Routes = [
    { path: '', component: ContentHome },
    { path: 'games', component: ContentGames },
    { path: 'contact', component: ContentContact },
    { path: 'aboutus', component: ContentAboutUs },
];
