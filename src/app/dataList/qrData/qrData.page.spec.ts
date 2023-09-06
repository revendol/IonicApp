import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowQRPage } from './qrData.page';

describe('ShowQRPage', () => {
  let component: ShowQRPage;
  let fixture: ComponentFixture<ShowQRPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ShowQRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
