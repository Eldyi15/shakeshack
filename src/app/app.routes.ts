import { Routes } from '@angular/router';
import { LandingPage } from './pages/landing-page/landing-page';
import { Home } from './pages/home/home';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: LandingPage
    },
    {
        path: 'home',
        component: Home
    }
];
