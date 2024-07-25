import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, Routes } from '@angular/router';
import { BaseComponent } from './app/layouts/base/base.component';
const routes: Routes = [
  {
    path: '',
    component:BaseComponent
},
];
bootstrapApplication(AppComponent, 
  {
    providers: [provideAnimationsAsync(), provideRouter(routes)],
    }).catch((err) => console.error(err)
)
  .catch((err) => console.error(err));
