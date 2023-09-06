import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowDropDownPage } from './dropDownData.page';

describe('ShowDropDownPage', () => {
  let component: ShowDropDownPage;
  let fixture: ComponentFixture<ShowDropDownPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ShowDropDownPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
