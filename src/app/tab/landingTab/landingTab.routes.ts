import { Routes } from '@angular/router';
import { LandingTabPage } from './landingTab.page';

export const routes: Routes = [
  {
    path: 'LandingTab',
    component: LandingTabPage,
    children: [
      {
        path: 'qrTab',
        loadComponent: () =>
          import('../qrTab/qrTab.page').then((m) => m.qrTabPage),
      },
      {
        path: 'dropDownTab',
        loadComponent: () =>
          import('../dropDownTab/dropDownTab.page').then((m) => m.dropDownTabPage),
      },
      {
        path: 'singnatureTab',
        loadComponent: () =>
          import('../singnatureTab/singnatureTab.page').then((m) => m.singnatureTabPage),
      },
      {
        path: '',
        redirectTo: '/LandingTab/qrTab',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/LandingTab/qrTab',
    pathMatch: 'full',
  },
];
