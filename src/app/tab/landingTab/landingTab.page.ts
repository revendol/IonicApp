import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'landingTab.page.html',
  styleUrls: ['landingTab.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class LandingTabPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {}
}
