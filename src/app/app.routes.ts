import { Routes } from '@angular/router';
import { AppShell } from './app-shell/app-shell';
import { ContentHome } from './components/content-home/content-home';

export const routes: Routes = [
    { path: 'shell', component: AppShell },
    { path: '', component: ContentHome },
];
