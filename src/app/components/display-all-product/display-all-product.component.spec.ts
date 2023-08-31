import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllProductComponent } from './display-all-product.component';

describe('DisplayAllProductComponent', () => {
  let component: DisplayAllProductComponent;
  let fixture: ComponentFixture<DisplayAllProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayAllProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayAllProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
