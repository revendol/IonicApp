import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowSignaturePage } from './signatureData.page';

describe('ShowSignaturePage', () => {
  let component: ShowSignaturePage;
  let fixture: ComponentFixture<ShowSignaturePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ShowSignaturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
