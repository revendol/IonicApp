import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tab/landingTab/landingTab.routes').then((m) => m.routes),
  },

  {
    path: 'qrData',
    loadComponent: () => import('./dataList/qrData/qrData.page').then( m => m.ShowQRPage)
  },
  {
    path: 'dropDownData',
    loadComponent: () => import('./dataList/dropDownData/dropDownData.page').then( m => m.ShowDropDownPage)
  },
  {
    path: 'signatureData',
    loadComponent: () => import('./dataList/signatureData/signatureData.page').then( m => m.ShowSignaturePage)
  },
];
