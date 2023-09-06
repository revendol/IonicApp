import { ComponentFixture, TestBed } from '@angular/core/testing';

import { singnatureTabPage } from './singnatureTab.page';

describe('singnatureTabPage', () => {
  let component: singnatureTabPage;
  let fixture: ComponentFixture<singnatureTabPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [singnatureTabPage],
    }).compileComponents();

    fixture = TestBed.createComponent(singnatureTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
