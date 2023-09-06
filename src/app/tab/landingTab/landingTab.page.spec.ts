import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { LandingTabPage } from './landingTab.page';

describe('LandingTabPage', () => {
  let component: LandingTabPage;
  let fixture: ComponentFixture<LandingTabPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingTabPage],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
