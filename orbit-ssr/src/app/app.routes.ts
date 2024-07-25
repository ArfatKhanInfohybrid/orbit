import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./layouts/layouts.routes').then(m => m.LayoutRoutes )
    }
];
