import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { NgModule } from '@angular/core';
import { NoMatchFoundComponent } from './no-match-found/no-match-found.component';

export const routes: Routes = [
    {
        path: '',
        component:BaseComponent
    },
    {
        path: '**',
        component:NoMatchFoundComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutes{}