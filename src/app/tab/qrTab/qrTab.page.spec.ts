import { ComponentFixture, TestBed } from '@angular/core/testing';

import { qrTabPage } from './qrTab.page';

describe('qrTabPage', () => {
  let component: qrTabPage;
  let fixture: ComponentFixture<qrTabPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [qrTabPage],
    }).compileComponents();

    fixture = TestBed.createComponent(qrTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
