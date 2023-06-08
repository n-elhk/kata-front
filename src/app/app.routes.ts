import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(
        ({ HomeComponent }) => HomeComponent
      ),
  },
  {
    path: 'app',
    loadComponent: () =>
      import('./pages/tools/tools.component').then(
        ({ ToolsComponent }) => ToolsComponent
      ),
  },
];
