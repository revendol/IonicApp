import { ComponentFixture, TestBed } from '@angular/core/testing';

import { dropDownTabPage } from './dropDownTab.page';

describe('dropDownTabPage', () => {
  let component: dropDownTabPage;
  let fixture: ComponentFixture<dropDownTabPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [dropDownTabPage],
    }).compileComponents();

    fixture = TestBed.createComponent(dropDownTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
